import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap';

function CinemaModal({ show, hide }) {
  return (
    <Modal
      show={show}
      onHide={hide}
      size='xl'
      className='c-modal' >

      <Modal.Body>
        <h3 className='fw-bold my-4'>Cinemas in Chennai</h3>
        <p>This is the modal content.</p>
      </Modal.Body>

    </Modal>
  );
}

CinemaModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default CinemaModal;
