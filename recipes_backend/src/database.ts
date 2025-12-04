import { Recipe } from "./types/recipes";

export interface Database {
  recipes: Record<number, Recipe>;
}

export const db: Database = {
  recipes: {}
};
