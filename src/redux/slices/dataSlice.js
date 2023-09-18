import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  cinemas: [],
  upcomingMovies: [],
  carousel: []
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setCinemas: (state, action) => {
      state.cinemas = action.payload
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    setCarousel: (state, action) => {
      state.carousel = action.payload
    }
  }
})

export const {
  setMovies,
  setCinemas,
  setUpcomingMovies,
  setCarousel
} = dataSlice.actions

export default dataSlice.reducer
