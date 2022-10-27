import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./slices/themeSlice";
import {usersSlice} from "./slices/usersSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        users: usersSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
