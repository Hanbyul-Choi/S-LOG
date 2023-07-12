import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { __check, tempSetUser } from "./redux/modules/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export const loadUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    store.dispatch(__check(user));
    store.dispatch(tempSetUser(user));
  } catch (error) {
    console.log("cookie씨는 현재 아파요");
  }
};

loadUser();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
