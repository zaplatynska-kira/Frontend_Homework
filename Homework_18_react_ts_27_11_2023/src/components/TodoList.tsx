import React, { ChangeEvent, useState } from 'react';

const TodoList = () => {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>('');
    const [completedTasks, setCompletedTasks] = useState<boolean[]>([]);

    const handleAddTask = () => {
        setTaskList((prev) => [...prev, task]);
        setCompletedTasks((prev) => [...prev, false]);
        setTask('');
    };

    const handleChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(() => e.target.value);
    };

    const handleToggleTask = (index: number) => {
        setCompletedTasks((prev) => {
            const newCompletedTasks = [...prev];
            newCompletedTasks[index] = !newCompletedTasks[index];
            return newCompletedTasks;
        });
    };

    const handleDeleteTask = (index: number) => {
        setTaskList((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks.splice(index, 1);
            return newTasks;
        });

        setCompletedTasks((prevCompletedTasks) => {
            const newCompletedTasks = [...prevCompletedTasks];
            newCompletedTasks.splice(index, 1);
            return newCompletedTasks;
        });
    };

    return (
        <div>
            <h1>TodoList App</h1>
            <input
                type="text"
                placeholder='Enter a task...'
                onChange={(e) => handleChangeTask(e)}
                value={task}
            />
            <button onClick={handleAddTask}>Add task</button>
            
            <ol>
                {taskList.map((t, i) => (
                    <li key={i}>
                        <input
                            type="checkbox"
                            checked={completedTasks[i]}
                            onChange={() => handleToggleTask(i)}
                        />
                        <span>{t}</span>
                        <button onClick={() => handleDeleteTask(i)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;

