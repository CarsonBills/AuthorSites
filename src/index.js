import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/Main';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import BooksContainer from './containers/BooksContainer';
import EventsContainer from './containers/EventsContainer';
import VideosContainer from './containers/VideosContainer';
import ContactContainer from './containers/ContactContainer';
import DetailContainer from './containers/DetailContainer';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';


var ReactGA = require('react-ga');
ReactGA.initialize('UA-66576513-2');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}


import './index.css';

const router = (
    <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" component={Main}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="/about" component={AboutContainer}></Route>
            <Route path="/books" component={BooksContainer}></Route>
            <Route path="/events" component={EventsContainer}></Route>
            <Route path="/videos" component={VideosContainer}></Route>
            <Route path="/contact" component={ContactContainer}></Route>
            <Route path="/from_here_to_eternity" component={DetailContainer}></Route>
            <Route path="/smoke_gets_in_your_eyes" component={DetailContainer}></Route>
        </Route>
    </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
