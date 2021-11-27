import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

import * as S from "./FloatingButton.styled";

import MessageMenu from "./MessageMenu";

export default function FloatingButton() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MessageMenu onClose={toggleMenu} open={showMenu} />
      <S.Button onClick={toggleMenu}>
        <FiMessageCircle size={24} />
      </S.Button>
    </>
  );
}
