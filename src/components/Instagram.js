import React from 'react';
import CarouselInstagram from "../components/CarouselInstagram"

class Instagram extends React.Component {
    render(){
        return (
            <div>
                <CarouselInstagram {...this.props}/>
            </div>
        )
    }
}

export default Instagram;