import CarouselComp from '../components/CarouselComp'
import SearchBar from '../components/SearchBar'
import TopBody from '../components/TopBody'
import UpcomeingCarousel from '../components/UpcomeingCarousel'  
import Botmfiltr from '../components/Botmfiltr' 

function Home() {
  return (
    <div>
      <CarouselComp />
      <SearchBar/>
      <TopBody/>
      <UpcomeingCarousel/>
      <Botmfiltr/>
    </div>
  )
}

export default Home