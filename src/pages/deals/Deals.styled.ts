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
`;

export const Grid = styled.div`
  display: grid;
  row-gap: 2em;
  column-gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  ${down("lg")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${down("sm")} {
    row-gap: 1em;
    grid-template-columns: 1fr;
  }
`;
export const Input = styled.input`
  padding: 12px;
  width: 100%;
  display: flex;

  font-family: "Outfit", sans-serif;

  border-radius: 12px;
  font-size: 0.9rem;
  border: 1px solid #a3a9a3;
`;
