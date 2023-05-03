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
  },
});

export const { setInfoList } = infoSlice.actions;

export default infoSlice.reducer;

export const fetchAllInfo = () => async (dispatch) => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character/?page=10");
    dispatch(setInfoList(response.data.results));
  } catch (error) {
    console.log(error);
  }
};
