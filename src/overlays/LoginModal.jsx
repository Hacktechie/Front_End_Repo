import PropTypes from 'prop-types'
import LoginSlide from '../components/LoginSlide';
import RegisterSlide from '../components/RegisterSlide';
import logo from '../assets/logo.avif'
import { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap'
import { GrClose } from 'react-icons/gr'

function LoginModal({ show, hide }) {
  

  const [isNewUser, setIsNewUser] = useState(false)

  return (
    <Modal
      show={show}
      onHide={hide}
      centered
      className='c-login-modal'>

      <Modal.Header>
        <Image src={logo} alt='logo' height={54} width={108} className='mx-auto' />

        <Button id='login-close-btn' onClick={hide}>
          <GrClose size={25} />
        </Button>
      </Modal.Header>

      <Modal.Body className='px-5'>

        {!isNewUser ?
          <LoginSlide hide={hide} />
          :
          <RegisterSlide hide={hide} />
        }

        <div className='d-flex justify-content-center'>
          <Button variant='link'
            className='my-3'
            id='c-btn-link'
            onClick={() => setIsNewUser(!isNewUser)}
          >
            {!isNewUser ? `New user? Create Account` : `Existing User? Login`}
          </Button>
        </div>

      </Modal.Body>
    </Modal>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default LoginModal;
