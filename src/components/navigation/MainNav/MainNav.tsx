import { FiLogIn, FiLogOut, FiSettings, FiUser } from "react-icons/fi";

import * as S from "./MainNav.styled";

import { useAuth } from "@/providers/auth";
import { loginWithGoogle, logout } from "../../../utils/auth";

import MainNavSection, { MainNavSectionProps } from "./MainNavSection";
import { useModal } from "@/components/ui/modal/Modal";
import Button from "@/components/ui/Button";

import { ReactComponent as Logo } from "@/logo.svg";
import AuthModal from "@/components/ui/modal/AuthModal";

export interface MainNavProps {
  sections: MainNavSectionProps[];
}

export default function MainNav({ sections }: MainNavProps) {
  const mappedSections = sections.map((section, i) => {
    return <MainNavSection {...section} key={i} />;
  });

  return (
    <S.Nav>
      <MainNavHeader />
      <S.Content>
        <S.ButtonContainer>
          <Button label="Let's make something!" />
        </S.ButtonContainer>
        {mappedSections}
      </S.Content>
      <MainNavFooter />
    </S.Nav>
  );
}

export function MainNavHeader() {
  return (
    <S.Header>
      <Logo />
      <h2>ReciPi</h2>
    </S.Header>
  );
}

export function MainNavFooter() {
  const { user } = useAuth();
  const authModal = useModal();

  const items = user
    ? [
        {
          to: "/me",
          label: "Account",
          leading: <FiUser />,
        },
        {
          label: "Settings",
          leading: <FiSettings />,
        },
        {
          label: "Log Out",
          leading: <FiLogOut />,
          onClick: logout,
        },
      ]
    : [
        {
          label: "Log In",
          leading: <FiLogIn />,
          onClick: authModal.open,
        },
      ];

  return (
    <S.Footer>
      <AuthModal {...authModal.handlers}>
        <button onClick={loginWithGoogle}>Login with google</button>
      </AuthModal>
      <MainNavSection title="Your account" items={items} />
    </S.Footer>
  );
}
