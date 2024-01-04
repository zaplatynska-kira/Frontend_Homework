import React, { useState, FC } from "react";

// React.FunctionComponent | React.FC
const Counter: FC = (): JSX.Element => {
    // React.useState(0);
    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount(count + 1);
    }

    const changeCountByBtn = (x: number): void => setCount(count + x);

    return (
        <>
            <h2>Counter: {count}</h2>
            {/*  Body Function      CallFunction                     Body Function */}
            {/* increment   ||   changeCountByBtn(-10)   ||   () => changeCountByBtn(-10) */}
            <button onClick={(): void => changeCountByBtn(-10)}>Decrement10</button>
            <button onClick={(): void => changeCountByBtn(-1)}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={(): void => setCount(count + 10)}>Increment10</button>
        </>
    );
}

export default Counter;