import { useState } from 'react'
import '../stylesheets/searchBarPage.css'
import { useNavigate } from 'react-router-dom'

const SearchBarPage = () => {
  const navigate = useNavigate()
  const [type, setType] = useState("movies")
  const movies = [
    {
      name: "Jailer",
      language: "Tamil",
      img: "https://assetscdn1.paytm.com/images/cinema/Jailer-705x750-d6366ef0-2b00-11ee-a540-ef1242eadacd.jpg"
    },
    {
      name: "Partner",
      language: "Tamil, ",
      img: "https://assetscdn1.paytm.com/images/cinema/Partner--705x750-b197d220-41bf-11ee-8794-05f4c805d123.jpg"
    },
    {
      name: "Adiyae",
      language: "Tamil",
      img: "https://assetscdn1.paytm.com/images/cinema/Adiyae--705x750-72b96190-418d-11ee-8794-05f4c805d123.jpg"
    },
    {
      name: "Dream Girl 2",
      language: "Hindi",
      img: "https://assetscdn1.paytm.com/images/cinema/dg2___-705x750-b202e420-40bb-11ee-8794-05f4c805d123.jpg"
    },
    {
      name: "Gadar 2",
      language: "Hindi",
      img: 'https://assetscdn1.paytm.com/images/cinema/Gadar-2--705x750-a020b490-3057-11ee-b34d-05fa8644d6a7.jpg'
    },
  ]
  return (
    <div className='searchbar-pagemain'>
      <div className='searchbar-page'>
        <div className='search'>
          <i className="fa-solid fa-magnifying-glass" /> <input type='text' placeholder='Search Movies or Cinemas' />
        </div>
        <div className='backButton' onClick={() => navigate("/")}>
          <i className="fa-solid fa-angle-left" />
          <div>Back</div>
        </div>
      </div>
      <div className='movieList'>
        <div className='movieList-card'>
          <div className='cardHeader'>
            <div className={type == 'movies' ? 'movies active' : 'movies'} onClick={() => setType("movies")}>Movies</div>
            <div className={type == 'cinemas' ? 'cinemas active' : 'cinemas'} onClick={() => setType("cinemas")}>Cinemas</div>
          </div>
          <hr className='m-0' />
          <div className='cardBody'>
            {type == "movies" ?
              movies?.map((d) => 
              < div className='Movies'>
                <div className='movieImg'>
                  <img src={d.img} />
                </div>
                <div className='movieTitle'>
                  <div className='title'>{d.name}</div>
                  <div className='sub-title'>
                    <img src='	https://assetscdn1.paytm.com/movies_new/_next/static/media/language-black.ee3fdab3.svg' />
                    <span>{d.language}</span>
                  </div>
                </div>
              </div>)
              :
              <div className='Cinemas'>
                <div className='row'>
                  <div className='col-lg-6'>Chennai</div>
                  <div className='col-lg-6'>Vela Cinemas 2K 3D, Thiruninravur</div>
                  <div className='col-lg-6'>Sangam Cinemas 4K RGB Laser Dolby Atmos, Kilpauk</div>
                  <div className='col-lg-6'>PVR Grand Galada Mall, Pallavaram</div>
                  <div className='col-lg-6'>Kamala Cinemas, Vadapalani</div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div >
  )
}

export default SearchBarPage