import { configureStore } from "@reduxjs/toolkit";
import posts from "../slices/postSlice";

const AppStore = configureStore({
  reducer: {
    postSlice: posts,
  },
});

export default AppStore;
