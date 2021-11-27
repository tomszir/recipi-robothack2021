import { ReactNode } from "react";

import * as S from "./IconButton.styled";

export interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => any;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return <S.Button onClick={onClick}>{icon}</S.Button>;
}
