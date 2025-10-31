import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchAddresses, addAddress, updateAddress, deleteAddress} from "../../redux/addressThunks";
import {setSelectedAddress} from "../../redux/actions";
import authGuard from "../../guards/auth.guard";
import Loader from "../../components/Loader/Loader.jsx";

const CheckoutAddress = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addresses = useSelector((state) => state.address.addresses);
    const selectedAddressId = useSelector((state) => state.address.selectedAddressId);
    const loading = useSelector((state) => state.address.loading);
    const error = useSelector((state) => state.address.error);
    const cartItems = useSelector((state) => state.cart.items);
    const guestItems = useSelector((state) => state.cart.guestItems);
    const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [addressToDelete, setAddressToDelete] = useState(null);


    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        email: "",
        pincode: "",
        city: "",
        address: "",
        state: "",
        alternatePhone: "",
        landmark: "",
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editAddressId, setEditAddressId] = useState(null);

    // Fetch addresses on component mount
    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    // Show form if no addresses exist
    useEffect(() => {
        if (!loading) {
            if (addresses.length === 0) {
                setIsFormVisible(true);
            } else {
                setIsFormVisible(false);
            }
        }
    }, [loading]);


    const resetForm = () => {
        setFormData({
            name: "",
            mobileNumber: "",
            email: "",
            pincode: "",
            city: "",
            address: "",
            state: "",
            alternatePhone: "",
            landmark: "",
        });
        setEditAddressId(null);
        setIsFormVisible(false);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name: formData.name,
            phone: formData.mobileNumber,
            email: formData.email,
            zipCode: formData.pincode,
            city: formData.city,
            address: formData.address,
            state: formData.state,
            alternatePhone: formData.alternatePhone,
            landmark: formData.landmark,
        };

        if (editAddressId) {
            await dispatch(updateAddress(editAddressId, payload));
        } else {
            await dispatch(addAddress(payload));
        }

        resetForm();
    };

    const handleEdit = (address) => {
        setFormData({
            name: address.name,
            mobileNumber: address.phone,
            email: address.email,
            pincode: address.zipCode,
            city: address.city,
            address: address.address,
            state: address.state,
            alternatePhone: address.alternatePhone || "",
            landmark: address.landmark || "",
        });
        setEditAddressId(address.id);
        setIsFormVisible(true);
    };

    const confirmDelete = async () => {
        if (addressToDelete) {
            await dispatch(deleteAddress(addressToDelete));
            setAddressToDelete(null);
            setShowDeleteModal(false);
        }
    };

    const cancelDelete = () => {
        setAddressToDelete(null);
        setShowDeleteModal(false);
    };


    const handleDelete = (id) => {
        setAddressToDelete(id);
        setShowDeleteModal(true);
    };


    const handleAddressSelect = (addressId) => {
        dispatch(setSelectedAddress(addressId));
    };

    const handleProceed = () => {
        const selectedAddress = addresses.find(
            (addr) => addr.id === selectedAddressId
        );
        if (!selectedAddress) {
            alert("Please select an address first!");
            return;
        }

        // Use cart items from Redux
        const displayedCartItems = isLoggedIn ? cartItems : guestItems;

        navigate("/checkout/summary", {
            state: {
                selectedAddress,
                cartItems: displayedCartItems,
            },
        });
    };

    if (loading && addresses.length === 0) {
        return (
            <div className="h-[100dvh]">
                <Loader/>
            </div>
        );
    }

    if (error) {
        console.error("Address error:", error);
    }

    return (
        <div className="p-4 text-xs">
            {addresses.length > 0 && (
                <div>
                    <div className="text-xl font-semibold mb-2">Select Address</div>
                    {addresses.map((addr) => {
                        const isSelected = addr.id === selectedAddressId;
                        return (
                            <div
                                key={addr.id}
                                onClick={() => handleAddressSelect(addr.id)}
                                className={`cursor-pointer border rounded-2xl p-5 mb-4 transition-all ${
                                    isSelected
                                        ? "border-green-600 bg-green-50 shadow-md"
                                        : "border-[#8d8d8d]"
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div><strong>Name:</strong> {addr.name}</div>
                                        <div><strong>Phone:</strong> {addr.phone}</div>
                                        <div>
                                            <strong>Address:</strong> {addr.address}, {addr.city},{" "}
                                            {addr.state} - {addr.zipCode}
                                        </div>
                                        {addr.landmark && (
                                            <div>
                                                <strong>Landmark:</strong> {addr.landmark}
                                            </div>
                                        )}
                                        {addr.alternatePhone && (
                                            <div>
                                                <strong>Alternate Phone:</strong> {addr.alternatePhone}
                                            </div>
                                        )}
                                    </div>

                                    <div className="ml-4 mt-1">
                                        <input
                                            type="radio"
                                            name="selectedAddress"
                                            checked={isSelected}
                                            readOnly
                                            className="w-5 h-5 accent-green-600 pointer-events-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end items-center gap-4 mt-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEdit(addr);
                                        }}
                                        className="px-3 py-2 bg-blue-600 text-white font-medium rounded-2xl cursor-pointer"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(addr.id);
                                        }}
                                        className="px-3 py-2 bg-red-600 text-white font-medium rounded-2xl cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Show form toggle */}
            <div className="mt-6">
                {!isFormVisible && addresses.length > 0 && (
                    <button
                        onClick={() => setIsFormVisible(true)}
                        className="px-4 py-2 bg-green-700 text-white rounded-2xl"
                    >
                        + Add New Address
                    </button>
                )}
            </div>

            {/* Add/Edit Address Form */}
            {isFormVisible && (
                <div className="mt-6">
                    <div className="text-xl font-semibold mb-2">
                        {editAddressId
                            ? "Edit Address"
                            : addresses.length === 0
                                ? "Add Delivery Address"
                                : "Add Address"}
                    </div>
                    <form onSubmit={handleSubmit}>
                        {[
                            {name: "name", placeholder: "Name"},
                            {
                                name: "mobileNumber",
                                placeholder: "10-digit mobile number",
                                maxLength: 10,
                                pattern: "^[0-9]{10}$",
                            },
                            {name: "email", placeholder: "Email", type: "email"},
                            {
                                name: "pincode",
                                placeholder: "Pincode",
                                maxLength: 6,
                                pattern: "^[0-9]{6}$",
                            },
                            {name: "city", placeholder: "City"},
                            {name: "address", placeholder: "Address"},
                            {name: "state", placeholder: "State"},
                            {
                                name: "alternatePhone",
                                placeholder: "Alternate Number (Optional)",
                                maxLength: 10,
                                pattern: "^[0-9]{10}$",
                            },
                            {name: "landmark", placeholder: "Landmark (Optional)"},
                        ].map(({name, placeholder, ...rest}) => (
                            <input
                                key={name}
                                type="text"
                                name={name}
                                placeholder={placeholder}
                                value={formData[name]}
                                onChange={handleChange}
                                required={
                                    name !== "alternatePhone" && name !== "landmark"
                                }
                                className="w-full p-3 border border-[#8d8d8d] rounded-2xl my-1.5 text-black box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff]"
                                {...rest}
                            />
                        ))}

                        <div className="flex justify-end items-center gap-4 mt-4">
                            {addresses.length > 0 && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-3 py-2 bg-gray-500 text-white font-medium rounded-2xl"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                className="px-3 py-2 bg-[#0a492e] text-white font-medium rounded-2xl cursor-pointer"
                                disabled={loading}
                            >
                                {loading
                                    ? "Saving..."
                                    : editAddressId
                                        ? "Update Address"
                                        : "Save Address & Proceed"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {addresses.length > 0 && (
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={handleProceed}
                        className="px-6 py-3 bg-green-700 text-white font-semibold rounded-2xl cursor-pointer"
                        disabled={!selectedAddressId}
                    >
                        Proceed to Summary →
                    </button>
                </div>
            )}

            {showDeleteModal && (
                <div className="fixed inset-0 bg-white/20 backdrop-blur-[10px] z-50">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none bg-[#fff] p-4 rounded-3xl backdrop-blur-[10px] text-xs w-full max-w-[300px] md:w-full md:max-w-[400px] md:text-base shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="mb-4">Are you sure you want to delete this address?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default authGuard(CheckoutAddress);
