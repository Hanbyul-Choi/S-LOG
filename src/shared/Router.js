import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import PostView from "../pages/PostView";
import PostListPage from "../pages/PostList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Helmet } from "react-helmet-async";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>S-log</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:username" element={<PostListPage />} />
        <Route path="/posts/:username/:postId" element={<PostView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
