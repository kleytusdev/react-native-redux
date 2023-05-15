import { createSlice } from "@reduxjs/toolkit";
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

      state.list = state.list.map((info) => {
        if (info.id === id) {
          return { ...info, name, status, species };
        }
        return info;
      });
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
