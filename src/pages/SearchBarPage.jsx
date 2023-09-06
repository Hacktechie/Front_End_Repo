import { LuSearch } from 'react-icons/lu'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { movies } from '../../data/movies'
import { cinemas } from '../../data/cinemas'
import MovieCompSmall from '../components/MovieCompSmall'
import { useState } from 'react'

function SearchBarPage() {

  const [showMovies, setShowMovies] = useState(true)

  return (
    <>
      <div className="bg-white">

        <div className="container d-flex align-items-center gap-3 p-4">

          <LuSearch size={20} />

          <input
            type="text"
            className='search_input'
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
          movies.map(movie => (
            <MovieCompSmall key={movie.contentId} movie={movie} />
          ))
          :
          cinemas?.map(cinema => (
            <div key={cinema.id} className='py-3 cinemas'>
              {cinema.name}
            </div>
          ))}
      </div>
    </>
  )
}

export default SearchBarPage