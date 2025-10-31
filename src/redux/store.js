import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your combined root reducer

const store = configureStore({
    reducer: rootReducer, // Pass your combined root reducer to configureStore
    // Optionally configure other middleware, devTools, etc.
});

export default store;
