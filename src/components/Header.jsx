import '../stylesheets/header.css'
import { useState, lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { FaUserAlt, FaGooglePlay, FaApple } from 'react-icons/fa'
import { LuSearch } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import logo from '../assets/logo.avif'

const MoviesModal = lazy(() => import('../overlays/MoviesModal'))
const CinemaModal = lazy(() => import('../overlays/CinemaModal'))
const LoginModal = lazy(() => import('../overlays/LoginModal'))
const Logout = lazy(() => import('../overlays/Logout'))

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
        <Suspense>
          <MoviesModal
            show={showMovies}
            hide={() => setShowMovies(false)} />
        </Suspense>
      }

      {showCinema &&
        <Suspense>

          <CinemaModal
            show={showCinema}
            hide={() => setShowCinema(false)} />
        </Suspense>
      }

      {showLoginModal &&
        <Suspense>
          <LoginModal
            show={showLoginModal}
            hide={() => setShowLoginModal(false)} />
        </Suspense>
      }

      {showLogOut &&
        <Suspense>
          <Logout
            show={showLogOut}
            hide={() => setShowLogOut(false)} />
        </Suspense>
      }

    </header>
  )
}

export default Header