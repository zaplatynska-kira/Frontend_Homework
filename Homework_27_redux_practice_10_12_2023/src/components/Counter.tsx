import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

const Counter: React.FC = (): JSX.Element => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleMinus10 = () => {
    dispatch({ type: "counter/minus", payload: 10 });
  };

  const handleMinus = () => {
    dispatch({ type: "counter/minus", payload: 1 });
  };

  const handlePlus = () => {
    dispatch({ type: "counter/plus", payload: 1 });
  };

  const handlePlus10 = () => {
    dispatch({ type: "counter/plus", payload: 10 });
  };

  return (
    <div>
      <div>Counter: {counter} </div>
      <button onClick={handleMinus10}>Minus10</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handlePlus10}>Plus10</button>
    </div>
  );
};

export default Counter;