import { Link } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  height: 60px;
  background-color: #f9fff9;
  border-top: 1px solid #e3e9e3;

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
  text-decoration: none;

  color: #40916c;
  font-family: "Outfit", sans-serif;
  .label {
    font-size: 0.85rem;
  }
`;
