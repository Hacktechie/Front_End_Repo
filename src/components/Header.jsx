import '../stylesheets/header.css'
import logo from '../assets/logo.avif'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FaUserAlt, FaGooglePlay, FaApple } from 'react-icons/Fa'
import { useState } from 'react'
import MoviesModal from '../modals/MoviesModal'
import CinemaModal from '../modals/CinemaModal'
import LoginPage from '../modals/LoginPage'
import { movies } from '../../data/movies'
import { cinemas } from '../../data/cinemas'

function HeaderNav() {

  const isLoggedIn = false
  const [showMovies, setShowMovies] = useState(false)
  const [showCinema, setShowCinema] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)

  return (
    <div className='nav-wrapper'>
      <Navbar className='c-nav-bar'>

        <Navbar.Brand>
          <img src={logo} height={54} width={108} alt="logo" />
        </Navbar.Brand>

        <Nav className='fw-semibold gap-3 ms-5'>

          <Nav.Link className='c-navlink px-3 py-2' style={{ color: 'black' }}>Home</Nav.Link>

          <Nav.Link className='c-navlink px-3 py-2'
            style={{ color: 'black' }}
            onClick={() => setShowMovies(true)}
          >
            Movies
          </Nav.Link>

          <Nav.Link className='c-navlink px-3 py-2'
            style={{ color: 'black' }}
            onClick={() => setShowCinema(!showCinema)}
          >
            Cinema
          </Nav.Link>

          <Nav.Link className='c-navlink px-3 py-2'
            style={{ color: 'black' }}
            onClick={() => !isLoggedIn && setShowLoginPage(!showLoginPage)}
          >
            Orders</Nav.Link>

        </Nav>

        <Nav className='ms-auto nav-right'>

          <button
            className='c-login-btn'
            onClick={() => setShowLoginPage(true)} >

            <span className='text-white fw-semibold'>Log in / Signup</span>
            <div className='rounded-circle profile-icon'>
              <FaUserAlt size={30} color='white' />
            </div>

          </button>

          <div className="sml-line"></div>

          <Button
            href='https://play.google.com/store/apps/details?id=ticketnew.android.ui'
            target='_blank'
            className='rounded-circle d-grid justify-content-center align-items-center store-btn'
            style={{ backgroundColor: '#002970', border: 'none' }}
          >
            <FaGooglePlay size={20} color='white' />
          </Button>

          <Button
            href='https://apps.apple.com/in/app/ticketnew-book-movie-tickets/id495490813'
            target='_blank'
            className='rounded-circle d-grid justify-content-center align-items-center store-btn'
            style={{ backgroundColor: '#002970', border: 'none' }}
          >
            <FaApple size={20} color='white' />
          </Button>

        </Nav>
      </Navbar>

      {/* Modals */}

      {showMovies &&
        <MoviesModal
          show={showMovies}
          hide={() => setShowMovies(false)}
          movies={movies} />
      }

      {showCinema &&
        <CinemaModal
          show={showCinema}
          hide={() => setShowCinema(false)}
          cinemas={cinemas} />
      }

      {showLoginPage &&
        <LoginPage
          show={showLoginPage}
          hide={() => setShowLoginPage(false)} />
      }

    </div>
  )
}

export default HeaderNav