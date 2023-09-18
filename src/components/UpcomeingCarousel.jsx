import { useState } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import '../stylesheets/upcomeingcarousel.css';

function UpcomeingCarousel() {

  const upcomingMovies = useSelector(state => state.data.upcomingMovies)
  
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

    <div className='MainCard container-flow container-lg p-4 pb-5'>
      <div className="MainCard_top_header">
        <a href="#">Upcoming Movies </a>
        <a href="#">View All</a>

      </div>
      <Slider {...settings}>
        {upcomingMovies.map(item => (
          <div key={item.upcoming_id} className="upcomeig_card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.img_url
                }
                alt={item.title}
                onError={handleErrorImage}
                style={{ height: '100%', width: '100%' }}
              />

              <div className="bot">
                <h1>{item.title}</h1>

                <div className="card-bottom">
                  <span>{item.language}</span>
                  <span className="category">{item.grn}</span>
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
