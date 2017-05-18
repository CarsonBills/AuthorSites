import React from 'react';
import Slider from 'react-slick'

class Carousel extends React.Component{

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
    };
    let carousel;
    if (this.props.instagram){
      carousel = <div className='carousel'>
        <Slider {...settings}>
          {this.props.instagram[0].data.map((picture, i) => <div key={i}><img src={picture.images.low_resolution.url}/></div>)}
        </Slider>
      </div>
    } else {
      carousel = null
    }

    return (
      carousel
    );
  }
}

export default Carousel