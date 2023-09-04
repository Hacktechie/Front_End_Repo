import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap';
import { LuLanguages } from 'react-icons/lu'

function MoviesModal({ show, hide, movies }) {

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
            <div key={movie.contentId} className=' movies' >

              <div>
                <img src={movie.imgPath} alt={movie.label} height={52} width={55} className='rounded' />
              </div>

              <div className='py-3 movie-label'>
                <p className='h6'>{movie.label}</p>
                <p>
                  <LuLanguages />
                  <span className='text-secondary ms-2'>{movie.language}</span>
                </p>
              </div>

            </div>
          ))}

        </div>

      </Modal.Body>

    </Modal>
  );
}

MoviesModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
  movies: PropTypes.array
}

export default MoviesModal;
