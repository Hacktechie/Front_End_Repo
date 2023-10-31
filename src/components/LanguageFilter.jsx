import PropTypes from 'prop-types'
import { useState } from "react"
import { Card, Form } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'

function LanguageFilter({ langFilter, setLangFilter }) {

  const [isRadioVisible, setIsRadioVisible] = useState(true)
  const [rotationAngle, setRotationAngle] = useState(180)

  const toggleRadioVisibility = () => {
    setIsRadioVisible(!isRadioVisible)
    setRotationAngle(rotationAngle + 180)
  }

  function handleLangChange(e) {
    setLangFilter(e.target.value)
  }

  return (
    <div className='laguage_filter'>

      <div className='dropdown-container' onClick={toggleRadioVisibility}>

        <span>Languages</span>
        <div className='arrow'>
          <IoIosArrowDown size={22} style={{ transform: `rotate(${rotationAngle}deg)` }} />
        </div>

      </div>

      {isRadioVisible && (
        <div className='filter_radio' id='radios'>
          <Card style={{ border: 'none' }}>
            <Card.Body>

              <Form>
                <div>

                  <Form.Check
                    label='All'
                    name='group1'
                    type='radio'
                    value=''
                    checked={langFilter === ''}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    label='Tamil'
                    name='group1'
                    type='radio'
                    value='Tamil'
                    checked={langFilter === 'Tamil'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='English'
                    name='group1'
                    type='radio'
                    value='English'
                    checked={langFilter === 'English'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='Malayalam'
                    name='group1'
                    type='radio'
                    value='Malayalam'
                    checked={langFilter === 'Malayalam'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='Telugu'
                    name='group1'
                    type='radio'
                    value='Telugu'
                    checked={langFilter === 'Telugu'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='Kannada'
                    name='group1'
                    type='radio'
                    value='Kannada'
                    checked={langFilter === 'Kannada'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='Hindi'
                    name='group1'
                    type='radio'
                    value='Hindi'
                    checked={langFilter === 'Hindi'}
                    onChange={handleLangChange}
                  />

                  <Form.Check
                    gap={2}
                    label='Korean'
                    name='group1'
                    type='radio'
                    value='Korean'
                    checked={langFilter === 'Korean'}
                    onChange={handleLangChange}
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

LanguageFilter.propTypes = {
  langFilter: PropTypes.string,
  setLangFilter: PropTypes.func
}

export default LanguageFilter