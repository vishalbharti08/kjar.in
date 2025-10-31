import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import config from "../../config";
import Loader from "../../components/Loader/Loader.jsx";
import {fetchCart} from "../../redux/cartThunks";
import {fetchAddresses} from "../../redux/addressThunks";
import {clearCart} from "../../redux/actions";
import authGuard from "../../guards/auth.guard.jsx";

const CheckoutSummary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

    // Redux state selectors
    const cartItems = useSelector((state) => state.cart.items);
    const guestItems = useSelector((state) => state.cart.guestItems);
    const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
    const cartLoading = useSelector((state) => state.cart.loading);

    const addresses = useSelector((state) => state.address.addresses);
    const selectedAddressId = useSelector((state) => state.address.selectedAddressId);
    const addressLoading = useSelector((state) => state.address.loading);

    const appliedCoupon = useSelector((state) => state.cart.appliedCoupon);
    const discountAmount = useSelector((state) => state.cart.discountAmount);

    const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);

    const [isPaying, setIsPaying] = useState(false);
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const [couponFetched, setCouponFetched] = useState(false);

    const SHIPPING_COST = 40;
    const displayedCartItems = isLoggedIn ? cartItems : guestItems;

    const buildHeaders = (isJson = true) => {
        const headers = {};
        if (isJson) headers["Content-Type"] = "application/json";
        const token = localStorage.getItem("token");
        if (token && token !== "null" && token !== "undefined") {
            headers["Authorization"] = `Bearer ${token}`;
        }
        return headers;
    };

    // SINGLE useEffect to fetch all data on mount
    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetch cart if empty
                if (displayedCartItems.length === 0) {
                    await dispatch(fetchCart());
                }

                // Fetch addresses if empty
                if (addresses.length === 0) {
                    await dispatch(fetchAddresses());
                }

                // Fetch coupon info if logged in and not already fetched
                if (isLoggedIn && !couponFetched) {
                    try {
                        const res = await fetch(`${config.BASE_URL}/cart`, {
                            headers: buildHeaders(false),
                        });

                        if (res.ok) {
                            const data = await res.json();
                            if (data.coupon) {
                                setAppliedCoupon(data.coupon);
                                setDiscountAmount(data.discountAmount || 0);
                            }
                        }
                    } catch (err) {
                        console.error("Error fetching coupon info:", err);
                    }
                    setCouponFetched(true);
                }

            } catch (error) {
                console.error("Error loading data:", error);
            } finally {
                setInitialLoadComplete(true);
            }
        };

        loadData();
    }, [dispatch]); // Only run once on mount

    // Redirect if no address AFTER initial load
    useEffect(() => {
        if (initialLoadComplete && !selectedAddress && addresses.length > 0) {
            console.log("No address selected, redirecting to address page");
            navigate("/checkout/address", {replace: true});
        }
    }, [selectedAddress, initialLoadComplete, addresses.length, navigate]);

    // Calculate totals
    const subtotal = displayedCartItems.reduce((sum, item) => {
        const price = isLoggedIn
            ? (item?.colorVariant?.price || 0)
            : (item?.selectedVariant?.price || 0);
        const qty = item?.quantity || 0;
        return sum + price * qty;
    }, 0);

    const couponDiscount = appliedCoupon ? Number(discountAmount || 0) : 0;
    const finalAmount = Math.max(subtotal + SHIPPING_COST - couponDiscount, 0);

    const generateReceiptId = () => `${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const handleBackToAddress = () => {
        navigate("/checkout/address");
    };

    const handlePayment = async () => {
        if (!displayedCartItems || displayedCartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        if (!selectedAddress) {
            alert("Please select a delivery address.");
            return;
        }
        if (finalAmount <= 0) {
            alert("Final payable amount must be at least ₹1 after discounts.");
            return;
        }

        setIsPaying(true);
        try {
            const amountInPaise = Math.floor(finalAmount * 100);
            const receiptId = generateReceiptId();

            const orderRes = await fetch(`${config.BASE_URL}/order`, {
                method: "POST",
                headers: buildHeaders(true),
                body: JSON.stringify({
                    amount: amountInPaise,
                    currency: "INR",
                    receipt: receiptId,
                }),
            });

            if (!orderRes.ok) {
                const errBody = await orderRes.json().catch(() => ({}));
                console.error("Error creating order:", errBody);
                alert(errBody?.error?.description || errBody?.message || "Could not create payment order.");
                setIsPaying(false);
                return;
            }

            const order = await orderRes.json();

            const options = {
                key: razorpayKey,
                amount: amountInPaise,
                currency: "INR",
                name: "KJAR EYEWEAR",
                image: "https://kjar.in/images/KJARLogo.jpeg",
                order_id: order.id,
                handler: async function (razorpayResponse) {
                    try {
                        const body = {
                            ...razorpayResponse,
                            cartItemIds: displayedCartItems.map((c) => c.id),
                            cartItems: displayedCartItems,
                            deliveryInfo: {
                                name: selectedAddress.name,
                                email: selectedAddress.email,
                                street: selectedAddress.address,
                                city: selectedAddress.city,
                                state: selectedAddress.state,
                                zipCode: selectedAddress.zipCode,
                                phoneNumber: selectedAddress.phone,
                                alternatePhone: selectedAddress.alternatePhone,
                                landmark: selectedAddress.landmark,
                            },
                            couponCode: appliedCoupon?.code || null,
                        };

                        const validateResponse = await fetch(`${config.BASE_URL}/order/add`, {
                            method: "POST",
                            headers: buildHeaders(true),
                            body: JSON.stringify(body),
                        });

                        if (!validateResponse.ok) {
                            const err = await validateResponse.json().catch(() => ({}));
                            console.error("/order/add failed:", err);
                            alert("Payment succeeded but saving order failed on server. Please contact support.");
                            // Still clear cart even if order save fails
                            dispatch(clearCart());
                            navigate("/order");
                            return;
                        }

                        const jsonResponse = await validateResponse.json();
                        console.log("Order saved:", jsonResponse);
                        // Clear cart after successful order
                        dispatch(clearCart());
                        navigate("/order");
                    } catch (err) {
                        console.error("Error during post-payment order save:", err);
                        alert("Something went wrong while saving the order. Please contact support.");
                        dispatch(clearCart());
                        navigate("/order");
                    }
                },
                prefill: {
                    email: selectedAddress?.email || "",
                    contact: selectedAddress?.phone || "",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (response) {
                console.error("Payment failed:", response);
                alert("Payment failed. Please try again.");
            });
            rzp.open();
        } catch (err) {
            console.error("handlePayment error:", err);
            alert("Could not initiate payment. Try again.");
        } finally {
            setIsPaying(false);
        }
    };

    // Show loading
    if (!initialLoadComplete || cartLoading || addressLoading) {
        return (
            <div className="h-[100dvh] p-6 flex items-center justify-center">
                <div>
                    <Loader/>
                </div>
            </div>
        );
    }

    // Check for empty cart
    if (displayedCartItems.length === 0) {
        return (
            <div className="h-[100dvh] p-6 flex flex-col items-center justify-center">
                <div className="text-xl font-semibold mb-4">Your cart is empty</div>
                <button
                    onClick={() => navigate("/products")}
                    className="px-6 py-3 bg-green-700 text-white rounded-2xl"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    // Check for missing address
    if (!selectedAddress) {
        return (
            <div className="h-[100dvh] p-6 flex flex-col items-center justify-center">
                <div className="text-xl font-semibold mb-4">No delivery address selected</div>
                <button
                    onClick={() => navigate("/checkout/address")}
                    className="px-6 py-3 bg-green-700 text-white rounded-2xl"
                >
                    Select Address
                </button>
            </div>
        );
    }

    return (
        <div className="h-[100dvh] p-4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="border rounded-2xl p-4 shadow-md bg-gray-50 mb-6 text-xs">
                {/* Cart Items */}
                <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold mb-2">Items</h3>
                    {displayedCartItems.map((item) => (
                        <div key={item.id || Math.random()} className="flex items-center gap-4 mb-3">
                            <img
                                src={
                                    isLoggedIn
                                        ? item?.colorVariant?.images?.[0]
                                        : item?.selectedVariant?.images?.[0]
                                }
                                alt={
                                    isLoggedIn
                                        ? item?.product?.name
                                        : item?.name
                                }
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <div className="font-medium">
                                    {isLoggedIn ? item?.product?.name : item?.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <div>
                                        {isLoggedIn
                                            ? item?.colorVariant?.name
                                            : item?.selectedVariant?.name}
                                    </div>
                                    <div>
                                        {isLoggedIn
                                            ? item?.colorVariant?.size
                                            : item?.selectedVariant?.size}
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    Qty: {item.quantity}
                                </div>
                            </div>
                            <div className="font-semibold">
                                ₹
                                {isLoggedIn
                                    ? (item?.colorVariant?.price || 0) * item.quantity
                                    : (item?.selectedVariant?.price || 0) * item.quantity}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Delivery Address */}
                <div className="py-4 border-b">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold">Delivery Address</h3>
                        <button
                            onClick={handleBackToAddress}
                            className="text-sm text-blue-600 underline"
                            type="button"
                        >
                            Change
                        </button>
                    </div>
                    <div className="mt-2">
                        <p>
                            <strong>{selectedAddress.name}</strong>
                        </p>
                        <p>
                            {selectedAddress.address}, {selectedAddress.city},{" "}
                            {selectedAddress.state} - {selectedAddress.zipCode}
                        </p>
                        {selectedAddress.landmark && (
                            <p>Landmark: {selectedAddress.landmark}</p>
                        )}
                        <p>
                            Phone: {selectedAddress.phone}
                            {selectedAddress.alternatePhone
                                ? ` (Alt: ${selectedAddress.alternatePhone})`
                                : ""}
                        </p>
                    </div>
                </div>

                {/* Price Summary */}
                <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-3">Price Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₹{SHIPPING_COST.toFixed(2)}</span>
                    </div>
                    {appliedCoupon && (
                        <div className="flex justify-between text-green-700 mb-2">
                            <span>Coupon ({appliedCoupon.code})</span>
                            <span>-₹{couponDiscount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                        <span>Total Payable</span>
                        <span>₹{finalAmount.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Pay Button */}
            <div className="flex justify-end mt-3">
                <button
                    onClick={handlePayment}
                    disabled={isPaying || finalAmount <= 0}
                    className={`px-6 py-3 rounded-2xl text-white font-semibold cursor-pointer ${
                        isPaying || finalAmount <= 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-700"
                    }`}
                >
                    {isPaying ? "Processing..." : `Pay Now ₹${finalAmount.toFixed(2)}`}
                </button>
            </div>
        </div>
    );
};

export default authGuard(CheckoutSummary);
