export interface RecipeInput {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tag: RecipeTag
}

export interface Recipe extends RecipeInput {
  id: number;
}

export type RecipeTag = "VEGETARIAN" | "VEGAN" | "DESSERT" |"GLUTEN_FREE" | "NONE";