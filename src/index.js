import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AuthenticationProvider,
  CallbackLoginPopup,
  CallbackLogout,
} from "app-launcher-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthenticationProvider
    config={{
      authority:
        "https://cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_7wzWV6yyL",
      client_id: "52paph6bh6ute7fmhqldvanebe",
      client_secret: "5mgnc3fkuvh8rfjn8itlf6u8fa75ds8ihcq7dier0s13f2bq7kf",
      redirect_uri: "http://localhost:3001/login/callback",
      scope: "openid email profile aws.cognito.signin.user.admin",
      response_type: "code",
      launchUrl: 'http://localhost:3000',
      logoutRedirectLink:
        "https://betterhome-mvp.auth.ap-southeast-1.amazoncognito.com/logout?client_id=6qudor4hlc22kqlqsjc8ct2cfg&logout_uri=http://localhost:3001/logout",
      apiGetUserUrl: `https://betterhome-mvp.twenty-tech.com/api/user/get-user-info`,
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login/callback" element={<CallbackLoginPopup />} />
        <Route path="/logout" element={<CallbackLogout />} />
      </Routes>
    </BrowserRouter>
  </AuthenticationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
