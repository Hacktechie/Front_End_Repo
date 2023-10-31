import { Link } from "react-router-dom"
import { BiMoviePlay } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { IoTicketOutline } from 'react-icons/io5'
import '../stylesheets/mobileNavbar.css'

function MobileNav() {
  return (
    <nav className="mobile_navbar">
      <Link to='/'>
        <BiMoviePlay size='20px' />
        <span>Movies</span>
      </Link>

      <Link to='/profile'>
        <CgProfile size='20px' />
        <span>Profile</span>
      </Link>

      <Link to='/myorders'>
        <IoTicketOutline size='20px' />
        <span>Bookings</span>
      </Link>
    </nav>
  )
}

export default MobileNav