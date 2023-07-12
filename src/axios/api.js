import axios from "axios";

const instanse = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// instanse.interceptors.request.use(
//   function (config) {
//     console.log("인터셉트 요청 성공");
//     return config;
//   },
//   function (error) {
//     console.log("인터셉트 요청 오류");
//     return Promise.reject(error);
//   }
// );

// instanse.interceptors.response.use(
//   function (config) {
//     console.log("인터셉트 응답 성공");
//     return config;
//   },
//   function (error) {
//     console.log("인터셉트 응답 오류");
//     return Promise.reject(error);
//   }
// );

export default instanse;
