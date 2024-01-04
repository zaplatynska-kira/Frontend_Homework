import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTitleBook } from '../redux/book/bookSlice';

const EditFormRTK: React.FC<{isbn: string}> = ({isbn}): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editTitleBook({ isbn, title }));
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <button type="submit">Edit</button>
        </form>
    )
}

export default EditFormRTK;