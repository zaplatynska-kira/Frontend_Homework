import React, { ChangeEvent } from "react";

interface IProps {
    taskName: string,
    index: number,
    done: boolean,
    remove: (index: number) => void;
    isDone: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Todo: React.FC<IProps> = (props) => {
    const { done: check, index, isDone, remove, taskName } = props;
    console.log(check, index, isDone, remove, taskName);
    
  return (
    <li className='task'>
      <span style={check ? { textDecoration: "line-through" } : {}}>
        {index + 1}. {taskName}
      </span>
      <input
        type="checkbox"
        name="completed"
        id="isDone"
        onChange={isDone}
      />
      <button onClick={() => remove(index)}>Remove</button>
    </li>
  );
};

export default Todo;