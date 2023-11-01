import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import * as Yup from 'yup'
import supabase from '../helpers/supabase'

function LoginSlide({ hide, setLoading, setErr }) {

  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is Required')
      .email('Invalid Email'),
    password: Yup.string()
      .required('Password is Required')
      .min(6, 'Password must be atleast 6 characters long'),
  })

  async function handleSubmit(values) {
    setLoading(true)
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    })

    if (error) {
      setErr(error.message)
    } else {
      dispatch(login(user))
      hide()
    }
    setLoading(false)
  }

  return (
    <>
      <p className='h4 fw-semibold my-4'>Login with Email</p>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            placeholder="Enter Email"
            name="email"
            className='p-4 fw-bold w-100 user-input'
            onFocus={() => setErr('')}
          />
          <ErrorMessage name="email" component="div" className='text-danger' />

          <Field
            type="password"
            placeholder="Enter Password"
            name="password"
            className='p-4 fw-bold w-100 mt-4 user-input'
            onFocus={() => setErr('')}
          />
          <ErrorMessage name="password" component="div" className='text-danger' />

          <Button
            variant="info"
            type="submit"
            className='text-white get-otp-btn mt-4'
          >
            Login
          </Button>
        </Form>
      </Formik>
    </>
  )
}

LoginSlide.propTypes = {
  hide: PropTypes.func,
  setLoading: PropTypes.func,
  setErr: PropTypes.func
}

export default LoginSlide
