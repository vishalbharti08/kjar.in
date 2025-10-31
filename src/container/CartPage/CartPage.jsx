import {useEffect, useMemo, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./CartPage.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import {fetchCart, updateCartItem, removeFromCart} from "../../redux/cartThunks";
import {setGuestCart} from "../../redux/actions";
import {applyCoupon, removeCoupon} from "../../redux/cartThunks";
import Loader from "../../components/Loader/Loader.jsx";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.items);
    const guestItems = useSelector((state) => state.cart.guestItems);
    const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);
    const appliedCoupon = useSelector((state) => state.cart.appliedCoupon);
    const discountAmount = useSelector((state) => state.cart.discountAmount);

    const [couponCode, setCouponCode] = useState("");

    const shippingCost = 40;
    const displayedCartItems = isLoggedIn ? cartItems : guestItems;

    // Calculate items price
    const itemsPrice = useMemo(() => {
        return displayedCartItems.reduce((amount, item) => {
            const price = isLoggedIn
                ? item.colorVariant.price
                : item.selectedVariant.price;
            const quantity = item.quantity || 1;
            return amount + price * quantity;
        }, 0);
    }, [displayedCartItems, isLoggedIn]);

    const totalPrice = Math.floor(shippingCost + itemsPrice - discountAmount);

    // Fetch cart on mount
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    // Update guest cart in Redux and localStorage
    const updateGuestCart = (updatedCart) => {
        dispatch(setGuestCart(updatedCart));
        localStorage.setItem("guestCart", JSON.stringify(updatedCart));
    };

    // Increment quantity handler
    const incrementQuantity = async (item) => {
        if (isLoggedIn) {
            const newQuantity = item.quantity + 1;
            await dispatch(updateCartItem(item.id, newQuantity));
            dispatch(fetchCart());
        } else {
            const updatedGuestCart = guestItems.map((cartItem) =>
                cartItem.selectedVariant.id === item.selectedVariant.id &&
                cartItem.productId === item.productId
                    ? {
                        ...cartItem,
                        quantity:
                            cartItem.quantity + 1 <= cartItem.selectedVariant.stock
                                ? cartItem.quantity + 1
                                : cartItem.quantity,
                    }
                    : cartItem
            );
            updateGuestCart(updatedGuestCart);
        }
    };

    // Handle remove item
    const handleRemoveItem = async (cartItem) => {
        if (isLoggedIn) {
            if (cartItem.quantity > 1) {
                await dispatch(updateCartItem(cartItem.id, cartItem.quantity - 1));
            } else {
                await dispatch(removeFromCart(cartItem.id));
            }
            dispatch(fetchCart());
        } else {
            const updatedCart = guestItems
                .map((item) => {
                    if (
                        item.selectedVariant.id === cartItem.selectedVariant.id &&
                        item.productId === cartItem.productId
                    ) {
                        const newQty = item.quantity - 1;
                        if (newQty <= 0) return null;
                        return {...item, quantity: newQty};
                    }
                    return item;
                })
                .filter(Boolean);
            updateGuestCart(updatedCart);
        }
    };

    // Apply coupon handler
    const handleApplyCoupon = async () => {
        if (!isLoggedIn) {
            toast.error("Please login to apply coupon");
            return;
        }

        const result = await dispatch(applyCoupon(couponCode, itemsPrice));
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    // Remove coupon handler
    const handleRemoveCoupon = () => {
        dispatch(removeCoupon());
        setCouponCode("");
        toast.info("Coupon removed");
    };

    // Show loading state
    if (loading && displayedCartItems.length === 0) {
        return (
            <div className="h-[100dvh]">
                <Loader />
            </div>
        );
    }

    // Show error state
    if (error && displayedCartItems.length === 0) {
        return (
            <div className="flex justify-center items-center h-[100dvh] text-red-600 text-xl">
                Error loading cart: {error}
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Your Cart – KJAR Eyewear</title>
                <meta
                    name="description"
                    content="Review and manage the glasses and accessories in your cart. Ready for checkout."
                />
            </Helmet>
            <div className="flex flex-col justify-around h-full p-4">
                {displayedCartItems.length === 0 ? (
                    <div className="flex justify-center items-center h-[100dvh] text-[#000000] text-3xl">
                        OOPS! Your cart is empty...
                    </div>
                ) : (
                    <>
                        <div>
                            <div className="text-[#242424] font-bold mb-3 text-2xl">
                                CART ( {displayedCartItems.length} ITEM{displayedCartItems.length > 1 ? 'S' : ''} )
                            </div>

                            {displayedCartItems.map((cart, index) => (
                                <div
                                    key={cart.id || index}
                                    className="flex justify-between p-4 rounded-xl font-medium bg-[#f3f3f3] text-black mb-3"
                                >
                                    <div className={styles.productImgBox}>
                                        <img
                                            src={
                                                isLoggedIn
                                                    ? cart.colorVariant.images[0]
                                                    : cart.selectedVariant.images[0]
                                            }
                                            alt={isLoggedIn ? cart.product.name : cart.name}
                                            className="w-full rounded-sm"
                                        />
                                    </div>
                                    <div className={styles.productDescBox}>
                                        <div className={styles.productDesc}>
                                            <div className={styles.productDescText}>
                                                {isLoggedIn ? cart.product.name : cart.name}
                                            </div>
                                            <div>
                                                ₹{" "}
                                                {isLoggedIn
                                                    ? cart.colorVariant.price
                                                    : cart.selectedVariant.price}
                                            </div>
                                        </div>
                                        <div className={styles.antiGlareTxt}>
                                            <div>Anti-Glare Premium</div>
                                            <div>₹ 0</div>
                                        </div>
                                        <div className="border-b border-[#2e2e2e] my-4"></div>
                                        <div className={styles.productDesc}>
                                            <div>Final Price</div>
                                            <div>
                                                ₹
                                                {isLoggedIn
                                                    ? cart.colorVariant.price * cart.quantity
                                                    : cart.selectedVariant.price * cart.quantity}
                                            </div>
                                        </div>
                                        <div className="border-b border-[#2e2e2e] my-4"></div>
                                        <div>
                                            <div>Number of Items: {cart.quantity || 1}</div>
                                        </div>

                                        <div className={styles.cartBtns}>
                                            <div onClick={() => handleRemoveItem(cart)}>Remove</div>
                                            <div onClick={() => incrementQuantity(cart)}>Repeat</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bill Details */}
                        <div>
                            <div className="text-[#242424] font-bold mb-3 text-2xl">
                                BILL DETAILS
                            </div>
                            <div className={styles.billBox}>
                                <div className={styles.productDesc}>
                                    <div>Total item price</div>
                                    <div>₹ {itemsPrice.toFixed(2)}</div>
                                </div>
                                <div className="border-b border-[#2e2e2e] my-4"></div>
                                <div className={styles.productDesc}>
                                    <div>Shipping Cost</div>
                                    <div>₹ {shippingCost.toFixed(2)}</div>
                                </div>
                                <div className="border-b border-[#2e2e2e] my-4"></div>

                                {appliedCoupon && (
                                    <>
                                        <div className={styles.productDesc}>
                                            <div>Total discount</div>
                                            <div>
                                                -{" "}
                                                <span className={styles.discountPrice}>
                                                    ₹ {discountAmount.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-b border-[#2e2e2e] my-4"></div>
                                    </>
                                )}

                                <div className={styles.productDesc}>
                                    <div>Total payable</div>
                                    <div>₹ {totalPrice.toFixed(2)}</div>
                                </div>
                            </div>

                            {/* Coupon */}
                            <div className={styles.billBox}>
                                {!appliedCoupon ? (
                                    <div className={styles.billBottomBox}>
                                        <input
                                            type="text"
                                            placeholder="Enter Coupon Code"
                                            value={couponCode}
                                            onChange={(e) =>
                                                setCouponCode(e.target.value.toUpperCase())
                                            }
                                            className={styles.couponInput}
                                            disabled={!isLoggedIn}
                                        />
                                        <button
                                            className={styles.couponBtn}
                                            onClick={handleApplyCoupon}
                                            disabled={!isLoggedIn || !couponCode.trim()}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                ) : (
                                    <div className={styles.billBottomBox}>
                                        <div>
                                            <div>{appliedCoupon.code} applied</div>
                                            <div className={styles.lightTxt}>
                                                You are saving ₹{discountAmount.toFixed(2)}
                                            </div>
                                        </div>
                                        <div
                                            className={styles.removeCouponBtn}
                                            onClick={handleRemoveCoupon}
                                        >
                                            REMOVE
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Checkout */}
                            <div className={styles.checkoutBtn}>
                                <div
                                    className={styles.checkoutButton}
                                    onClick={() => {
                                        if (!isLoggedIn) {
                                            navigate("/checkout/signIn");
                                        } else {
                                            navigate("/checkout/address");
                                        }
                                    }}
                                >
                                    Proceed To Checkout <ChevronRightOutlinedIcon/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartPage;
