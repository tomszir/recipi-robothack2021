import { CustomTheme } from "@/providers/theme";
import { Link } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  height: 60px;

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.bg};
    border-top: ${theme.colors.navBorderColor} 1px solid;
  `}

  ${up("lg")} {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 22px;
    margin-bottom: 4px;
  }
  padding-top: 4px;
  text-decoration: none;

  ${({ theme }: { theme: CustomTheme }) => css`
    color: ${theme.colors.navActiveColor};
    border-top: ${theme.colors.navBorderColor} 1px solid;
  `}
  font-family: "Outfit", sans-serif;
  .label {
    font-size: 0.85rem;
  }
`;
