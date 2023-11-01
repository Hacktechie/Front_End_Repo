import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LuLanguages } from 'react-icons/lu'

function MovieCompSmall({ movie, hide }) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      style={{ textDecoration: 'none', color: 'black' }}
      onClick={() => hide ? hide() : null}
    >

      <div className='movies' >
        <div>
          <img src={movie.imgpath}
            alt={movie.label}
            height={52}
            width={55}
            loading='lazy'
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
    </Link>
  )
}

MovieCompSmall.propTypes = {
  movie: PropTypes.object,
  hide: PropTypes.func
}

export default MovieCompSmall