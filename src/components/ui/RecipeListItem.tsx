import { recipes } from "@/assets/recipes.json";

import * as S from "./RecipeListItem.styled";

import { Recipe } from "@/types";
import { FiClock, FiHash, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export interface RecipeListItemProps {
  recipe: Recipe;
}

export default function RecipeListItem({ recipe }: RecipeListItemProps) {
  const navigate = useNavigate();

  const link = `/recipe/${recipes.indexOf(recipe as any)}`;
  const mappedTags = recipe.tags?.map((tag, i) => {
    return (
      <S.Tag key={i}>
        <FiHash />
        {tag}
      </S.Tag>
    );
  });

  const _onClick = () => {
    navigate(link);
  };

  return (
    <S.Item>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          onClick={_onClick}
          src={recipe.thumbnailUrl}
          alt="thumbnail"
        />
        <S.LikeButton>
          <FiHeart size={22} />
        </S.LikeButton>
      </S.ThumbnailWrapper>
      <S.Content>
        <Link to={link}>
          <h2>{recipe.name}</h2>
        </Link>
        {mappedTags && <S.TagList>{mappedTags}</S.TagList>}
        <S.Details>
          <S.DetailsItem>
            <FiClock /> {recipe.time}
          </S.DetailsItem>
          <S.DetailsItem>
            <FiShoppingBag /> {recipe.ingredients.length} ingredients
          </S.DetailsItem>
        </S.Details>
      </S.Content>
    </S.Item>
  );
}
