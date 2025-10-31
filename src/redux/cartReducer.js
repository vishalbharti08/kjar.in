import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,
    SET_GUEST_CART,
    CLEAR_CART,
    APPLY_COUPON_REQUEST,
    APPLY_COUPON_SUCCESS,
    APPLY_COUPON_FAILURE,
    REMOVE_COUPON,
} from './actions';

const initialState = {
    items: [],
    guestItems: [],
    loading: false,
    error: null,
    isLoggedIn: false,
    appliedCoupon: null,
    discountAmount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_REQUEST:
        case ADD_TO_CART_REQUEST:
        case UPDATE_CART_REQUEST:
        case REMOVE_FROM_CART_REQUEST:
        case APPLY_COUPON_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                isLoggedIn: true,
            };

        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
            };

        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };

        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case FETCH_CART_FAILURE:
        case ADD_TO_CART_FAILURE:
        case UPDATE_CART_FAILURE:
        case REMOVE_FROM_CART_FAILURE:
        case APPLY_COUPON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SET_GUEST_CART:
            return {
                ...state,
                guestItems: action.payload,
                isLoggedIn: false,
            };

        case APPLY_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                appliedCoupon: action.payload.coupon,
                discountAmount: action.payload.discountAmount,
            };

        case REMOVE_COUPON:
            return {
                ...state,
                appliedCoupon: null,
                discountAmount: 0,
            };

        case CLEAR_CART:
            localStorage.removeItem('guestCart');
            return {
                ...state,
                items: [],
                guestItems: [],
                appliedCoupon: null,
                discountAmount: 0,
            };

        default:
            return state;
    }
};

export default cartReducer;
