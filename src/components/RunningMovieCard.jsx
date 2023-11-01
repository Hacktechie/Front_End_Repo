import PropTypes from 'prop-types'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RunningMovieCard({ movie }) {

  return (
    <Link to={`movies/${movie.id}`} style={{textDecoration: 'none'}}>
      <Card className='runningmovies_cards' key={movie.id}>
        <Card.Img variant='top' src={movie.imgpath} alt={movie.label} loading='lazy' />
        <Card.Body className='runningmovies_card_body'>

          <div>

            <div className='movie_cards_moviename d-flex'  >
              <span className='moviename' style={{ fontWeight: 'bold' }} >{movie.label}</span>
            </div>
            
            <div className='movie_cards_movierateinglang d-flex gap-2'>
              <span className='movierateing'>
                {movie.censor}
              </span>

              <div className='dot' >
                <span className='dott'></span>
              </div>

              <span className='movielang mx-1' >
                {movie.language}
              </span>
            </div>

          </div>
          
        </Card.Body>

        <ListGroup className='list-group-flush'>
          <span>Book Ticket</span>
        </ListGroup>
      </Card>
    </Link>
  )
}

RunningMovieCard.propTypes = {
  movie: PropTypes.object
}

export default RunningMovieCard