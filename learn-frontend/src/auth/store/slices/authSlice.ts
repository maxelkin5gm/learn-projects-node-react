import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../models/User";


interface AuthState {
    isLoading: boolean,
    user: User | null
}

const initialState: AuthState = {
    isLoading: true,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoader(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },

        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload
        }

    }
})

export const authActions = authSlice.actions