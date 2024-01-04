import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Book: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.book.books);
    const handleAddBook = () => {
        
        dispatch({ type: 'books/add' });
    }
    const handleDelete = (isbn: string) => {
        dispatch({ type: 'books/delete', payload: isbn });
    }
    return (
        <div>
            <h1>Choose your book:</h1>
            {books.map((book) => (
                <div key={book.isbn}>
                    <p>Book Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                    <button onClick={() => handleDelete(book.isbn)}>Delete book</button>
                </div>
            ))}
            <button onClick={handleAddBook}>Add book</button>
        </div>
    );
}
export default Book;


