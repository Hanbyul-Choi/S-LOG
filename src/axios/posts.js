import { dbInstanse } from "./api";

export const writePost = (post) => {
  dbInstanse.post("/posts", post);
};

export const readPost = (id) => dbInstanse.get(`/posts/${id}`);

export const listPost = ({ page, username, tag }) => {
  return dbInstanse.get(`/posts`, {
    params: { page, username, tags: tag },
  });
};

export const updatePost = ({ id, title, body, tags }) =>
  dbInstanse.patch(`/posts/${id}`, { post: { title, body, tags } });

export const deletePost = (id) => dbInstanse.delete(`/posts/${id}`);
