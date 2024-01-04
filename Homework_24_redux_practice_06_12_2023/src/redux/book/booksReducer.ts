import { bookAction } from "./bookActions";
import { BookState } from "./bookState";
import { uid } from 'uid';

const initialState: BookState = {
    books: [
        { isbn: '1', title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 }
    ]
};

export default function booksReducer(
    state: BookState = initialState,
    action: bookAction
): BookState {
    switch (action.type) {
        case 'books/add':
            return { ...state, books: [...state.books, {isbn: uid(), ...action.payload}] };
        // case "books/delete":
        //     return;
        // case "books/editTitle":
        //     return;
        default:
            return state;
    }
}