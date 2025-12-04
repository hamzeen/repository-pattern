import Koa from "koa";
import cors from "@koa/cors";
import { koaBody } from "koa-body";
import { buildRouter } from "./router";
import { seed } from "./seed";

const app = new Koa();
const router = buildRouter();

// ⭐ CORS MUST BE THE FIRST MIDDLEWARE ⭐
app.use(
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type"],
  })
);

// Body parser
app.use(koaBody());

// Routes
app.use(router.routes());
app.use(router.allowedMethods());

seed();

app.listen(3000, () => {
  console.log("Recipes API running on http://localhost:3000");
});
