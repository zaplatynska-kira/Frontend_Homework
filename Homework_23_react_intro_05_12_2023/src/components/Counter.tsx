import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

const Counter: React.FC = (): JSX.Element => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch({ type: 'counter/minus', payload: 1 });
    };

    const handlePlus = () => {
        dispatch({ type: 'counter/plus', payload: 1 });
    };

    const handleMinus10 = () => {
        dispatch({ type: 'counter/minus', payload: 10 });
    };

    const handlePlus10 = () => {
        dispatch({ type: 'counter/plus', payload: 10 });
    };

    return (
        <div>
            <div>Counter: {counter} </div>
            <button onClick={handleMinus}>Minus 1</button>
            <button onClick={handlePlus}>Plus 1</button>
            <button onClick={handleMinus10}>Minus 10</button>
            <button onClick={handlePlus10}>Plus 10</button>
        </div>
    );
};

export default Counter;
