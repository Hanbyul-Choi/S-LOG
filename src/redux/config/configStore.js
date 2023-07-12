import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post";
import auth from "../modules/auth";
import user from "../modules/user";
import posts from "../modules/posts";

const store = configureStore({
  reducer: {
    post,
    auth,
    user,
    posts,
  },
});

export default store;
