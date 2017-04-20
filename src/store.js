import {createStore, comps} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from "react-router";

// import root reducer
import rootReducer from './reducers/index';

// import fake data
import books from './data/books';
import articles from './data/articles';
import about from './data/about';
import contact from './data/contact';
import events from './data/events';
import home from './data/home';
import siteConfig from './data/siteConfig';
import videos from './data/videos';

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

const store = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;