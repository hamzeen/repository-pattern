import { Context } from "koa";

export class Controller {
  ok(ctx: Context, data: unknown) {
    ctx.body = data;
  }

  created(ctx: Context, data: unknown) {
    ctx.status = 201;
    ctx.body = data;
  }

  notFound(ctx: Context, message = "Not found") {
    ctx.status = 404;
    ctx.body = { error: message };
  }

  badRequest(ctx: Context, message: string) {
    ctx.status = 400;
    ctx.body = { error: message };
  }
}
