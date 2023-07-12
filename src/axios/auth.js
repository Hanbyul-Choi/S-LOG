import axios from "axios";

export const login = ({ username, password }) =>
  axios.post(`${process.env.REACT_APP_AUTH_SERVER_URL}/login`, { id: username, password });

export const register = ({ username, password }) =>
  axios.post(`${process.env.REACT_APP_AUTH_SERVER_URL}/register`, { id: username, password });

export const check = (token) =>
  axios.get(`${process.env.REACT_APP_AUTH_SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
