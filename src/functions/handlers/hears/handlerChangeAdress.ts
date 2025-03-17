import { MyContext } from "../../../types";

export async function handlerChangeAdress(ctx: MyContext) {
  ctx.session.isWaitingForAdress = true;
  ctx.session.adress = null;
  await ctx.reply("Введите новый адрес доставки");
}
