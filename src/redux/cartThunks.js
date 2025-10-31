import axios from 'axios';
import config from '../config';
import {
    fetchCartRequest,
    fetchCartSuccess,
    fetchCartFailure,
    addToCartRequest,
    addToCartSuccess,
    addToCartFailure,
    updateCartRequest,
    updateCartSuccess,
    updateCartFailure,
    removeFromCartRequest,
    removeFromCartSuccess,
    removeFromCartFailure,
    setGuestCart,
    applyCouponRequest,
    applyCouponSuccess,
    applyCouponFailure,
    removeCoupon as removeCouponAction,
} from './actions';

// Fetch cart from API
export const fetchCart = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        if (!token) {
            // Handle guest cart
            const guestCart = JSON.parse(localStorage.getItem('guestCart')) || [];
            dispatch(setGuestCart(guestCart));
            return;
        }

        dispatch(fetchCartRequest());
        try {
            const response = await axios.get(`${config.BASE_URL}/cart`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            dispatch(fetchCartSuccess(response.data));
        } catch (error) {
            dispatch(fetchCartFailure(error.message));
            // Fallback to guest cart on error
            const guestCart = JSON.parse(localStorage.getItem('guestCart')) || [];
            dispatch(setGuestCart(guestCart));
        }
    };
};

// Add item to cart
export const addToCart = (productId, quantity, colorVariantId) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        if (!token) {
            // Handle guest cart in localStorage
            return;
        }

        dispatch(addToCartRequest());
        try {
            const response = await axios.post(
                `${config.BASE_URL}/cart/add`,
                { productId, quantity, colorVariantId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            dispatch(addToCartSuccess(response.data));
        } catch (error) {
            dispatch(addToCartFailure(error.message));
        }
    };
};

// Update cart item quantity
export const updateCartItem = (itemId, quantity) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        dispatch(updateCartRequest());
        try {
            const response = await axios.put(
                `${config.BASE_URL}/cart/update/${itemId}`,
                { quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            dispatch(updateCartSuccess(response.data));
        } catch (error) {
            dispatch(updateCartFailure(error.message));
        }
    };
};

// Remove item from cart
export const removeFromCart = (itemId) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        dispatch(removeFromCartRequest());
        try {
            await axios.delete(`${config.BASE_URL}/cart/remove/${itemId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            dispatch(removeFromCartSuccess(itemId));
        } catch (error) {
            dispatch(removeFromCartFailure(error.message));
        }
    };
};

// Apply coupon
export const applyCoupon = (couponCode, itemsPrice) => {
    return async (dispatch) => {
        dispatch(applyCouponRequest());
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error("Auth token not available");

            const response = await axios.post(
                `${config.BASE_URL}/coupon/validate`,
                { code: couponCode },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const coupon = response.data;
            const discount = Math.floor((itemsPrice * coupon.discount) / 100);

            dispatch(applyCouponSuccess(coupon, discount));
            return { success: true, message: `Coupon ${coupon.code} applied!` };
        } catch (error) {
            const errorMessage = error?.response?.data?.error || "Invalid or expired coupon";
            dispatch(applyCouponFailure(errorMessage));
            return { success: false, message: errorMessage };
        }
    };
};

// Remove coupon
export const removeCoupon = () => {
    return (dispatch) => {
        dispatch(removeCouponAction());
    };
};
