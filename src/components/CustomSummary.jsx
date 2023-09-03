import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6'

function CustomSummary({ summary, text }) {

  const [isOpen, setIsOpen] = useState(false)

  const summaryStyle = {
    fontWeight: isOpen ? '600' : 'normal',
  };

  const arrowStyle = {
    transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
    pointerEvents: 'none'
  };

  return (
    <>
      <li className='d-flex position-relative' style={{userSelect: 'none'}}>
        <details className='w-100'>
          <summary
            style={summaryStyle}
            onClick={() => setIsOpen(!isOpen)}>
            {summary}
          </summary>
          <p className='mt-4' style={{ fontSize: '14px' }}>{text}</p>
        </details>

        <FaChevronDown
          className='position-absolute end-0 m-2' style={arrowStyle} />

      </li>

      <hr />
    </>
  )
}

CustomSummary.propTypes = {
  summary: PropTypes.string,
  text: PropTypes.string,
}

export default CustomSummary