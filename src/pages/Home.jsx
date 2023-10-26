import { useState } from 'react'
import { useSelector } from 'react-redux'
import CarouselComp from '../components/CarouselComp'
import SearchBar from '../components/SearchBar'
import TopBody from '../components/TopBody'
import UpcomeingCarousel from '../components/UpcomeingCarousel'
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

      {
        showRunningMovies ?
          <>
            <TopBody movies={runningMovies} />
            <UpcomeingCarousel movies={upcomingMovies} />
          </>
          :
          <>
            <TopBody movies={upcomingMovies} hideFormatFilter={true} />
            <UpcomeingCarousel movies={runningMovies} />
          </>
      }

      <Botmfiltr />
    </div>
  )
}

export default Home