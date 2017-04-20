import {createStore, comps} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from "react-router";

// import root reducer
import rootReducer from './reducers/index';

// import fake data
import books from './data/books';


//create an object fro default data

const defaultState = {
    books
}

const store = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;