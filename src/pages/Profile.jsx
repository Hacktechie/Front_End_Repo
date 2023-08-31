import { useState } from 'react'
import { ReactComponent as ProfileImg } from '../assets/profile-icon.svg'
import { Link } from 'react-router-dom'
import { AiOutlineFileText } from 'react-icons/ai'
import { PiChats } from 'react-icons/pi'
import { BsTelephone, BsChatLeftText } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import Logout from '../overlays/Logout'
import '../stylesheets/profile.css'

function Profile() {
  
  const [showLogOut, setShowLogOut] = useState(false)
  // Later this will come from redux store rather than a local state.
  
  return (
    <>
      <div className="header-container"></div>
      <div className="userInfo-wrap">
        <div className="text-center profileImg-wrap">
          <ProfileImg className='profile-img' />
        </div>
        <p className='h4 fw-semibold text-center pt-3'>Saravana Kumar</p>
        <p className='text-center'>saravana@gmail.com</p>
      </div>

      <div className='d-flex flex-column align-items-center my-4'>
        <ul className='bg-white list-unstyled w-100 p-4 border c-nav-list'>

          <li>
            <Link className='route-links'>
              <AiOutlineFileText size={25} />
              <div className='route-text'>
                <span>Terms & Conditions</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link className='route-links'>
              <PiChats size={25} />
              <div className='route-text'>
                <span>FAQ</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link className='route-links'>
              <BsTelephone size={25} />
              <div className='route-text'>
                <span>Contact Us</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <Link className='route-links'>
              <BsChatLeftText size={25} />
              <div className='route-text'>
                <span>Feedback</span>
                <IoIosArrowForward size={25} />
              </div>
            </Link>
          </li>

          <hr />

          <li>
            <button 
              className='btn btn-transparent d-flex p-0 w-100 route-links'
              onClick={() => setShowLogOut(!showLogOut)}
              >

              <FiLogOut size={25} />
              <div className='route-text'>
                <span>Logout</span>
                <IoIosArrowForward size={25} />
              </div>

            </button>
          </li>

        </ul>
      </div>

      {showLogOut && 
        <Logout 
          show={showLogOut}
          hide={() => setShowLogOut(false)} />}
    </>
  )
}

export default Profile