import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    updateFavorite: (state, action) => {
      const { id, name, status, species } = action.payload;
      const favoriteItem = state.find((item) => item.id === id);
      if (favoriteItem) {
        favoriteItem.name = name;
        favoriteItem.status = status;
        favoriteItem.species = species;
      }
    },
  },
});

export const { addFavorite, removeFavorite, updateFavorite  } = favoriteSlice.actions;

export default favoriteSlice.reducer;