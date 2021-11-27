import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AuthProvider } from "./providers/auth";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "1366px",
    xl: "1920px",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
