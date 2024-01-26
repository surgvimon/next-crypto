
'use client'
import { signInUser, signOutUser } from "@/redux/authReducer";
import { setCrypto } from "@/redux/cryptoReducer";
import { listenToCurrentUserProfile } from "@/redux/profileReducer";
import axios from "axios";


export const onLogOut = async (dispatch:any ) => {
    try {
      await axios.post("/api/users/logout");
      dispatch(signOutUser());
    } catch (error:any) {
        throw error
    //   message.error(error.response.data.message || "Something went wrong")
    }
};

export const getCurrentUser = async (dispatch:any) => {
    try {
        const response = await axios.get("/api/users/currentuser")
        dispatch(signInUser(response.data.data))
        dispatch(listenToCurrentUserProfile(response.data.data))
    } catch (error:any) {
        throw error
    }
};

export const getCryptoValue = async (dispatch:any) => {
    try {
        const response = await axios.get("/api/cryptos/list_cryptos")
        dispatch(setCrypto(response.data.data))
        
    } catch (error:any) {
        throw error
    }
};