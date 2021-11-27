import { Recipe } from "@/types";

import * as S from "./RecipeList.styled";

import RecipeListItem from "./RecipeListItem";

export interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  const mappedRecipeItems = recipes.map((recipe, i) => {
    return <RecipeListItem recipe={recipe} key={i} />;
  });

  return <S.List>{mappedRecipeItems}</S.List>;
}
