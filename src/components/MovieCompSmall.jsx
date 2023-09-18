import PropTypes from 'prop-types'
import { LuLanguages } from 'react-icons/lu'

function MovieCompSmall({ movie }) {
  return (
    <div className='movies' >

      <div>
        <img src={movie.imgpath}
          alt={movie.label}
          height={52}
          width={55}
          className='rounded' />
      </div>

      <div className='py-3 movie-label'>
        <p className='h6'>{movie.label}</p>
        <p>
          <LuLanguages />
          <span className='text-secondary ms-2'>{movie.language}</span>
        </p>
      </div>

    </div>
  )
}

MovieCompSmall.propTypes = {
  movie: PropTypes.object
}

export default MovieCompSmall