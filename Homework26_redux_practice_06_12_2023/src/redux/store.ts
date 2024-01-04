import { createStore, combineReducers } from 'redux'
import counterReducer from './counter/counterReducer';
import sandwichReducer from './sandwich/sandwichReducer';
import bookReducer from './book/bookReducer';

const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    library: bookReducer
}));

export default store;

export type RootState = ReturnType<typeof store.getState>