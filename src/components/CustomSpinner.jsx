import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

function CustomSpinner({ size, variant }) {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'content-box',
    height: '100%',
    margin: '20px'
  }

  return (
    <div style={containerStyle}>
      <Spinner
        variant={variant}
        style={{
          height: `${size}px`,
          width: `${size}px`
        }}
      />
    </div>
  )
}

CustomSpinner.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.string
}

export default CustomSpinner