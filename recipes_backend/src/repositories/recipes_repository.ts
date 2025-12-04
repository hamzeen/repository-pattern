import { Repository } from "./_repository";
import { db } from "../database";
import { Recipe, RecipeInput } from "../types/recipes";
import { autoIncrement } from "../utils/identifiers";

export class RecipesRepository implements Repository<Recipe> {
  async list(): Promise<Recipe[]> {
    return Object.values(db.recipes);
  }

  async read(id: number): Promise<Recipe | null> {
    return db.recipes[id] || null;
  }

  async create(data: RecipeInput): Promise<Recipe> {
    const id = autoIncrement(Object.keys(db.recipes).map(Number));

    const recipe: Recipe = {
      id,
      ...data
    };

    db.recipes[id] = recipe;
    return recipe;
  }

  async delete(id: number): Promise<boolean> {
    if (!db.recipes[id]) return false;
    delete db.recipes[id];
    return true;
  }
}
