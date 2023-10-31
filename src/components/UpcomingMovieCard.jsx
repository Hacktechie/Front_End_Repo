import PropTypes from 'prop-types'

function UpcomingMovieCard({ movie }) {
  return (
    <div key={movie.id} className="upcomeig_card">
      <div className="card-top">
        <img
          src={movie.imgpath}
          alt={movie.label}
          style={{ height: '100%', width: '100%' }}
        />

        <div className="bot">
          <h6>{movie.label}</h6>

          <div className="card-bottom">
            <span>{movie.language}</span>
            <span className="category">{movie.grn}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

UpcomingMovieCard.propTypes = {
  movie: PropTypes.object
}

export default UpcomingMovieCard