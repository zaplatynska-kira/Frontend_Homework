import { createStore, combineReducers } from 'redux'
import counterReducer from './counters/counterReducer';
import sandwichReducer from './sandwich/sandwichReducer';
import booksReducer from './book/booksReducer';

const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    book:booksReducer
}));

export default store;

export type RootState = ReturnType<typeof store.getState>