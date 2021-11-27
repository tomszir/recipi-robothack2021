import RecipeListItem from "@/components/ui/RecipeListItem";
import * as S from "./styled";

import { recipes } from "@/assets/recipes.json";
import { Recipe } from "@/types";

export default function Dashboard() {
  const mapRecipeItems = (e: number) =>
    recipes.slice(0 + e, 4 + e).map((recipe: Recipe, i) => {
      return <RecipeListItem recipe={recipe} key={i} />;
    });

  return (
    <S.Container>
      <S.Header>
        <div className="left">
          <h1>Discover recipes made just for you</h1>
          <p>
            High quality recipes specifically engineered by magic robots to suit
            your tastes
          </p>
        </div>
        <div className="right">
          <S.Input placeholder="Search for a recipe, ingredients and more..." />
        </div>
      </S.Header>
      <S.List>{mapRecipeItems(0)}</S.List>
      <h1>Highly rated</h1>
      <S.List>{mapRecipeItems(3)}</S.List>
      <h1>Try something new</h1>
      <S.List>{mapRecipeItems(5)}</S.List>
    </S.Container>
  );
}
