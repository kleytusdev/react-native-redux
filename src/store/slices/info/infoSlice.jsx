import { createSlice } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    list: [],
  },
  reducers: {
    setInfoList: (state, action) => {
      state.list = action.payload;
    },
    updateInfo: (state, action) => {
      const { id, name, status, species } = action.payload;

      const index = state.list.findIndex((info) => info.id === id);

      if (index !== -1) {
        state.list[index] = { ...state.list[index], name, status, species };
      }
    },
  },
});

export const { setInfoList, updateInfo } = infoSlice.actions;

export default infoSlice.reducer;

export const fetchAllInfo = () => async (dispatch) => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character/?page=10");
    dispatch(setInfoList(response.data.results));
  } catch (error) {
    console.log(error);
  }
};
