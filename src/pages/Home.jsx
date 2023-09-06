import CarouselComp from '../components/CarouselComp'
import SearchBar from '../components/SearchBar'
import TopBody from '../components/TopBody'
import UpcomeingCarousel from '../components/UpcomeingCarousel'

function Home() {
  return (
    <div>
      <CarouselComp />
      <SearchBar/>
      <TopBody/>
      <UpcomeingCarousel/>
    </div>
  )
}

export default Home