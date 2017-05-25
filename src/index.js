import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ArticlesContainer from './containers/ArticlesContainer';
import BooksListContainer from './containers/BooksListContainer';
import EventsContainer from './containers/EventsContainer';
import VideosContainer from './containers/VideosContainer';
import ContactContainer from './containers/ContactContainer';
import DetailContainer from './containers/DetailContainer';
import config from './config';

import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-66576513-2');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

import './global.css';
import './cdoughty.css';

const router = (
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="/about" component={AboutContainer}></Route>
            <Route path="/articles" component={ArticlesContainer}></Route>
            <Route path="/books" component={BooksListContainer}></Route>
            <Route path="/events" component={EventsContainer}></Route>
            <Route path="/videos" component={VideosContainer}></Route>
            <Route path="/contacts" component={ContactContainer}></Route>
            <Route path="/books/:id" component={DetailContainer}></Route>
        </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
