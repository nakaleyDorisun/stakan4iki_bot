import { MyContext } from "../../../types";

export async function handlerChangeAdress(ctx: MyContext) {
  const isAdress = ctx.session.adress ? true : false;
  if (isAdress) {
    await ctx.reply("Введите новый адрес доставки:");
    ctx.session.isWaitingForAdressChange = true;
    ctx.session.isWaitingForPhoneChange = false;
    ctx.session.isWaitingForAdress = false;
    ctx.session.isWaitingForPhone = false;
  } else {
    await ctx.reply("Сначала укажите адрес доставки");
  }
}
