import { CustomTheme } from "@/providers/theme";
import styled, { css } from "styled-components";

export const Message = styled.div<{ bot?: boolean }>`
  overflow: hidden;

  max-width: 80%;
  padding: 12px 12px;

  border-radius: 12px;
  border-bottom-left-radius: 0;

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.messageBotBubble};
    color: ${theme.colors.messageBotBubbleText};
  `}

  align-self: flex-start;

  ${({ bot, theme }) =>
    !bot &&
    css`
      align-self: flex-end;

      color: #fff;
      color: ${theme.colors.messageBubbleText};
      background-color: ${theme.colors.messageBubble};

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
