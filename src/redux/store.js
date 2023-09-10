import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import moviesReducer from './slices/moviesSlice'
import cinemasReducer from './slices/cinemasSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
        cinemas: cinemasReducer,
    }
})

export default store