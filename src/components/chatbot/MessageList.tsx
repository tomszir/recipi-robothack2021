import { createRef, useEffect } from "react";

import * as S from "./MessageList.styled";

import Message, { MessageProps } from "./Message";

export interface MessageListProps {
  messages: MessageProps[];
}

export default function MessageList({ messages }: MessageListProps) {
  const endRef = createRef<HTMLDivElement>();
  const mappedMessages = messages.map((props, i) => {
    return <Message key={i} {...props} />;
  });

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [messages, endRef]);

  return (
    <S.MessageListWrapper>
      <S.MessageList>{mappedMessages}</S.MessageList>
      <div ref={endRef} />
    </S.MessageListWrapper>
  );
}
