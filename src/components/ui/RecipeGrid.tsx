import { RecipeListItemProps } from "./RecipeListItem";

export interface RecipeGridProps {
  heading?: string;
  recipes: RecipeListItemProps[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return <div></div>;
}
