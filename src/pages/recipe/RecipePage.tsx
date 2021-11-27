import { useParams } from "react-router";

import recipes from "@/assets/recipes.json";

import * as S from "./RecipePage.styled";
import {
  FiArrowDown,
  FiCheckSquare,
  FiChevronDown,
  FiClock,
  FiShoppingBag,
  FiSquare,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { Recipe, RecipeIngredient } from "@/types";

function IngredientItem({ ingredient }: { ingredient: RecipeIngredient }) {
  const [open, setOpen] = useState<boolean>(false);
  const { amount, name } = ingredient;
  const units = `${amount.value}${amount.unit && " " + amount.unit}`;

  return (
    <>
      <S.IngredientItem onClick={() => setOpen(!open)}>
        <span>
          <b>{units}</b>
          {name}
        </span>
        {ingredient.alternatives && (
          <span className="flex">
            <span className="alternatives">Alternatives</span>
            <span>
              <FiChevronDown size={18} />
            </span>
          </span>
        )}
      </S.IngredientItem>
      {open && ingredient.alternatives && (
        <div className="checks">
          {ingredient.alternatives.map((a) => {
            return (
              <div className="checks__check">
                <input type="checkbox" />
                <span>{a}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function RecipePage() {
  const { id } = useParams();
  const [checked, setChecked] = useState<number[]>([]);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const mappedIngredients = () =>
    recipe &&
    recipe.ingredients.map((ingredient, i) => {
      return <IngredientItem ingredient={ingredient} />;
    });

  const mappedSteps = () =>
    recipe &&
    recipe.steps.map((step, i) => {
      const isChecked = checked.includes(i);
      const ingredients = recipe.ingredients;

      const onClick = () => {
        if (isChecked) {
          setChecked((checked) => checked.filter((a) => a !== i));
        } else {
          setChecked((checked) => [i, ...checked]);
        }
      };

      const parts = step.description
        .split(/\{|\}/g)
        .map((p) => {
          const number = parseInt(p);

          if (Number.isNaN(number)) {
            return p;
          }

          return ingredients[number].name.toLowerCase();
        })
        .join("");

      return (
        <>
          <S.StepItem checked={isChecked} onClick={onClick}>
            <div>
              {isChecked ? <FiCheckSquare size={24} /> : <FiSquare size={24} />}
            </div>
            {parts}
          </S.StepItem>
          {i !== recipe.steps.length - 1 && !isChecked && (
            <S.StepSeperator>
              <FiArrowDown size={32} />
            </S.StepSeperator>
          )}
        </>
      );
    });

  useEffect(() => {
    if (id) {
      setRecipe(recipes.recipes[parseInt(id)]);
      setChecked([]);
    }
  }, [id]);

  if (!id) {
    return null;
  }

  if (!recipe) {
    return null;
  }

  return (
    <S.Container>
      <div>
        <S.ThumbnailWrapper>
          <img src={recipe.thumbnailUrl} alt="thumbnail" />
        </S.ThumbnailWrapper>
        <div>
          <h1>{recipe.name}</h1>
          <S.Details>
            <S.DetailsItem>
              <FiClock /> {recipe.time}
            </S.DetailsItem>
            <S.DetailsItem>
              <FiShoppingBag /> {recipe.ingredients.length} ingredients
            </S.DetailsItem>
          </S.Details>
          <h3>Ingredients</h3>
          <S.IngredientList>{mappedIngredients()}</S.IngredientList>
          <div style={{ marginTop: 16 }}>
            <Button label="Add to shopping list" />
          </div>
        </div>
      </div>

      <div>
        <h2>Steps</h2>
        <S.StepList>{mappedSteps()}</S.StepList>
        <S.Footer>
          <h2>You're done!</h2>
          <p>Make sure to leave a review.</p>
          <S.CommentInput />
        </S.Footer>
      </div>
    </S.Container>
  );
}
