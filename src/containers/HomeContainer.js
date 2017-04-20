import React from 'react';
import BooksHomeContainer from './BooksHomeContainer';
import AboutHomeContainer from './AboutHomeContainer';
import EventsContainer from './EventsContainer';
import VideosContainer from './VideosContainer';
import ContactHomeContainer from './ContactHomeContainer';
import Carousel from "../components/Carousel";

const Home = React.createClass({
    render(){
        return (
            <div>
                <Carousel />
                <AboutHomeContainer />
                <BooksHomeContainer />
                <EventsContainer />
                <VideosContainer />
                <ContactHomeContainer />
            </div>
        )
    }
});

export default Home;