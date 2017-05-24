import React from 'react';
import BooksHomeContainer from './BooksHomeContainer';
import AboutHomeContainer from './AboutHomeContainer';
import EventsContainer from './EventsContainer';
import VideosContainer from './VideosContainer';
import ContactHomeContainer from './ContactHomeContainer';
import Carousel from "../components/Carousel";
import config from "../config";
import store from '../store';

class Home extends React.Component{
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchHomeData(config.author));
        store.dispatch(this.props.fetchBookDetails(config.author));
        store.dispatch(this.props.fetchBooksPageData(config.author));
    }
    render(){
        return (
            <div className="homepage">
                <Carousel typeCarousel={"hero"} slidesToShow={1} sidesToScroll={1} {...this.props} />
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