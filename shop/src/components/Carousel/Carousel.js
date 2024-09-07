import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <img className="carousel-image" src={image.url} alt={image.alt} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Carousel;