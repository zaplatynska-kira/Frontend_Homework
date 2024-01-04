import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/storeRTK';
import { addIngredient, clear } from '../redux/sandwich/sandwichSlice';

const SandwichRTK = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = (): void => {
        dispatch(addIngredient('bread'));
    }
    const handleAddCheese = (): void => {
        dispatch(addIngredient('cheese'));
    }
    const handleAddSalami = (): void => {
        dispatch(addIngredient('salami'));
    }
    const handleDelete = (): void => {
        dispatch(clear());
    }
  
    return (
        <div>
            <h1>Choose your sandwich:</h1>
            <p>Sandwich: { ingredients }</p>
            <button onClick={handleAddBread}>Add bread</button>
            <button onClick={handleAddCheese}>Add cheese</button>
            <button onClick={handleAddSalami}>Add salami</button>
            <button onClick={handleDelete}>Delete all ingredients</button>
        </div>
    )
}

export default SandwichRTK