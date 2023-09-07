import CarouselComp from '../components/CarouselComp'
import SearchBar from '../components/SearchBar'
import TopBody from '../components/TopBody'
import UpcomeingCarousel from '../components/UpcomeingCarousel'  
import Botmfiltr from '../components/Botmfiltr' 
import Footer from '../components/Footerr'



function Home() {
  return (
    <div>
      <CarouselComp />
      <SearchBar/>
      <TopBody/>
      <UpcomeingCarousel/>
      <Botmfiltr/>
      <Footer/>
    </div>
  )
}

export default Home