import React, { useState } from "react";

const Counter = () => {
 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount=>prevCount + 1);
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }
  const incrementTen = () => {
    setCount(prevCount=>prevCount + 10);
  }
  const decrementTen = () => {
    setCount(prevCount => prevCount - 10);
  }



  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={decrementTen} > Decrement by 10</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementTen}>Increment by 10</button>

    </>
  );
};

export default Counter;
