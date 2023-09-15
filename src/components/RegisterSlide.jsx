import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'

function RegisterSlide({ hide }) {

  const dispatch = useDispatch()

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => setErr(''), [userName, email, password])
  
  const [err, setErr] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login())
    hide()
  }

  return (
    <>
      <p className='h4 fw-semibold my-4'>Create Account</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group>

          <Form.Control
            type="text"
            required
            placeholder="Enter User Name"
            className='my-4 fw-bold user-input'
            onChange={(e) => setUserName(e.target.value)}
          />

          <Form.Control
            type="text"
            required
            placeholder="Enter Email"
            className='my-4 fw-bold user-input'
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            type="password"
            required
            placeholder="Enter Password"
            className='my-4 fw-bold user-input'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="info"
          type="submit"
          className='text-white get-otp-btn'
        >
          Register
        </Button>

      </Form>

      {err && <small className='d-block text-center text-danger mt-3'>{err}</small>}
    </>
  )
}

RegisterSlide.propTypes = {
  hide: PropTypes.func
}

export default RegisterSlide