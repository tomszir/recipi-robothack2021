import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999999999;
`;

export const Modal = styled.div`
  max-width: 768px;
  width: 100%;
  border-radius: 12px;
  background-color: #fff;
  display: flex;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  border-bottom: 1px solid #e3e3e9;
`;

export const Content = styled.div`
  padding: 12px;
`;

export const Footer = styled.div``;
