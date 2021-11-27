import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 64px;
  height: 64px;
  color: #fff;
  background-color: #40916c;
  position: fixed;
  bottom: 24px;
  right: 32px;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 999999;

  ${down("md")} {
    bottom: 84px;
  }
`;
