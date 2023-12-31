import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { HelmetProvider } from "react-helmet-async";
import { tempSetUser } from "./redux/modules/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);

const loadUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("로그인 하시면 게시물을 작성할 수 있습니다.");
      return;
    }
    store.dispatch(tempSetUser(user));
    // store.dispatch(__check(user));
  } catch (error) {
    console.log("cookie씨는 현재 아파요");
  }
};
loadUser();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
