import React from 'react';
import Slider from 'react-slick'

const Carousel = React.createClass ({

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div><h3 style={{color:"white"}}>1</h3></div>
          <div><h3 style={{color:"white"}}>2</h3></div>
          <div><h3 style={{color:"white"}}>3</h3></div>
          <div><h3 style={{color:"white"}}>4</h3></div>
          <div><h3 style={{color:"white"}}>5</h3></div>
          <div><h3 style={{color:"white"}}>6</h3></div>
        </Slider>
      </div>
    );
  }
});

export default Carousel