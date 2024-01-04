import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Sandwich: React.FC = (): JSX.Element => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'bread' });
    }
    const handleAddCheese = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'cheese' });
    }
    const handleAddSalami = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'salami' });
    }
    const handleDelete = () => {
        dispatch({ type: 'sandwich/clear' });
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

export default Sandwich