import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setActivesearchExists: (state, action) => {
      state.activesearchExists = action.payload;
    }
  },
})

export const { setName } = searchSlice.actions;

export const selectName = (state) => state.search.name;

export default searchSlice.reducer;
