import { useState } from 'react';
import Slider from 'react-slick';
import '../stylesheets/upcomeingcarousel.css';
import { dataDigitalBestSeller } from '../assets/sample/data';

function UpcomeingCarousel() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  return (

    <div className='MainCard container'>
      <div className="MainCard_top_header">
        <a href="#">Upcoming Movies </a>
        <a href="#">View All</a>

      </div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item, index) => (
          <div key={index} className="upcomeig_card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
                style={{ height: '100%', width: '100%' }}
              />

              <div className="bot">
                <h1>{item.title}</h1>

                <div className="card-bottom">
                  <span>{item.price}</span>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
}

export default UpcomeingCarousel;
