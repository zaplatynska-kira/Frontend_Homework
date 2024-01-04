import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/storeRTK";
import { deleteBook } from "../redux/book/bookSlice";
import EditFormRTK from "./EditFormRTK";

const BooksPageRTK: React.FC = (): JSX.Element => {
  const books = useSelector((state: RootState) => state.library.books);

    const dispatch = useDispatch();

  return (
    <div>
      <h1>Books in our library:</h1>
      <ul>
        {books.map(({ author, isbn, title, year }) => (
          <li key={isbn}>
            <p>{isbn}. "{title}" - author: {author}, {year}</p>
            <button onClick={() => dispatch(deleteBook(isbn))}>Delete Book</button>
            <EditFormRTK isbn={isbn} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPageRTK;