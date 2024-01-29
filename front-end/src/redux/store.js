import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/User/userSlice";
import authenSlice from "./slices/Authen/authenSlice";
export default configureStore({
  reducer: {
    counter: userSlice,
    authen: authenSlice,
  },
});
