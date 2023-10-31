import PropTypes from 'prop-types'
import Slider from 'react-slick'
import UpcomingMovieCard from './UpcomingMovieCard'
import '../stylesheets/upcomeingcarousel.css'
import RunningMovieCard from './RunningMovieCard'
import { useEffect, useState } from 'react'

function UpcomingCarousel({ movies, showRunningMovies, setShowRunningMovies }) {

  const [itemsToRender, setItemsToRender] = useState([])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  useEffect(() => setItemsToRender(movies.slice(0, 8)), [movies])

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
