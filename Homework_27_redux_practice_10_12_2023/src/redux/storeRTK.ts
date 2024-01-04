import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter/counterSlice"
import sandwichSlice from "./sandwich/sandwichSlice";
import bookSlice from "./book/bookSlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice,
        sandwich: sandwichSlice,
        library: bookSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch