import React from 'react';
import Carousel from "../components/Carousel";
import store from '../store';

class Instagram extends React.Component {
    componentWillMount() {
        store.dispatch(this.props.fetchInstagramUserID(this.props.home[0].data.photos.photoUserName)).then(() => {
            store.dispatch(this.props.fetchInstagram(this.props.instagramUserId[0]));
        });
    }
    render(){
        return (
            <div>
                 {this.props.instagram ? <Carousel
                    slidesToShow={3}
                    sidesToScroll={3} 
                    {...this.props}
                /> : null }
            </div>
        )
    }
}

export default Instagram;