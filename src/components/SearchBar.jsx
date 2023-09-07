import { useState } from 'react'
import '../stylesheets/searchBar.css'
import { useNavigate } from 'react-router-dom'
import { GrSearch,GrLocation } from "react-icons/gr";

const SearchBar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(toggle => !toggle)
    }

    const navigateSearch = () => {
        navigate("/search")
    }
    return (
        <div className='searchBar_main'>
            <div className='searchBar align-items-center justify-content-center'>
                <div className='row '>
                    <div className='col-lg-3'>
                        <div className='toggle_buttons'>
                            <div className='toggles' style={{ backgroundColor: toggle ? "#fff" : "transparent", fontWeight: 500 }} onClick={handleClick}>Now showing</div>
                            <div className='toggles' style={{ backgroundColor: toggle ? "transparent" : "#fff" }} onClick={handleClick}>Coming soon</div>
                        </div>
                    </div>
                    <div className='col-lg-7'><div className='search_input' >
                        <span className='magni_search'><GrSearch /></span>
                        <input type='text' placeholder='Search Movie' onClick={navigateSearch} /></div></div>
                    <div className='col-lg-2'><GrLocation/><div className='location_name'>Chennai</div></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar