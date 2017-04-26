import React from 'react';
import CarouselInstagram from "../components/CarouselInstagram"

const Books = React.createClass({
    render(){
        return (
            <div>
                <CarouselInstagram {...this.props}/>
            </div>
        )
    }
});

export default Books;