import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Events from './components/Events';
import Videos from './components/Videos';
import Contact from './components/Contact';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import './index.css';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/about" component={About}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/events" component={Events}></Route>
            <Route path="/videos" component={Videos}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
