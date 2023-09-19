import { LuSearch } from 'react-icons/lu'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCompSmall from '../components/MovieCompSmall'

function SearchBarPage() {

  const movies = useSelector(state => state.data.movies)
  const cinemas = useSelector(state => state.data.cinemas)

  const [showMovies, setShowMovies] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const bodyStyles = {
    position: 'relative',
    zIndex: 2,
    marginTop: '-92px',
    paddingTop: '70px',
    backgroundColor: '#f2f2f2'
  }

  const searchStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    boxShadow: '0 5px 20px rgba(0,41,112,.1)'
  }

  return (
    <div style={bodyStyles}>
      <div className="bg-white" style={searchStyles}>

        <div className="container d-flex align-items-center gap-3 p-4">

          <LuSearch size={20} />

          <input
            type="text"
            className='search_input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search Movie or a Cinema' />

          <Link to='/' style={{ textDecoration: 'none' }}>

            <div className='d-flex align-items-center text-info'>
              <RiArrowLeftSLine size={24} />
              <h5 className='m-0'>Back</h5>
            </div>

          </Link>

        </div>
      </div>

      <div className='container bg-white p-4 my-4' style={{ borderRadius: '20px' }}>

        <div className='d-flex gap-3'>

          <button
            className="btn p-0 m-0 c-movie_cinema_btn"
            style={{ fontWeight: showMovies ? 600 : 'normal' }}
            onClick={() => setShowMovies(true)}>
            Movies
          </button>

          <button
            className="btn p-0 m-0 c-movie_cinema_btn"
            style={{ fontWeight: !showMovies ? 600 : 'normal' }}
            onClick={() => setShowMovies(false)}>
            Cinemas
          </button>
        </div>

        <hr />

        {showMovies ?
          movies
            .filter(movie => movie.label.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(movie => <MovieCompSmall key={movie.id} movie={movie} />)
          :
          cinemas
            .filter(cinema => cinema.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(cinema => (
              <div key={cinema.id} className='py-3 cinemas'>
                {cinema.name}
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default SearchBarPage