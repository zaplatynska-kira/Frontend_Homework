import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';

const CreateBook: React.FC = (): JSX.Element => {

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'books/add', payload: { title, author, year }});
        setTitle('');
        setAuthor('');
        setYear('');
    }

  return (
    <div>
        <h1>Create book</h1>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='author'
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder='year'
                value={year}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
            />

            <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default CreateBook