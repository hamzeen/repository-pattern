import { Controller } from "./_controller";
import { RecipesRepository } from "../repositories/recipes_repository";
import { Context } from "koa";
import { RecipeInput } from "../types/recipes";

const repo = new RecipesRepository();

// 🔹 Runtime check + TS type guard
function isRecipeInput(body: any): body is RecipeInput {
  return (
    typeof body?.title === "string" &&
    typeof body?.description === "string" &&
    Array.isArray(body?.ingredients) &&
    Array.isArray(body?.steps)
  );
}

export class RecipesController extends Controller {
  list = async (ctx: Context) => {
    const recipes = await repo.list();
    this.ok(ctx, recipes);
  };

  read = async (ctx: Context) => {
    const id = Number(ctx.params.id);
    const recipe = await repo.read(id);

    if (!recipe) return this.notFound(ctx, "Recipe not found");
    this.ok(ctx, recipe);
  };

  create = async (ctx: Context) => {
    const body = (ctx.request as any).body;


    if (!isRecipeInput(body)) {
      return this.badRequest(ctx, "Invalid recipe payload");
    }

    const recipe = await repo.create(body); // 🔹 body now typed as RecipeInput
    this.created(ctx, recipe);
  };

  delete = async (ctx: Context) => {
    const id = Number(ctx.params.id);
    const result = await repo.delete(id);

    if (!result) return this.notFound(ctx, "Recipe not found");
    this.ok(ctx, { success: true });
  };
}
