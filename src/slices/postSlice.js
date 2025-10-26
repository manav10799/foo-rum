import { createSlice } from "@reduxjs/toolkit";
import { POSTS } from "../utils/posts";

const posts = createSlice({
  name: "Posts",
  initialState: {
    posts: POSTS,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export default posts.reducer;
export const { addPost } = posts.actions;
