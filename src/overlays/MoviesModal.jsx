import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import MovieCompSmall from '../components/MovieCompSmall';

function MoviesModal({ show, hide }) {

  const movies = useSelector(state => state.movies.movies)

  return (
    <Modal
      show={show}
      onHide={hide}
      size='xl'
      className='c-modal'
      backdropClassName="custom-backdrop">

      <Modal.Body>
        <h3 className='fw-bold my-4'>Now Playing</h3>

        <div className="modal-grid movies-grid">

          {movies.map(movie => (
            <MovieCompSmall key={movie.contentId} movie={movie} />
          ))}

        </div>

      </Modal.Body>

    </Modal>
  );
}

MoviesModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default MoviesModal;
