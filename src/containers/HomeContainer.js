import React from 'react';
import BooksHomeContainer from './BooksHomeContainer';
import AboutHomeContainer from './AboutHomeContainer';
import EventsContainer from './EventsContainer';
import VideosContainer from './VideosContainer';
import ContactHomeContainer from './ContactHomeContainer';
import Carousel from "../components/Carousel";

class Home extends React.Component{
    render(){
        return (
            <div className="homepage">
                <Carousel slidesToShow={1} sidesToScroll={1} {...this.props} />
                <AboutHomeContainer {...this.props} />
                <BooksHomeContainer {...this.props} />
                <EventsContainer {...this.props} />
                <VideosContainer {...this.props} numberOfVideos="6" />
                <ContactHomeContainer {...this.props} />
            </div>
        )
    }
}

export default Home;