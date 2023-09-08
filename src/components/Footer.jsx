import '../stylesheets/footer.css'
import googlePlay from '../assets/google-play-badge.svg'
import appstore from '../assets/appstore-badge.svg'
import { Link } from 'react-router-dom'
import { IoIosCall } from 'react-icons/io'
import { TbMessages } from 'react-icons/tb'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="py-5 mt-4">
      <div className="container-flow container-lg">

        <div className="d-flex gap-5 py-5 footer_row1">

          <h4 className='fw-semibold text-black m-0'>Download Paytm <br /> Ticketnew App</h4>

          <div className='d-flex gap-4'>

            <a href="https://play.google.com/store/apps/details?id=ticketnew.android.ui"
              target='_blank'
              rel="noopener noreferrer">
              <img src={googlePlay} alt="google play" height={40} />
            </a>

            <a href="https://apps.apple.com/in/app/ticketnew-book-movie-tickets/id495490813"
              target='_blank'
              rel="noopener noreferrer">
              <img src={appstore} alt="google play" height={40} />
            </a>

          </div>

          <div className='d-flex gap-4 ms-auto'>

            <Link to='/contactus' className='d-flex flex-column align-items-center text-black text-decoration-none'>
              <div className='p-2 rounded-circle border'>
                <IoIosCall size={30} style={{ color: '#606060' }} />
              </div>
              <span style={{ fontSize: '12px' }}>Customer Care</span>
            </Link>

            <Link to='/faq' className='d-flex flex-column align-items-center text-black text-decoration-none'>
              <div className='p-2 rounded-circle border'>
                <TbMessages size={30} style={{ color: '#606060' }} />
              </div>
              <span style={{ fontSize: '12px' }}>FAQ</span>
            </Link>

          </div>

        </div>

        <div className="d-flex py-5 footer_row2">

          <ul>
            <li>
              <h5 className='fw-bold text-black'>Browse All</h5>
            </li>

            <li><Link to="/">Now Showing</Link></li>
            <li><Link to="/">Coming Soon</Link></li>
            <li><Link to="/">Movies</Link></li>
            <li><Link to="/">Cinemas</Link></li>
          </ul>

          <ul>
            <li>
              <h5 className='fw-bold text-black'>Links</h5>
            </li>

            <li><Link to='/profile'>Register</Link></li>
            <li><Link to='/profile'>Login</Link></li>
            <li><Link to='/myorders'>Order</Link></li>
            <li><Link to='/faq'>Help</Link></li>
          </ul>

          <ul>
            <li>
              <h5 className='fw-bold text-black'>Cinemas</h5>
            </li>

            <li><Link to='/'>Kamala Cinemas, Vadapalani</Link></li>
            <li><Link to='/'>Devi Cineplex, Anna Salai</Link></li>
            <li><Link to='/'>Udhayam Complex, Jafferkhanpet</Link></li>
            <li><Link to='/'>Rakki Cinemas, Ambattur</Link></li>
            <li><Link to='/'>Woodlands Complex, Chennai</Link></li>
            <li><Link to='/'>PVR VR Mall, Anna Nagar</Link></li>
          </ul>

          <ul>
            <li>
              <h5 className='fw-bold text-black'>&nbsp;</h5>
            </li>

            <li><Link to='/'>Vettri Theatres RGB Laser, Chrompet</Link></li>
            <li><Link to='/'>Meenakshi Cinemas A/C DTS, Avadi</Link></li>
            <li><Link to='/'>Arvind Theatre A/C DTS, Karapakkam</Link></li>
            <li><Link to='/'>IDREAM Cinemas, Royapuram</Link></li>
            <li><Link to='/'>INOX Chandra Metro Mall, Virugambakkam</Link></li>
          </ul>

          <ul>
            <li>
              <h5 className='fw-bold text-black'>Enquiry</h5>
            </li>

            <li><Link to='/contactus'>Support Service (24x7)</Link></li>
          </ul>

        </div>

        <div className="text-center text-secondary" style={{fontSize: '12px'}}>
          <div className='d-flex justify-content-center gap-4 mb-3'>
            <BsTwitter size={30} color='gray' />
            <FaFacebookF size={30} color='gray' />
          </div>

          Copyright © 2023 Orbgen Technologies Pvt. Ltd. All rights reserved &middot; Terms of use &middot; Privacy policy
        </div>

      </div>

    </footer>
  )
}

export default Footer