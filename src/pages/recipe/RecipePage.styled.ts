import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  * {
    font-family: "Outfit", sans-serif;
  }

  grid-template-columns: 1.25fr 2fr;
  column-gap: 2rem;

  overflow: auto;
  padding: 64px;
  margin: 0 auto;

  & > *:first-child {
    flex: 1;
  }

  & > *:last-child {
    flex: 2;
  }

  ${down("md")} {
    padding: 64px 32px;
  }

  ${down("sm")} {
    flex-direction: column;
  }

  .checks {
    padding: 12px;
  }

  .checks__check {
    input {
      margin-right: 8px;
    }
  }

  ${({ theme }: { theme: any }) => css`
    .checks__check {
      color: ${theme.colors.text};
    }
  `}

  .checks__check:not(:first-child) {
    margin-top: 8px;
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const IngredientList = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const IngredientItem = styled.div`
  cursor: pointer;
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 12px 18px;
  background-color: #f1f1f1;
  border-radius: 4px;

  .flex {
    display: flex;
    align-items: center;
  }

  .alternatives {
    background-color: #93cf93;
    color: #f1f1f1;
    margin-right: 8px;
    border-radius: 12px;
    padding: 4px 8px;
    font-size: 0.8em;
  }

  b {
    margin-right: 6px;
  }
`;

export const StepList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const StepSeperator = styled.div`
  align-self: center;

  padding: 12px;
  color: #a0a0a0;
`;

export const StepItem = styled.div<{
  checked?: boolean;
}>`
  padding: 12px 18px;
  background-color: #f1f1f1;
  border-radius: 4px;
  line-height: 1.75rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-size: 1.15rem;

  display: flex;

  svg {
    align-self: center;
    margin-top: 4px;
    margin-right: 18px;
  }

  b {
    margin-right: 6px;
  }
  ${({ checked }) =>
    checked &&
    css`
      background-color: #93cf93;
    `}
`;

export const Details = styled.div`
  overflow: hidden;
  display: flex;

  margin-top: 12px;

  width: 100%;
  height: 100%;

  border-radius: 12px;
  align-self: flex-end;
`;

export const DetailsItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 12px;

  font-size: 0.9rem;

  color: #1f1f1f;
  background-color: #e5efe5;

  svg {
    height: 100%;
    align-self: center;
    margin-bottom: 4px;
    color: #404e4e;
  }

  &:not(:last-child) {
    margin-right: 1px;
  }

  ${down("lg")} {
  }
`;

export const Footer = styled.div``;

export const CommentInput = styled.input``;
