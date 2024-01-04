import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredients: ''
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<'bread' | 'cheese' | 'salami'>) => {
            state.ingredients += ' ' + action.payload;
        },
        clear: (state) => {
            state.ingredients = '';
        }
    }
})

export const { addIngredient, clear } = sandwichSlice.actions;

export default sandwichSlice.reducer;