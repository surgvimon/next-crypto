import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        currentUser: null,
    },
    reducers: {
        signInUser: (state, action) => {
            state.authenticated = true;
            state.currentUser = action.payload;
        },
        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = null;
        },
    },
});
export const { signInUser, signOutUser } = authReducer.actions;
export default authReducer.reducer;
