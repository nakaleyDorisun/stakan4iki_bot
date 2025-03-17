import { MyContext } from "../../../types";

export async function handlerChangePhone(ctx: MyContext) {
  ctx.session.isWaitingForPhone = true;
  ctx.session.adress = null;
  await ctx.reply("Введите новый телефон");
}
