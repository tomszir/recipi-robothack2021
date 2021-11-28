import { CustomTheme } from "./../../../providers/theme";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  height: 100%;

  ${({ theme }: { theme: CustomTheme }) => css`
    min-width: ${240 + (theme.font.globalSize - 16) * 8}px;
    background-color: ${theme.colors.bg};
    border-right: ${theme.colors.navBorderColor} 1px solid;
  `}

  ${down("md")} {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 12px 0;
`;

export const Footer = styled.div`
  margin-bottom: 28px;
`;

export const Header = styled.div`
  padding: 0px 24px;
  display: flex;
  align-items: center;

  h2 {
    margin-left: 12px;
    color: #000a14;
    font-family: "Outfit", sans-serif;

    span {
      font-size: 1.25em;
    }
  }

  svg {
    width: 48px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 12px 24px;
`;
