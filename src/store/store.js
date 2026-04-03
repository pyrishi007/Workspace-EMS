import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/authSlice";
import taskReducer from "./slices/taskSlice,js";

const store = configureStore({
  reducer: {
    user: userReducer,
    task :taskReducer,
  },
});

export default store;
