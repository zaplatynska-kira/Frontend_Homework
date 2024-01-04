import React, { ChangeEvent, useState } from 'react'
import Todo from './Todo';
import JsonTodos from './JsonTodos';

interface ITask {
    name: string,
    completed: boolean
}

// rafce or rce
const TodoList: React.FC = (): JSX.Element => {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [task, setTask] = useState<ITask>({ name: '', completed: false });
    const [check, setCheck] = useState<boolean>(false);

    const handleAddTask = () => {
        setTaskList((prev) => [...prev, task]);
        setTask({ name: '', completed: false });
    }

    const handleChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask({
            name: e.target.value,
            completed: false
        });
        console.log(e);
    }

    const handleRemoveTask = (index: number): void => {
        const taskListCopy: ITask[] = [...taskList];
        taskListCopy.splice(index, 1);
        setTaskList(taskListCopy);
    }

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        // check = e.target.checked (Error! Локальное состояние не изменяется напрямую:
        // только с помощью специального метода)
        setCheck(e.target.checked);
    }

  return (
    <div className='container'>
        <h1>TodoList App</h1>
        <input
            className="form-control"
            style={{ display: 'inline', width: '65%' }}
            type="text"
            placeholder='Enter a task...'
            onChange={(e) => handleChangeTask(e)}
            value={task.name}
        />
        <button style={{ marginBottom: '5px' }} className='btn btn-primary' onClick={handleAddTask}>Add task</button>
        <ol className='task-list'>
            {taskList.map((t, i) => (
                <Todo
                    key={i}
                    taskName={t.name}
                    index={i}
                    done={check}
                    remove={handleRemoveTask}
                    isDone={handleIsDone}
                />
            ))}
        </ol>
        <JsonTodos />
    </div>
  )
}

/* <input type='date' onChange={(e) => {
            const inputDate = e.target.value;
            // const date = new Date(inputDate);
            const date = inputDate.split('-')
            console.log(date[2] + '.' + date[1] + '.' + date[0]);
            console.log(e);
        }
        }/> */

export default TodoList;