import PropTypes from 'prop-types'
import { useEffect, useState, lazy, Suspense } from 'react'
import { Card } from 'react-bootstrap'
import RunningMovieCard from './RunningMovieCard'
import UpcomingMovieCard from './UpcomingMovieCard'
import LanguageFilter from './LanguageFilter'
import FormatFilter from './FormatFilter'
import { BiSlider } from 'react-icons/bi'
import '../stylesheets/topbody.css'

const FilterModalMobile = lazy(() => import('../overlays/FilterModalMobile')) 

const TopBody = ({ movies, showRunningMovies }) => {

  const [viewAll, setViewAll] = useState(false)

  // States to apply filter
  const [langFilter, setLangFilter] = useState('')
  const [formatFilter, setFormatFilter] = useState('2D')
  const [filteredList, setFilteredList] = useState([])
  const [itemsToRender, setItemsToRender] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false)

  // Function to clear applied filters
  function handleClearFilter() {
    setLangFilter('')
    setFormatFilter('2D')
  }

  useEffect(() => {
    !showRunningMovies && setFormatFilter('2D')
    setViewAll(false)
  }, [showRunningMovies])

  useEffect(() => {
    const arr = movies.filter(movie => {
      const langMatch = movie.language.includes(langFilter)
      const formatMatch = movie.scrnfmt ? movie.scrnfmt.includes(formatFilter) : true
      return langMatch && formatMatch
    })

    setFilteredList([...arr])
  }, [movies, formatFilter, langFilter])

  useEffect(() => setItemsToRender(viewAll ? filteredList : filteredList.slice(0, 10)), [movies, viewAll, filteredList])

  return (
    <div className='container-flow container-lg d-lg-flex justify-content-center px-0 py-lg-4 c-content-main'>

      {/* filter sidebar */}
      <Card className='movies_filter_card'>

        <div className='movies_filter-container'>

          <LanguageFilter
            langFilter={langFilter}
            setLangFilter={setLangFilter}
          />

          {showRunningMovies &&
            <FormatFilter
              formatFilter={formatFilter}
              setFormatFilter={setFormatFilter}
            />
          }
        </div>

        <button
          className='text-primary clear_filter'
          disabled={langFilter === '' && formatFilter === '2D'}
          onClick={handleClearFilter}>
          Clear all filters
        </button>

      </Card>

      {/* Movie grid */}

      <div className='runningmovies_list-container'>
        <div className='d-flex align-items-center mb-3'>
          <h5 className='m-0'>{showRunningMovies ? 'Movies in Chennai' : 'Upcoming Movies'}</h5>

          <button
            id='mobile-filter-btn'
            onClick={() => setShowFilterModal(true)}
          >
            <BiSlider size={20} />
            Filters
          </button>

        </div>
        <div className='movie_cards_loopp'>

          {showRunningMovies ? (
            itemsToRender.map(movie =>
              <RunningMovieCard key={movie.id} movie={movie} />
            )
          ) : (
            itemsToRender.map(movie =>
              <UpcomingMovieCard key={movie.id} movie={movie} />
            )
          )}

        </div>

        <div className='text-center' >

          <button
            className='btn fw-semibold border rounded-pill mt-4'
            onClick={() => setViewAll(!viewAll)}
            style={{ display: filteredList.length <= 10 && 'none' }}
          >
            {viewAll ? `View Less` : `View all ${filteredList.length} movies`}
          </button>

        </div>
      </div>

      {/* Filter modal mobile */}
      <Suspense>
        <FilterModalMobile
          show={showFilterModal}
          hide={() => setShowFilterModal(false)}
          langFilter={langFilter}
          setLangFilter={setLangFilter}
          formatFilter={formatFilter}
          setFormatFilter={setFormatFilter}
          showRunningMovies={showRunningMovies}
          handleClearFilter={handleClearFilter}
        />
      </Suspense>
    </div>
  )
}

TopBody.propTypes = {
  movies: PropTypes.array,
  showRunningMovies: PropTypes.bool
}

export default TopBody