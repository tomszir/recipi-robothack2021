import { CustomTheme } from "@/providers/theme";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const MessageMenuContainer = styled.div``;

export const MessageMenu = styled.div<{ show: boolean }>`
  position: fixed;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  z-index: 99999;
  width: 320px;
  height: 640px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  font-family: "Outfit", sans-serif;
  display: flex;
  flex-direction: column;

  right: 32px;
  bottom: -100%;
  transition: bottom 0.5s ease-in-out, opacity 0.4s ease;

  ${down("md")} {
    width: calc(100vw - 64px);
    height: 70%;
  }

  opacity: 0;
  pointer-events: none;

  ${({ show }) =>
    show &&
    css`
      pointer-events: all;
      right: 32px;
      opacity: 1;
      bottom: calc(32px + 64px + 16px);

      ${down("md")} {
        bottom: calc(32px + 64px + 16px + 60px);
      }
    `}

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.bg};
    border: ${theme.colors.navBorderColor} 1px solid;
  `}
`;

export const MessageMenuHeader = styled.div`
  cursor: pointer;
  padding: 16px;

  ${({ theme }: { theme: CustomTheme }) => css`
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.navBorderColor};
  `}

  display: flex;
  justify-content: space-between;
`;

export const MessageFooter = styled.div`
  ${({ theme }: { theme: CustomTheme }) => css`
    border-top: 1px solid ${theme.colors.navBorderColor};
  `}

  display: flex;

  button {
    width: 64px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const MessageInput = styled.input`
  padding: 16px;
  border: none;
  width: 100%;

  ${({ theme }: { theme: CustomTheme }) => css`
    color: ${theme.colors.text};
  `}
  background-color: transparent;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;
