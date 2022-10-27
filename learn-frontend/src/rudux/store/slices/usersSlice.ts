import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User {
    name: string,
    age: number
}


export interface UserState {
    users: User[]
    error: string
    isLoading: boolean
}

const initialState: UserState = {
    users: [],
    error: '',
    isLoading: false
}

export const usersSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        fetching(state) {
            state.error = ""
            state.isLoading = true
        },
        fetchingSuccess(state, action: PayloadAction<User[]>) {
            state.isLoading = false
            state.users = [...action.payload]
        },
        fetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})