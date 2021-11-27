import * as S from "./MainNavSection.styled";

import MainNavItem, { MainNavItemProps } from "./MainNavItem";
import { useAuth } from "@/providers/auth";

export interface MainNavSectionProps {
  title: string;
  requiresAuth?: boolean;
  items: MainNavItemProps[];
}

export default function MainNavSection({
  title,
  requiresAuth,
  items,
}: MainNavSectionProps) {
  const { user } = useAuth();
  const mappedItems = items.map((item, i) => {
    return <MainNavItem {...item} key={i} />;
  });

  if (requiresAuth && !user) {
    return null;
  }

  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.Items>{mappedItems}</S.Items>
    </S.Section>
  );
}
