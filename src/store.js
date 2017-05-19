import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from "react-router";
import ReduxPromise from "redux-promise";

// import root reducer
import rootReducer from './reducers/index';

// import fake data
import books from './data/books';
const articles = [];
const about = [];
const contact = [];
const events = [];
import home from './data/home';
import siteConfig from './data/siteConfig';
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