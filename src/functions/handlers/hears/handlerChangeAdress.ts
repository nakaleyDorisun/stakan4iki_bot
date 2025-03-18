import { MyContext } from "../../../types";

export async function handlerChangeAdress(ctx: MyContext) {
  const adress = ctx.session.adress;
  if (adress) {
    ctx.session.isWaitingForAdress = true;
    ctx.session.isWaitingForPhone = false;
    // ctx.session.adress = null;
    await ctx.reply("Введите новый адрес доставки:");
  } else {
    await ctx.reply("Сначала укажите адрес доставки");
  }
}
