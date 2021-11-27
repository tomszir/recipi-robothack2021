import * as S from "./MainNavMobile.styled";

import { MainNavSectionProps } from "./MainNavSection";

export interface MainNavProps {
  sections: MainNavSectionProps[];
}

export default function MainNavMobile({ sections }: MainNavProps) {
  return (
    <S.Nav>
      {sections[0]?.items.map((item, i) => {
        return (
          <S.NavItem to={item.to || "/"}>
            {item.leading}
            <span className="label">{item.label}</span>
          </S.NavItem>
        );
      })}
    </S.Nav>
  );
}
