import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from "react-router";
import ReduxPromise from "redux-promise";

// import root reducer
import rootReducer from './reducers/index';

// import fake data
const books = [];
//const booksData = [];
const articles = [];
const about = [];
const contact = [];
const events = [];
const home = [];
const siteConfig = [];
const videos = [];

//create an object fro default data

const defaultState = {
    books,
    articles,
    about,
    contact,
    events,
    home,
    siteConfig,
    videos
}

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(ReduxPromise)
);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;