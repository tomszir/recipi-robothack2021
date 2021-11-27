import styled, { css } from "styled-components";

export const Button = styled.button<{
  _type?: "outline";
}>`
  cursor: pointer;
  padding: 16px 12px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;

  font-size: 0.85rem;
  font-family: "Outfit", sans-serif;

  border-radius: 12px;
  background-color: #40916c;
  transition: all 0.15s ease;
  &:hover {
    opacity: 0.8;
  }

  ${({ _type }) =>
    _type === "outline" &&
    css`
      color: #40916c;
      border: 1px solid #40916c;
      background-color: transparent;

      &:hover {
        background-color: #40916c1f;
      }
    `}
`;
