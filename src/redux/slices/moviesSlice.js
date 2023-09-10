import { createSlice } from '@reduxjs/toolkit';
import { movies } from '../../../data/movies'

const initialState = {
  movies
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {}
})

export default moviesSlice.reducer
