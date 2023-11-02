import { FiMail } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'

function ContactUs() {
  return (
    <div className="container bg-white p-5 my-3 my-lg-5 border" style={{ borderRadius: '30px', userSelect: 'none' }}>
      <h3 className="fw-bold mb-4 mb-lg-5">Contact Us</h3>

      <div className='bg-white list-unstyled d-flex flex-column gap-2'>

        <div className='contactUs-items'>
          <h5 className="fw-semibold">Send your feedback</h5>
          <p>Non-Existent company pvt ltd, Door No - 00, Block - Z, 200th Floor, Some Street, Some City, Some State - 999999.</p>
        </div>
        <hr />

        <div className='d-flex flex-column gap-2 contactUs-items'>
          <h5 className="fw-semibold">Support services (24/7)</h5>
          <p>
            <FiMail size='16px' />
            <a href="">support@faketicketnew.com</a>
          </p>

          <p>
            <BsTelephone size='16px' />
            <a href="">+91 1234567890</a>
          </p>
        </div>
        <hr />

        <div className='contactUs-items'>
          <h5 className="fw-semibold">Career opportunities</h5>
          <p>
            <FiMail size='16px' />
            <a href="">jobs@faketicketnew.com</a>
          </p>
        </div>
        <hr />

        <div className='contactUs-items'>
          <h5 className="fw-semibold">To advertise in the site</h5>
          <p>
            <FiMail size='16px' />
            <a href="">advertise@faketicketnew.com</a>
          </p>
        </div>
        <hr />

        <div className='contactUs-items'>
          <h5 className="fw-semibold">Theatre owners/Event organisers want to sell tickets</h5>
          <p>
            <FiMail size='16px' />
            <a href="">sell@faketicketnew.com</a>
          </p>
        </div>
        <hr />

        <div className='contactUs-items'>
          <h5 className="fw-semibold">To build business alliance</h5>
          <p>
            If you would like to build business alliance with us and have an interesting proposal, please contact us at
          </p>

          <p>
            <FiMail size='16px' />
            <a href="">marketing@faketicketnew.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs