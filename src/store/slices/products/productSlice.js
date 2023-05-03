import { createSlice } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

export const productSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
})

export const { setUserList } = productSlice.actions;

export default productSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {

  axios.get('https://reqres.in/api/users?per_page=12')
  .then((response) => {
    dispatch(setUserList(response.data.data));
  })
  .catch((error) => console.log(error));

}