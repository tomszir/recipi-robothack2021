import Button from "@/components/ui/Button";
import { lightTheme, ThemeUpdateContext } from "@/providers/theme";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import * as S from "./Settings.styled";

const darkTheme = {
  colors: {
    bg: "#1f1f1f",
    text: "#fff",
    borderColor: "#4f4f4f",
    navBorderColor: "#4f4f4f",
    navActiveColor: "#40916c",
    navInactiveColor: "#a3a3a3",

    messageBubbleText: "#fff",
    messageBubble: "#93cf93",
    messageBotBubbleText: "#000",
    messageBotBubble: "#f1f1f1",
  },
};

const highContrast = {
  colors: {
    bg: "#000",
    text: "#ffff00",
    borderColor: "#ffff00",
    navBorderColor: "#ffff00",
    navActiveColor: "#ffff00",
    navInactiveColor: "#fff",

    messageBubbleText: "#000",
    messageBubble: "#ffff00",
    messageBotBubbleText: "#000",
    messageBotBubble: "#f1f1f1",
  },
};

export default function SettingsPage() {
  const updateTheme = useContext(ThemeUpdateContext);
  const currentTheme = useContext(ThemeContext);

  const setFontSize = (size: number) => {
    updateTheme({
      ...currentTheme,
      font: {
        ...currentTheme.font,
        globalSize: size,
      },
    });
  };

  const setTheme = (t: typeof darkTheme) => {
    updateTheme({
      ...currentTheme,
      colors: {
        ...currentTheme.colors,
        ...t.colors,
      },
    });
  };

  return (
    <S.Container>
      <h1>General Settings</h1>
      <h2>Language</h2>
      <div className="buttons">
        <Button label="English" />
        <Button label="Latvian" type="outline" />
        <Button label="Lithuanian" type="outline" />
        <Button label="Russian" type="outline" />
      </div>

      <h1>Accesibility</h1>
      <p>
        Consectetur ut eu et officia fugiat cillum consectetur commodo esse
        laborum voluptate consequat velit elit.
      </p>
      <h2>Text Size</h2>
      <div className="buttons">
        <Button
          label="Small"
          type={currentTheme.font.globalSize !== 12 ? "outline" : undefined}
          onClick={() => setFontSize(12)}
        />
        <Button
          label="Default"
          type={currentTheme.font.globalSize !== 16 ? "outline" : undefined}
          onClick={() => setFontSize(16)}
        />
        <Button
          label="Beeg"
          type={currentTheme.font.globalSize !== 24 ? "outline" : undefined}
          onClick={() => setFontSize(24)}
        />
      </div>
      <h2>Color Scheme</h2>
      <p>Made this last minute</p>
      <div className="buttons">
        <Button
          label="Light"
          type={
            currentTheme.colors.bg === lightTheme.colors.bg
              ? undefined
              : "outline"
          }
          onClick={() => setTheme(lightTheme)}
        />
        <Button
          label="Dark"
          type={
            currentTheme.colors.bg === darkTheme.colors.bg
              ? undefined
              : "outline"
          }
          onClick={() => setTheme(darkTheme)}
        />
        <Button
          label="High Contrast"
          type={
            currentTheme.colors.bg === highContrast.colors.bg
              ? undefined
              : "outline"
          }
          onClick={() => setTheme(highContrast)}
        />
      </div>
    </S.Container>
  );
}
