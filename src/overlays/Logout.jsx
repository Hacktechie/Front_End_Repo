import PropTypes from 'prop-types'
import { Modal } from "react-bootstrap"

function Logout({ show, hide }) {

  return (

    <Modal
      className='modal-lg logout-modal'
      show={show}
      onHide={hide}
      centered>

      <Modal.Body className='p-4'>
        <h4 className='fw-bold text-black pb-3'>Are you sure you want to logout ?</h4>
        <p className='pb-3'>We will not be able to show your order history and customized offers if you logout.</p>
        <div className='d-flex justify-content-end gap-3'>

          <button
            className='btn fw-semibold px-3 text-info rounded-pill'
            onClick={hide}>
            Cancel
          </button>

          <button
            className='btn fw-semibold px-3 btn-info text-white rounded-pill'
          > {/* Logout logic will go here */}
            Logout
          </button>
        </div>
      </Modal.Body>

    </Modal>
  )
}

Logout.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default Logout