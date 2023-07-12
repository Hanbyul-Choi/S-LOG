import api from "./api";

export const writePost = (post) => {
  api.post("/posts", post);
};

export const readPost = (id) => api.get(`/posts/${id}`);

export const listPost = ({ page, username, tag }) => {
  return api.get(`/posts`, {
    params: { page, username, tag },
  });
};

export const updatePost = ({ id, title, body, tags }) => api.patch(`/posts/${id}`, { post: { title, body, tags } });

export const deletePost = (id) => api.delete(`/posts/${id}`);
