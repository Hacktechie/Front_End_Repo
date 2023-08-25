import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.avif'
import { GrClose } from 'react-icons/Gr'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';

function LoginPage({ show, hide }) {

  // const [inputValue, setInputValue] = useState('')

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
        <p className='h4 fw-semibold my-4'>Login with Email</p>

        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter Email"
              className='my-4 fw-bold'
              id='input'
              // onChange={(e) => setInputValue(e.target.value)}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className='my-4 fw-bold'
              id='input'
            />
          </Form.Group>

          <Button
            variant="info"
            type="submit"
            className='text-white'
            id='get-otp-btn'>
            Login
          </Button>

        </Form>

      </Modal.Body>

    </Modal>
  );
}

LoginPage.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default LoginPage;
