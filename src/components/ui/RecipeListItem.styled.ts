import { CustomTheme } from "@/providers/theme";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
`;

export const Thumbnail = styled.img`
  position: absolute;
  width: 100%;
  cursor: pointer;
  transition: ease 0.15s all;
  object-fit: cover;

  height: 100%;
`;

export const Content = styled.div`
  h2 {
    margin: 0;
    padding: 0;
  }

  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
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

  color: #404f40;
  background-color: #e9ffe9;

  svg {
    height: 100%;
    align-self: center;
    margin-bottom: 4px;
    color: #808f80;
  }

  &:not(:last-child) {
    margin-right: 1px;
  }

  ${down("lg")} {
  }
`;

export const LikeButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 16px;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.15s ease;
  &:hover {
    color: #fff;
    ${({ theme }: { theme: CustomTheme }) => css`
      background-color: ${theme.colors.navActiveColor};

      ${theme.colors.navActiveColor === "#ffff00" && "color: #000;"}
    `}
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const Tag = styled.div<{ active?: boolean }>`
  cursor: pointer;
  font-size: 0.8em;

  ${({ theme }: { theme: CustomTheme }) => css`
    color: ${theme.colors.navActiveColor};
    border: 1px solid ${theme.colors.navActiveColor};

    &:hover {
      background-color: ${theme.colors.navActiveColor + "1f"};
    }
  `}

  padding: 8px 12px;
  border-radius: 2px 12px;
  text-transform: capitalize;

  display: flex;

  svg {
    margin-right: 4px;
    align-self: center;
  }

  transition: all 0.15s ease;

  ${({ active }) =>
    active &&
    css`
      background-color: #40916c3f;
    `}
`;

export const Item = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.bg};
    border: ${theme.colors.borderColor} 1px solid;
  `}

  a {
    border-bottom: 1px solid transparent;
    color: #40916c;
    text-decoration: none;
    transition: all 0.15s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  transition: all 0.15s ease-in;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    ${Thumbnail} {
      transform: scale(1.05);
    }
    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.1);
  }
`;
