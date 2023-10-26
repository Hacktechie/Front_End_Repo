import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import MovieCard from './MovieCard'
import LanguageFilter from './LanguageFilter'
import FormatFilter from './FormatFilter'
import '../stylesheets/topbody.css'

const TopBody = ({ movies, hideFormatFilter }) => {
  
  const [viewAll, setViewAll] = useState(false)
  
  // States to apply filter
  const [langFilter, setLangFilter] = useState('')
  const [formatFilter, setFormatFilter] = useState('2D')

  // Function to clear applied filters
  function handleClearFilter() {
    setLangFilter('')
    setFormatFilter('2D')
  }

  // Filtered movie array
  const filteredList = movies.filter(movie => {
    const langMatch = movie.language.includes(langFilter)
    const formatMatch = movie.scrnfmt ? movie.scrnfmt.includes(formatFilter) : true

    return langMatch && formatMatch
  })

  const filter_card = {
    borderRadius: '20px',
    position: 'sticky',
    border: 'none',
  }

  useEffect(() => {
    hideFormatFilter && setFormatFilter('2D')
  }, [hideFormatFilter])

  return (
    <div className='container-flow container-lg d-flex justify-content-center px-0 py-4'>

      {/* filter sidebar */}
      <Card className='movies_filter_card' style={filter_card}>

        <div className='movies_filter-container'>

          <LanguageFilter
            langFilter={langFilter}
            setLangFilter={setLangFilter}
          />

          {!hideFormatFilter &&
            <FormatFilter
              formatFilter={formatFilter}
              setFormatFilter={setFormatFilter}
            />
          }
        </div>

        <button
          className='btn text-primary clear_filter'
          disabled={langFilter === '' && formatFilter === '2D'}
          onClick={handleClearFilter}>
          Clear all filters
        </button>

      </Card>

      {/* Movie grid */}

      <div className='runningmovies_list-container'>
        <h1>Movies in Chennai</h1>
        <div className='movie_cards_loopp' style={{ maxHeight: viewAll ? 'fit-content' : '1360px' }}>

          {filteredList.map(movie =>
            <MovieCard key={movie.id} movie={movie} />
          )}

        </div>

        <div className='text-center' >

          <button
            className='btn fw-semibold border rounded-pill mt-4'
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? `View Less` : `View all ${filteredList.length} movies`}
          </button>

        </div>
      </div>
    </div>
  )
}

TopBody.propTypes = {
  movies: PropTypes.array,
  hideFormatFilter: PropTypes.bool
}

export default TopBody