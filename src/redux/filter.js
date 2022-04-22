import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
  },
})

export const { setTitle } = filterSlice.actions;

export const selectTitle = (state) => state.filter.title;

export default filterSlice.reducer;
