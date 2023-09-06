import { useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../stylesheets/searchBar.css'
import { LuSearch } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const [selectA, setSelectA] = useState(true)
  const navigate = useNavigate()

  return (
    <div id='searchbar' className='bg-white px-5 py-3'>

      <div className="container d-flex align-items-center">

        <ToggleButtonGroup
          type="radio"
          name="options"
          className='toggle_grp'
          onClick={() => setSelectA(!selectA)}
        >
          <ToggleButton
            value="option1"
            className='toggle_btn'
            style={{
              backgroundColor: selectA && 'white',
              fontWeight: selectA && '600'
            }}>
            Now Showing
          </ToggleButton>

          <ToggleButton
            value="option2"
            className='toggle_btn'
            style={{
              backgroundColor: !selectA && 'white',
              fontWeight: !selectA && '600'
            }}>
            Coming Soon
          </ToggleButton>

        </ToggleButtonGroup>

        <div className='d-flex align-items-center flex-grow-1 ms-5'>
          <LuSearch size={20} />
          <input type="text"
            placeholder='Search Movie or a Cinema'
            className='mx-3 search_input'
            onClick={() => navigate('/search')} />
        </div>

        <div className='d-flex gap-2 border py-2 px-3' id='location-pin_container'>
          <GrLocation size={20} />
          Chennai
          <IoIosArrowDown size={20} />
        </div>

      </div>

    </div>
  )
}

export default SearchBar