import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slice/filterSlice";

export const store = configureStore({
    reducer: {
        filterSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch