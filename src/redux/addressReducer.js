import {
    FETCH_ADDRESS_REQUEST,
    FETCH_ADDRESS_SUCCESS,
    FETCH_ADDRESS_FAILURE,
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAILURE,
    UPDATE_ADDRESS_REQUEST,
    UPDATE_ADDRESS_SUCCESS,
    UPDATE_ADDRESS_FAILURE,
    DELETE_ADDRESS_REQUEST,
    DELETE_ADDRESS_SUCCESS,
    DELETE_ADDRESS_FAILURE,
    SET_SELECTED_ADDRESS,
} from './actions';

const initialState = {
    addresses: [],
    selectedAddressId: null,
    loading: false,
    error: null,
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADDRESS_REQUEST:
        case ADD_ADDRESS_REQUEST:
        case UPDATE_ADDRESS_REQUEST:
        case DELETE_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addresses: action.payload,
                selectedAddressId: action.payload.length > 0 ? action.payload[0].id : null,
            };

        case ADD_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addresses: [...state.addresses, action.payload],
            };

        case UPDATE_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addresses: state.addresses.map((addr) =>
                    addr.id === action.payload.id ? action.payload : addr
                ),
            };

        case DELETE_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addresses: state.addresses.filter((addr) => addr.id !== action.payload),
                selectedAddressId: state.selectedAddressId === action.payload
                    ? (state.addresses.length > 1 ? state.addresses[0].id : null)
                    : state.selectedAddressId,
            };

        case FETCH_ADDRESS_FAILURE:
        case ADD_ADDRESS_FAILURE:
        case UPDATE_ADDRESS_FAILURE:
        case DELETE_ADDRESS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SET_SELECTED_ADDRESS:
            return {
                ...state,
                selectedAddressId: action.payload,
            };

        default:
            return state;
    }
};

export default addressReducer;
