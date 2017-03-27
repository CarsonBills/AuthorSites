import React from 'react';
import Books from './Books';
import About from './About';
import Events from './Events';
import Videos from './Videos';
import Contact from './Contact';

const Home = React.createClass({
    render(){
        return (
            <div>
                <About />
                <Books />
                <Events />
                <Videos />
                <Contact />
            </div>
        )
    }
});

export default Home;