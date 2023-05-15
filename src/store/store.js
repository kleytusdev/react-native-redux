import { configureStore } from "@reduxjs/toolkit";

import users from "./slices/users/userSlice";
import info from "./slices/info/infoSlice";
import favorites from "./slices/favorite/favoriteSlice"

export default configureStore({
  reducer: {
    users,
    info,
    favorites
  }
})