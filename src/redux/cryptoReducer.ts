import { createSlice } from '@reduxjs/toolkit';

const cryptoReducer = createSlice({
    name: 'crypto',
    initialState: {
        cryptos: null,
    },
    reducers: {
        setCrypto: (state, action) => {
            state.cryptos = action.payload;
            // console.log(action.payload)
        },
    },
});
export const { setCrypto } = cryptoReducer.actions;
export default cryptoReducer.reducer;
