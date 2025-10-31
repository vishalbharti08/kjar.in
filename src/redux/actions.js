export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Cart Action Types
export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILURE = 'UPDATE_CART_FAILURE';

export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';

export const SET_GUEST_CART = 'SET_GUEST_CART';
export const CLEAR_CART = 'CLEAR_CART';

// Address Action Types
export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

export const ADD_ADDRESS_REQUEST = 'ADD_ADDRESS_REQUEST';
export const ADD_ADDRESS_SUCCESS = 'ADD_ADDRESS_SUCCESS';
export const ADD_ADDRESS_FAILURE = 'ADD_ADDRESS_FAILURE';

export const UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAILURE = 'UPDATE_ADDRESS_FAILURE';

export const DELETE_ADDRESS_REQUEST = 'DELETE_ADDRESS_REQUEST';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAILURE = 'DELETE_ADDRESS_FAILURE';

export const SET_SELECTED_ADDRESS = 'SET_SELECTED_ADDRESS';

// Coupon Action Types
export const APPLY_COUPON_REQUEST = 'APPLY_COUPON_REQUEST';
export const APPLY_COUPON_SUCCESS = 'APPLY_COUPON_SUCCESS';
export const APPLY_COUPON_FAILURE = 'APPLY_COUPON_FAILURE';
export const REMOVE_COUPON = 'REMOVE_COUPON';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (userData) => ({
    type: FETCH_USER_SUCCESS,
    payload: userData,
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

// Cart Action Creators
export const fetchCartRequest = () => ({
    type: FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (cartData) => ({
    type: FETCH_CART_SUCCESS,
    payload: cartData,
});

export const fetchCartFailure = (error) => ({
    type: FETCH_CART_FAILURE,
    payload: error,
});

export const addToCartRequest = () => ({
    type: ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (item) => ({
    type: ADD_TO_CART_SUCCESS,
    payload: item,
});

export const addToCartFailure = (error) => ({
    type: ADD_TO_CART_FAILURE,
    payload: error,
});

export const updateCartRequest = () => ({
    type: UPDATE_CART_REQUEST,
});

export const updateCartSuccess = (updatedItem) => ({
    type: UPDATE_CART_SUCCESS,
    payload: updatedItem,
});

export const updateCartFailure = (error) => ({
    type: UPDATE_CART_FAILURE,
    payload: error,
});

export const removeFromCartRequest = () => ({
    type: REMOVE_FROM_CART_REQUEST,
});

export const removeFromCartSuccess = (itemId) => ({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: itemId,
});

export const removeFromCartFailure = (error) => ({
    type: REMOVE_FROM_CART_FAILURE,
    payload: error,
});

export const setGuestCart = (guestCartItems) => ({
    type: SET_GUEST_CART,
    payload: guestCartItems,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

// Address Action Creators
export const fetchAddressRequest = () => ({
    type: FETCH_ADDRESS_REQUEST,
});

export const fetchAddressSuccess = (addresses) => ({
    type: FETCH_ADDRESS_SUCCESS,
    payload: addresses,
});

export const fetchAddressFailure = (error) => ({
    type: FETCH_ADDRESS_FAILURE,
    payload: error,
});

export const addAddressRequest = () => ({
    type: ADD_ADDRESS_REQUEST,
});

export const addAddressSuccess = (address) => ({
    type: ADD_ADDRESS_SUCCESS,
    payload: address,
});

export const addAddressFailure = (error) => ({
    type: ADD_ADDRESS_FAILURE,
    payload: error,
});

export const updateAddressRequest = () => ({
    type: UPDATE_ADDRESS_REQUEST,
});

export const updateAddressSuccess = (address) => ({
    type: UPDATE_ADDRESS_SUCCESS,
    payload: address,
});

export const updateAddressFailure = (error) => ({
    type: UPDATE_ADDRESS_FAILURE,
    payload: error,
});

export const deleteAddressRequest = () => ({
    type: DELETE_ADDRESS_REQUEST,
});

export const deleteAddressSuccess = (addressId) => ({
    type: DELETE_ADDRESS_SUCCESS,
    payload: addressId,
});

export const deleteAddressFailure = (error) => ({
    type: DELETE_ADDRESS_FAILURE,
    payload: error,
});

export const setSelectedAddress = (addressId) => ({
    type: SET_SELECTED_ADDRESS,
    payload: addressId,
});

// Coupon Action Creators
export const applyCouponRequest = () => ({
    type: APPLY_COUPON_REQUEST,
});

export const applyCouponSuccess = (coupon, discountAmount) => ({
    type: APPLY_COUPON_SUCCESS,
    payload: { coupon, discountAmount },
});

export const applyCouponFailure = (error) => ({
    type: APPLY_COUPON_FAILURE,
    payload: error,
});

export const removeCoupon = () => ({
    type: REMOVE_COUPON,
});