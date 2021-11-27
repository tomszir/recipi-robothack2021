import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./MainNavItem.styled";

// Yes very useful comments, don't care
export interface MainNavItemProps {
  // Item label
  label: string;

  // Navigates to on click
  to?: string;

  // Is the item currently active
  active?: boolean;

  // Leading element
  leading?: ReactNode;

  // Trailing element
  trailing?: ReactNode;

  // Called when clicked
  onClick?: () => any;
}

export default function MainNavItem({
  to,
  label,
  leading,
  trailing,
  onClick,
}: MainNavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === to;

  // On click callback function
  const _onClick = () => {
    // Run the callback function if one exists
    if (onClick) {
      onClick();
    }

    // Navigate to the new page
    if (to) {
      navigate(to);
    }
  };

  return (
    <S.Item href="#" onClick={_onClick} active={active}>
      {leading && <S.Leading>{leading}</S.Leading>}
      <S.Label>{label}</S.Label>
      {trailing && <S.Trailing>{trailing}</S.Trailing>}
      {active && <S.ActiveIndicator />}
    </S.Item>
  );
}
