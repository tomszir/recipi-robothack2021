import { down } from "styled-breakpoints";
import styled from "styled-components";

export const App = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  ${down("md")} {
    flex-direction: column-reverse;
  }
`;

export const Pages = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
