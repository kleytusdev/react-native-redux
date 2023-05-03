import { createSlice } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://reqres.in/api/users?per_page=12");
    dispatch(setUserList(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
