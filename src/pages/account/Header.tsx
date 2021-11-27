import { useAuth } from "@/providers/auth";
import * as S from "./Header.styled";

export default function Header() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <S.Header>
      <img src={user.photoURL as string} alt="user avatar" />
      <h3>{user.displayName}</h3>
    </S.Header>
  );
}
