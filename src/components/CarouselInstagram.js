import React from 'react';
import Slider from 'react-slick'

const Carousel = React.createClass ({

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
          {this.props.instagram[0].data.map((picture, i) => <div key={i}><img src={picture.images.low_resolution.url}/></div>)}
        </Slider>
      </div>
    );
  }
});

export default Carousel