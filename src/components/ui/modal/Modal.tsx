import { logout } from "@/utils/auth";
import { ReactNode, useState } from "react";
import { FiX } from "react-icons/fi";
import IconButton from "../IconButton";

import * as S from "./Modal.styled";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => any;
}

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return {
    isOpen,
    setOpen,
    open,
    close,
    handlers: {
      isOpen,
      onClose: close,
    },
  };
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Container>
      <S.Modal>
        <S.Header>
          <IconButton icon={<FiX size={20} />} onClick={logout} />
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Modal>
    </S.Container>
  );
}
