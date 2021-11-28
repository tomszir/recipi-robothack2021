import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export const lightTheme = {
  colors: {
    bg: "#fff",
    text: "#1f1f1f",
    borderColor: "transparent",
    navBorderColor: "#e3efe3",

    navActiveColor: "#40916c",
    navInactiveColor: "#53535f",

    messageBubbleText: "#fff",
    messageBubble: "#93cf93",
    messageBotBubbleText: "#000",
    messageBotBubble: "#f1f1f1",
  },
};

const theme = {
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "1366px",
    xl: "1920px",
  },
  font: {
    family: "Outfit",
    globalSize: 16,
  },
  ...lightTheme,
};

export type CustomTheme = typeof theme;

export const ThemeUpdateContext = createContext((theme: any) => {});

export const MyThemeProvider: React.FC = ({ children }) => {
  // store the entire theme as state, using your constant as the initial state
  const [myTheme, setMyTheme] = useState(theme);

  return (
    <ThemeProvider theme={myTheme}>
      <ThemeUpdateContext.Provider value={setMyTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};
