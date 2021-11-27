import * as S from "./styled";

import { useAuth } from "@/providers/auth";

import Header from "./Header";

export default function Account() {
  const { user } = useAuth();

  // User should exist
  if (!user) {
    return null;
  }

  return (
    <S.Container>
      <Header />
    </S.Container>
  );
}
