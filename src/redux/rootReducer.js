import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer.js';
import addressReducer from './addressReducer.js';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    address: addressReducer,
});

export default rootReducer;
