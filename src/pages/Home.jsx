import { useState } from 'react'
import { useSelector } from 'react-redux'
import CarouselComp from '../components/CarouselComp'
import SearchBar from '../components/SearchBar'
import TopBody from '../components/TopBody'
import UpcomingCarousel from '../components/UpcomingCarousel'
import Botmfiltr from '../components/Botmfiltr'

function Home() {

  const [showRunningMovies, setShowRunningMovies] = useState(true)
  const runningMovies = useSelector(state => state.data.movies)
  const upcomingMovies = useSelector(state => state.data.upcomingMovies)

  return (
    <div>
      <CarouselComp />
      <SearchBar
        showRunningMovies={showRunningMovies}
        setShowRunningMovies={setShowRunningMovies}
      />

      <TopBody
        movies={showRunningMovies ? runningMovies : upcomingMovies}
        showRunningMovies={showRunningMovies}
      />

      <UpcomingCarousel
        movies={showRunningMovies ? upcomingMovies : runningMovies }
        showRunningMovies={showRunningMovies}
        setShowRunningMovies={setShowRunningMovies}
      />

      <Botmfiltr />
    </div>
  )
}

export default Home