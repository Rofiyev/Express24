import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../../Components/Error/ErrorPage";
import LoginPage from "../../Components/Login";
import LoginContext from "../../Context/LoginContext";
import store from "../../Redux/store";
import HomeContainer from "../HomeContainer";
import Menu from "../Menu";

export default function HomePage() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <Provider store={store}>
      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<LoginPage />} />
            {isLogin && <Route path="/menu/*" element={<Menu />} />}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </Provider>
  );
}
