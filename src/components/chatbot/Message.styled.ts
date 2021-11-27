import styled, { css } from "styled-components";

export const Message = styled.div<{ bot?: boolean }>`
  overflow: hidden;

  max-width: 80%;
  padding: 12px 12px;

  border-radius: 12px;
  border-bottom-left-radius: 0;

  background-color: #f1f1f1;

  align-self: flex-start;

  ${({ bot }) =>
    !bot &&
    css`
      align-self: flex-end;

      color: #fff;
      background-color: #93cf93;

      border-radius: 12px;
      border-bottom-right-radius: 0;
    `}
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.05);
  transition: all 0.15s ease;
`;

export const ThumbnailWrapper = styled.div`
  cursor: pointer;
  margin: -12px;
  overflow: hidden;
`;

export const MessageRecipe = styled.div`
  a {
    display: block;
    text-decoration: none;
    margin: -12px;
    padding: 12px;
    padding-top: 22px;
  }

  &:hover {
    ${Thumbnail} {
      transform: scale(1.2);
    }
  }
`;
