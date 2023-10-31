import '../stylesheets/header.css'
import logo from '../assets/logo.avif'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FaUserAlt, FaGooglePlay, FaApple } from 'react-icons/fa'
import { useState } from 'react'
import MoviesModal from '../overlays/MoviesModal'
import CinemaModal from '../overlays/CinemaModal'
import LoginModal from '../overlays/LoginModal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { useNavigate } from 'react-router-dom'
import Logout from '../overlays/Logout'
import { useSelector } from 'react-redux'
import { LuSearch } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'

function Header() {

  const navigate = useNavigate()

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const userInfo = useSelector(state => state.auth.user)

  const [showLogOut, setShowLogOut] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showCinema, setShowCinema] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showPopover, setShowPopover] = useState(false)

  const popover = (
    <Popover id="popover">
      <Popover.Body>
        <ul>
          <li>
            <button
              className='pop-btn'
              onClick={() => {
                navigate('/profile')
                setShowPopover(false)
              }}
            >
              View Profile
            </button>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <button
              className="pop-btn"
              onClick={() => {
                setShowLogOut(true)
                setShowPopover(false)
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  )

  return (
    <header>
      <Navbar className='c-nav-bar'>

        <Navbar.Brand>
          <img src={logo} alt="logo" className='brand-logo' />
        </Navbar.Brand>

        <Nav className='fw-semibold gap-3 ms-5 c-nav-left'>

          <Nav.Link
            className='c-navlink px-3 py-2'
            style={{ color: 'black' }}
            onClick={() => navigate('/')}
          >
            Home
          </Nav.Link>

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
            onClick={() => !isLoggedIn ? setShowLoginModal(!showLoginModal) : navigate('/myorders')}
          >
            Orders
          </Nav.Link>

        </Nav>

        <Nav className='ms-auto nav-right'>

          {/* Login Button */}

          {!isLoggedIn ? (
            <button
              className='c-login-btn'
              onClick={() => setShowLoginModal(true)} >

              <span className='text-white fw-semibold'>Log in / Signup</span>
              <div className='rounded-circle profile-icon'>
                <FaUserAlt size={30} color='white' />
              </div>

            </button>
          ) : (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={showPopover}
              onToggle={setShowPopover}
              rootClose
              overlay={popover}>

              <button
                className='c-login-btn'
              >

                <span className='text-white fw-semibold'>
                  {`Hi, ${userInfo.userName.split(' ')[0]}`}
                </span>

                <div className='rounded-circle profile-icon'>
                  <FaUserAlt size={30} color='white' />
                </div>

              </button>
            </OverlayTrigger>
          )}

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

        {/* Mobile header */}
        <Nav className="nav-mobile">
          <Nav.Link className="nav-mobile-search" onClick={() => navigate('/search')}>
            <LuSearch size={20} />
            <span>Search</span>
          </Nav.Link>

          <Nav.Link className="nav-mobile-location">
            <GrLocation size={20} />
            <span>Chennai</span>
          </Nav.Link>
        </Nav>

      </Navbar>

      {/* Modals */}

      {showMovies &&
        <MoviesModal
          show={showMovies}
          hide={() => setShowMovies(false)} />
      }

      {showCinema &&
        <CinemaModal
          show={showCinema}
          hide={() => setShowCinema(false)} />
      }

      {showLoginModal &&
        <LoginModal
          show={showLoginModal}
          hide={() => setShowLoginModal(false)} />
      }

      {showLogOut &&
        <Logout
          show={showLogOut}
          hide={() => setShowLogOut(false)} />}

    </header>
  )
}

export default Header