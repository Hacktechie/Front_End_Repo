import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/carousel.css'
import { carouselData } from '../../data/carouselData';

function CarouselComp() {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
  
  return (
    <section className='carousel-section'>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map((item) => (
            <img key={item.id} src={item.image_url} alt={item.name} className='carousel-img' />
          ))}
          {carouselData.map((item) => (
            <img key={item.id} src={item.image_url} alt={item.name} className='carousel-img' />
          ))}
        </Slider>
      </div>
    </section> 
  )
}

export default CarouselComp