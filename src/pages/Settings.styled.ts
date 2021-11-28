import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  padding: 64px;
  margin: 0 auto;

  * {
    font-family: "Outfit", sans-serif;
  }

  .flex {
    margin: 32px 0;
    display: flex;
    button {
      width: auto;
      margin-left: 8px;
      padding: 0 16px;
    }
  }

  ${down("md")} {
    padding: 32px;
  }

  ${down("sm")} {
    padding: 16px;
  }

  .buttons {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;
