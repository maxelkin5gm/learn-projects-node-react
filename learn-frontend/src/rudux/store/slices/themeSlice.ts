import {createSlice} from "@reduxjs/toolkit";

export interface ThemeState {
    themeIsDark: boolean
}

const initialState: ThemeState = {
    themeIsDark: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.themeIsDark = !state.themeIsDark
        }
    }
})