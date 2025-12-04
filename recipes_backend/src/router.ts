import Router from "koa-router";
import { RecipesController } from "./controllers/recipes_controller";

export function buildRouter() {
  const r = new Router();
  const recipes = new RecipesController();

  r.get("/recipes", recipes.list);
  r.post("/recipes", recipes.create);
  r.get("/recipes/:id", recipes.read);
  r.delete("/recipes/:id", recipes.delete);

  return r;
}
