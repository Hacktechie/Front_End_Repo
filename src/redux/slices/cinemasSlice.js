import { createSlice } from '@reduxjs/toolkit';
import { cinemas } from '../../../data/cinemas'

const initialState = {
  cinemas
}

const cinemasSlice = createSlice({
  name: 'cinemas',
  initialState,
  reducers: {}
})

export default cinemasSlice.reducer
