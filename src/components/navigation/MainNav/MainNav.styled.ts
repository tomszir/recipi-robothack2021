import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  min-width: 240px;
  height: 100%;

  background-color: #f9fff9;
  border-right: 1px solid #e3e9e3;

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
  border-bottom: 1px solid #e3e9e3;
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
