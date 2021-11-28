import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  * {
    font-family: "Outfit", sans-serif;
  }

  padding: 32px 64px;
  max-width: 1920px;
  margin: 0 auto;

  ${down("md")} {
    padding: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .left {
    flex: 2;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  ${down("md")} {
    flex-direction: column;

    .right {
      margin: 16px 0;
    }

    .left,
    .right {
      width: 100%;
    }
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

export const List = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  row-gap: 24px;
  column-gap: 12px;

  ${down("lg")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${down("sm")} {
    grid-template-columns: 1fr;
  }
`;
