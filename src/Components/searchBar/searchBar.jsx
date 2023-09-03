import React from 'react'
import './searchBar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = React.useState(true)

    const handleClick = () => {
        setToggle(toggle => !toggle)
    }

    const navigateSearch = () => {
        navigate("/search")
    }
    return (
        <div className='searchBar_main'>
            <div className='searchBar'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-3'>
                        <div className='toggle_buttons'>
                            <div className='toggles' style={{ backgroundColor: toggle ? "#fff" : "transparent" }} onClick={handleClick}>Now showing</div>
                            <div className='toggles' style={{ backgroundColor: toggle ? "transparent" : "#fff" }} onClick={handleClick}>Coming soon</div>
                        </div>
                    </div>
                    <div className='col-lg-7'><div className='search_input'><i className="fa-solid fa-magnifying-glass" /><input type='text' placeholder='Search Movie' onClick={navigateSearch} /></div></div>
                    <div className='col-lg-2'><div className='locations'><div className='location_name'>Chennai</div></div></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar