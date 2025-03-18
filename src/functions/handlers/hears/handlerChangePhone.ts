import { MyContext } from "../../../types";

export async function handlerChangePhone(ctx: MyContext) {
  const isPhone = ctx.session.adress ? true : false;
  if (isPhone) {
    await ctx.reply("Введите новый контактный телефон:");
    ctx.session.isWaitingForPhoneChange = true;
    ctx.session.isWaitingForAdressChange = false;
    ctx.session.isWaitingForAdress = false;
    ctx.session.isWaitingForPhone = false;
  } else {
    await ctx.reply("Сначала укажите контактный телефон");
  }
}
