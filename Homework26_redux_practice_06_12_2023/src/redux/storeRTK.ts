import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter/counterSlice"

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch