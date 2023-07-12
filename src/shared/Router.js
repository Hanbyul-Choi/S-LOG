import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import PostView from "../pages/PostView";
import PostListPage from "../pages/PostList";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:username" element={<PostListPage />} />
        <Route path="/:username/:postId" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
