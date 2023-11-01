import PropTypes from 'prop-types'
import { useState } from 'react';
import { Modal } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice';
import CustomSpinner from '../components/CustomSpinner'
import supabase from '../helpers/supabase';

function Logout({ show, hide }) {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await supabase.auth.signOut()
    dispatch(logout())
    setLoading(false)
    hide()
  }

  return (
    <Modal
      className='modal-lg logout-modal'
      show={show}
      onHide={hide}
      centered>

      <Modal.Body className='p-4'>
        {loading ? <CustomSpinner size={50} variant='info' /> : (
          <>
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
                onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </Modal.Body>

    </Modal>
  )
}

Logout.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default Logout