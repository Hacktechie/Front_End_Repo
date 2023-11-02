import { useState } from 'react'
import { ReactComponent as ProfileImg } from '../assets/profile-icon.svg'
import { Link } from 'react-router-dom'
import { AiOutlineFileText } from 'react-icons/ai'
import { PiChats } from 'react-icons/pi'
import { BsTelephone, BsChatLeftText } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import LoginModal from '../overlays/LoginModal'
import Logout from '../overlays/Logout'
import '../stylesheets/profile.css'
import { useSelector } from 'react-redux'

function Profile() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const userInfo = useSelector(state => state.auth.user)

  const [showLoginModal, setShowLoginModal] = useState(false) 
  const [showLogOut, setShowLogOut] = useState(false)

  return (
    <>
      <div className="header-container"></div>
      <div className="userInfo-wrap">
        <div className="text-center profileImg-wrap">
          <ProfileImg className='profile-img' />
        </div>

        {isLoggedIn ?
          <>
            <p className='h4 fw-semibold text-center pt-3'>{userInfo.userName}</p>
            <p className='text-center'>{userInfo.email}</p>
          </>

          :

          <div className='d-flex justify-content-center'>
            <button
              className='btn text-info fw-semibold p-0 m-0 mt-3'
              style={{ fontSize: '20px' }}
              onClick={() => setShowLoginModal(!showLoginModal)}
            >
              Sign in
            </button>
          </div>
        }

      </div>

      <div className='d-flex flex-column align-items-center mt-4'>
        <ul className='bg-white list-unstyled w-100 p-4 border c-nav-list'>

          <li>
            <Link to='/termsandconditions' className='route-links'>
              <AiOutlineFileText size={25} />
              <div className='route-text'>
                <span>Terms & Conditions</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link to='/faq' className='route-links'>
              <PiChats size={25} />
              <div className='route-text'>
                <span>FAQ</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link to='/contactus' className='route-links'>
              <BsTelephone size={25} />
              <div className='route-text'>
                <span>Contact Us</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link to='/feedback' className='route-links'>
              <BsChatLeftText size={25} />
              <div className='route-text'>
                <span>Feedback</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          {isLoggedIn &&
            <>
              <li>
                <button
                  className='btn btn-transparent d-flex p-0 w-100 route-links'
                  onClick={() => setShowLogOut(!showLogOut)}
                >

                  <FiLogOut size={25} />
                  <div className='route-text'>
                    <span>Logout</span>
                  </div>

                </button>
              </li>

              <hr />
            </>
          }

        </ul>
      </div>

      {showLoginModal && 
      <LoginModal
        show={showLoginModal}
        hide={() => setShowLoginModal(false)} />}

      {showLogOut &&
        <Logout
          show={showLogOut}
          hide={() => setShowLogOut(false)} />}
    </>
  )
}

export default Profile