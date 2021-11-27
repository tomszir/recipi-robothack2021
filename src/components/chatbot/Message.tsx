import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

import { recipes } from "@/assets/recipes.json";

import * as S from "./Message.styled";

import { Recipe } from "@/types";

export interface MessageProps {
  content: string | ReactNode;
  bot?: boolean;
}

export default function Message({ content, bot }: MessageProps) {
  return <S.Message bot={bot}>{content}</S.Message>;
}

export function MessageRecipe({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();

  const recipeIndex = recipes.indexOf(recipe as any);
  const recipeLink = `/recipe/${recipeIndex}`;

  const onClick = () => {
    navigate(recipeLink);
  };

  return (
    <S.MessageRecipe>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          onClick={onClick}
          src={recipe.thumbnailUrl}
          alt="thumbnail"
        />
      </S.ThumbnailWrapper>
      <Link to={recipeLink}>{recipe.name}</Link>
    </S.MessageRecipe>
  );
}
