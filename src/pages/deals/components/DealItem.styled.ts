import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;

  .thumbnail {
    position: absolute;
    transition: all 0.15s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .seller {
    svg {
      margin-left: 4px;
    }

    position: absolute;
    top: 8px;
    left: 8px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 6px;
    border-radius: 12px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  * {
    font-family: "Outfit", sans-serif;
  }

  .content {
    h2 {
      margin: 0;
      margin-bottom: 8px;
    }
    width: 100%;
    padding: 12px;
  }

  .seller {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }

  .logo {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
  }

  ${down("sm")} {
    flex-direction: row;

    ${ThumbnailWrapper} {
      max-width: 40%;
      width: 100%;
    }
  }

  .buttons {
    display: flex;

    & > *:first-child {
      flex: 3;
      margin-right: 8px;
    }

    & > *:last-child {
      flex: 1;
    }
  }

  .price {
    margin-bottom: 12px;
  }

  transition: all 0.15s ease;

  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.125);

    .thumbnail {
      transition: all 0.15s ease;
      transform: scale(1.15);
    }
  }

  ${({ theme }: { theme: any }) => css`
    .price,
    .brand {
      color: ${theme.colors.text};
    }
    background-color: ${theme.colors.bg};
    border: 1px solid ${theme.colors.borderColor};
  `}
`;
