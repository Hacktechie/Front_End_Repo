import { setMovies, setCinemas, setUpcomingMovies, setCarousel } from "../redux/slices/dataSlice"
import supabase from "./supabase";

function fetchData(dispatch) {
  // Fetching Movies from DB
  (async function () {
    const { data, error } = await supabase
      .from('movies')
      .select('*')

    if (error) {
      console.log(error.message)
    } else {
      dispatch(setMovies(data))
    }
  })();

  // Fetching Cinemas from DB
  (async function () {
    const { data, error } = await supabase
      .from('cinemas')
      .select('*')

    if (error) {
      console.log(error.message)
    } else {
      dispatch(setCinemas(data))
    }
  })();

  // Fetching Upcoming Movies
  (async function () {
    const { data, error } = await supabase
      .from('upcoming_movies')
      .select('*')

    if (error) {
      console.log(error.message)
    } else {
      dispatch(setUpcomingMovies(data))
    }
  })();

  // Fetching Carousel Data
  (async function () {
    const { data, error } = await supabase
      .from('banner')
      .select('*')

    if (error) {
      console.log(error.message)
    } else dispatch(setCarousel(data))
  })();
}

export default fetchData