import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import cryptoReducer from './cryptoReducer';

const store = configureStore({
    reducer: {
        themes: themeReducer,
        auth: authReducer,
        profile: profileReducer,
        crypto: cryptoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export default store
