import styled from "styled-components";

export const MessageListWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 16px;

  & > *:not(:first-child) {
    margin-top: 12px;
  }
`;
