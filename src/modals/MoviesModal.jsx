import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap';

function MoviesModal({ show, hide }) {
  return (
    <Modal
      show={show}
      onHide={hide}
      size='xl'
      className='c-modal' >

      <Modal.Body>
        <h3 className='fw-bold my-4'>Now Playing</h3>
        <p>This is the modal content.</p>
      </Modal.Body>

    </Modal>
  );
}

MoviesModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default MoviesModal;
