import { CustomTheme } from "@/providers/theme";
import styled, { css } from "styled-components";

export const Button = styled.button<{
  _type?: "outline";
}>`
  cursor: pointer;
  padding: 16px 12px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;

  font-size: 0.85rem;
  font-family: "Outfit", sans-serif;

  border-radius: 12px;
  background-color: #40916c;
  transition: all 0.15s ease;
  &:hover {
    opacity: 0.8;
  }

  font-weight: bold;

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.navActiveColor};

    ${theme.colors.navActiveColor === "#ffff00" && "color: #000;"}
  `}

  ${({ _type, theme }) =>
    _type === "outline" &&
    css`
      color: ${theme.colors.navActiveColor};
      border: 1px solid ${theme.colors.navActiveColor};
      background-color: transparent;

      &:hover {
        background-color: ${theme.colors.navActiveColor + "1f"};
      }
    `}
`;
