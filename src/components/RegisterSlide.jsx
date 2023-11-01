import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import * as Yup from 'yup'
import supabase from '../helpers/supabase'

function RegisterSlide({ hide, setLoading, setErr }) {

  const dispatch = useDispatch()

  // Schema for Validation
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('User Name is Required')
      .min(6, 'User Name must be atleast 6 characters long'),
    email: Yup.string()
      .required('Email is Required')
      .email('Invalid Email'),
    password: Yup.string()
      .required('Password is Required')
      .min(6, 'Password must be atleast 6 characters long'),
  })

  // Creates an new user in DB and logs in the created user
  async function handleSubmit(values) {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.userName,
        },
      },
    })

    // Handling Errors
    if (error) {
      setErr(error.message)
    }

    // Stores the user in the store
    else {
      dispatch(login(data))
      hide() // Hides Modal
    }
    setLoading(false)
  }

  return (
    <>
      <p className='h4 fw-semibold my-4'>Login with Email</p>

      <Formik
        initialValues={{ userName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            placeholder="Enter User Name"
            name="userName"
            className='p-4 fw-bold w-100 user-input'
            onFocus={() => setErr('')}
          />
          <ErrorMessage name="userName" component="div" className='text-danger' />

          <Field
            type="text"
            placeholder="Enter Email"
            name="email"
            className='p-4 fw-bold w-100 mt-4 user-input'
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
            Register
          </Button>
        </Form>
      </Formik>
    </>
  )
}

RegisterSlide.propTypes = {
  hide: PropTypes.func,
  setLoading: PropTypes.func,
  setErr: PropTypes.func
}

export default RegisterSlide
