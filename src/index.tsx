import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { AuthProvider } from "./providers/auth";
import { CustomTheme, MyThemeProvider } from "./providers/theme";

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

  html {
    ${({ theme }: { theme: CustomTheme }) => css`
      font-size: ${theme.font.globalSize}px;
      background-color: ${theme.colors.bg};

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        color: ${theme.colors.text} !important;
      }
    `}
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <GlobalStyle />
      <Normalize />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
