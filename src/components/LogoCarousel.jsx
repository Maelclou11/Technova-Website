import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const LogoCarousel = ({ logos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Durée en ms entre chaque défilement
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
        {logos.map((logo, index) => (
        <div key={index} className='LogoCarousel-logo'>
            {logo.link ? <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img src={logo.url} alt={`Logo ${index}`} />
            </a>
             : 
             
             <img src={logo.url} alt={`Logo ${index}`} />
             
             }
        </div>
        ))}
    </Slider>
  );
}

export default LogoCarousel;