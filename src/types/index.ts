export type RecipeIngredient = {
  name: string;
  amount: {
    value: string;
    unit?: string;
  };
  alternatives?: string[];
};

export type RecipeStep = {
  description: string;
};

export type Recipe = {
  name: string;
  description?: string;
  thumbnailUrl: string;
  steps: RecipeStep[];
  ingredients: RecipeIngredient[];
  time?: string;
  difficulty?: number;
  tags?: string[];
};

export type Deal = {
  name: string;
  type: string;
  link?: string;
  brand?: string;
  thumbnailUrl: string;
  price: {
    amount: number;
    currency: string;
  };
  seller: {
    name: string;
    logoUrl: string;
  };
};
