import React from 'react';
import BooksContainer from './BooksContainer';
import AboutContainer from './AboutContainer';
import EventsContainer from './EventsContainer';
import VideosContainer from './VideosContainer';
import ContactContainer from './ContactContainer';

const Home = React.createClass({
    render(){
        return (
            <div>
                <AboutContainer />
                <BooksContainer />
                <EventsContainer />
                <VideosContainer />
                <ContactContainer />
            </div>
        )
    }
});

export default Home;