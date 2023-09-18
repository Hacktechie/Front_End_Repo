import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/carousel.css'

function CarouselComp() {

  const carouselData = useSelector(state => state.data.carousel)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }]
  }

  return (
    <section className='carousel-section'>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map((item) => (
            <img
              key={item.id}
              src={item.img_url}
              alt={item.name}
              className='carousel-img' />
          ))}

          {carouselData.map((item) => (
            <img
              key={item.id}
              src={item.img_url}
              alt={item.name}
              className='carousel-img' />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CarouselComp