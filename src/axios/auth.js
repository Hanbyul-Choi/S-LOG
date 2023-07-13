import { userInstanse } from "./api";

export const login = ({ username, password }) =>
  userInstanse.post(`${process.env.REACT_APP_AUTH_SERVER_URL}/login`, { id: username, password });

export const register = ({ username, password }) =>
  userInstanse.post(`${process.env.REACT_APP_AUTH_SERVER_URL}/register`, { id: username, password });

export const check = (token) =>
  userInstanse.get(`${process.env.REACT_APP_AUTH_SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
