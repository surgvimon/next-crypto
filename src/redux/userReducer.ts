import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const userReducer = createSlice({
    name: "users",
    initialState: {
      currentUser: null,
    },
    reducers: {
      SetCurrentUser: (state, action) => {
        state.currentUser = action.payload;
      },
    },  
});

export const { SetCurrentUser } = userReducer.actions;
export default userReducer.reducer;
