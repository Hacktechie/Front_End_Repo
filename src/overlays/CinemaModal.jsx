import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function CinemaModal({ show, hide }) {

  const cinemas = useSelector(state => state.data.cinemas)

  return (
    <Modal
      show={show}
      onHide={hide}
      size='xl'
      className='c-modal'
      backdropClassName='custom-backdrop'>

      <Modal.Body>
        <h3 className='fw-bold my-4'>Cinemas in Chennai</h3>

        <div className="modal-grid cinemas-grid">
          <p className='fw-semibold'>Chennai</p>

          {cinemas?.map(cinema => (
            <div key={cinema.id} className='py-3 cinemas'>
              {cinema.name}
            </div>
          ))}

        </div>
      </Modal.Body>

    </Modal>
  );
}

CinemaModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default CinemaModal;
