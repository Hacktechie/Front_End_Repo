import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'

function LoginSlide({ hide }) {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => setErr(''), [email, password])

  async function handleLogin(e) {
    e.preventDefault()
    dispatch(login())
    hide()
  }

  return (
    <>
      <p className='h4 fw-semibold my-4'>Login with Email</p>

      <Form onSubmit={handleLogin}>
        <Form.Group>

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
          Login
        </Button>
      </Form>

      {err && <small className='d-block text-center text-danger mt-3'>{err}</small>}
    </>
  )
}

LoginSlide.propTypes = {
  hide: PropTypes.func
}

export default LoginSlide