import PropTypes from 'prop-types'
import { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'

function FormatFilter({ formatFilter, setFormatFilter }) {

  const [isRadioVisibl, setIsRadioVisibl] = useState(true)
  const [rotationAngl, setRotationAngl] = useState(180)

  const toggleRadioVisibilit = () => {
    setIsRadioVisibl(!isRadioVisibl)
    setRotationAngl(rotationAngl + 180)
  }

  function handleFormatChange(e) {
    setFormatFilter(e.target.value)
  }

  return (
    <div className='format_filter'>
      <div className='dropdown-container-2 ' onClick={toggleRadioVisibilit}>
        <span>Format</span>
        <div className='arrow'>
          <IoIosArrowDown size={22} style={{ transform: `rotate(${rotationAngl}deg)` }} />
        </div>
      </div>

      {isRadioVisibl && (
        <div className='filter_radio' id='radios'>
          <Card style={{ width: '15rem', border: 'none' }}>
            <Card.Body>

              <Form>
                <div className='mb-3'>

                  <Form.Check
                    label='All'
                    name='group1'
                    type='radio'
                    value='2D'
                    checked={formatFilter === '2D'}
                    onChange={handleFormatChange}
                  />

                  <Form.Check
                    label='IMAX'
                    name='group1'
                    type='radio'
                    value='IMAX'
                    checked={formatFilter === 'IMAX'}
                    onChange={handleFormatChange}
                  />

                </div>
              </Form>

            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

FormatFilter.propTypes = {
  formatFilter: PropTypes.string,
  setFormatFilter: PropTypes.func
}

export default FormatFilter