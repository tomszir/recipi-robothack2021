import { CustomTheme } from "@/providers/theme";
import styled, { css } from "styled-components";

export const Leading = styled.div`
  padding-right: 16px;
`;

export const Trailing = styled.div`
  padding-left: 16px;
`;

export const Label = styled.span`
  flex: 1;
  font-family: "Outfit", sans-serif;
`;

export const Item = styled.a<{
  active?: boolean;
}>`
  position: relative;

  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding: 12px 24px;

  text-decoration: none;
  font-size: 1rem;

  ${Leading}, ${Trailing} {
    display: flex;
    align-items: center;
  }

  svg {
    align-self: center;
    font-size: 22px;
    color: #939399;
  }

  svg,
  ${Label} {
    transition: all 0.125s ease;
  }

  ${({ theme }: { theme: CustomTheme }) => css`
    color: ${theme.colors.navInactiveColor};

    &:hover {
      svg {
        color: ${theme.colors.navActiveColor};
      }

      ${Label} {
        color: ${theme.colors.navActiveColor};
      }
    }
  `}

  ${({ active, theme }) =>
    active &&
    css`
      svg {
        color: ${theme.colors.navActiveColor};
      }

      ${Label} {
        color: ${theme.colors.navActiveColor};
      }
    `}
`;

export const ActiveIndicator = styled.div`
  display: block;
  position: absolute;
  right: 0;

  width: 4px;
  height: 22px;

  ${({ theme }: { theme: CustomTheme }) => css`
    background-color: ${theme.colors.navActiveColor};
  `}

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
