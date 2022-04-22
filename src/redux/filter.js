import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
  activeFilterExists: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      if(state.title === action.payload) {
        state.activeFilterExists = false;
        state.title = "";
      } else {
        state.title = action.payload;
      }
    },
    setActiveFilterExists: (state, action) => {
      state.activeFilterExists = action.payload;
    }
  },
})

export const { setTitle } = filterSlice.actions;

export const selectTitle = (state) => state.filter.title;
export const selectActiveFilterExists = (state) => state.filter.activeFilterExists;


export default filterSlice.reducer;
