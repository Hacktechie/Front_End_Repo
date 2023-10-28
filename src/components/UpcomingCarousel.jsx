import PropTypes from 'prop-types'
import Slider from 'react-slick'
import UpcomingMovieCard from './UpcomingMovieCard'
import '../stylesheets/upcomeingcarousel.css'
import RunningMovieCard from './RunningMovieCard'

function UpcomingCarousel({ movies, showRunningMovies, setShowRunningMovies }) {

  const itemsToRender = movies.slice(0, 10)

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

  return (

    <div className='MainCard container-flow container-lg p-4 pb-5'>
      <div className="MainCard_top_header">
        <span style={{ fontWeight: 'bold' }}>{!showRunningMovies ? 'Movies in Chennai' : 'Upcoming Movies'}</span>
        
        <button
          className='btn'
          onClick={() => setShowRunningMovies(!showRunningMovies)}>
          View All
        </button>

      </div>
      <Slider {...settings}>
        {!showRunningMovies ? (
          itemsToRender.map(movie => (
            <RunningMovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          itemsToRender.map(movie => (
            <UpcomingMovieCard key={movie.id} movie={movie} />
          ))
        )
        }
      </Slider>
    </div>

  )
}

UpcomingCarousel.propTypes = {
  movies: PropTypes.array,
  showRunningMovies: PropTypes.bool,
  setShowRunningMovies: PropTypes.func
}

export default UpcomingCarousel
