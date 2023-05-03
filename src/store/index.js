import { configureStore } from "@reduxjs/toolkit";

import users from "./slices/users/userSlice";
import info from "./slices/info/infoSlice";

export default configureStore({
  reducer: {
    users,
    info
  }
})