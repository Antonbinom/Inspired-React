import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('favorites') || '[]');

const favoritesSLice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const id = action.payload.id;
      if (!state.includes(id)) {
        state.push(id)
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFromFavorite(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
  }
});

export const { addToFavorite, removeFromFavorite } = favoritesSLice.actions
export default favoritesSLice.reducer;