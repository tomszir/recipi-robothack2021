import { ReactNode } from "react";
import * as S from "./Button.styled";

export interface ButtonProps {
  label: string | ReactNode;
  type?: "outline";
  onClick?: () => any;
}

export default function Button({ label, type, onClick }: ButtonProps) {
  return (
    <S.Button _type={type} onClick={onClick}>
      {label}
    </S.Button>
  );
}
