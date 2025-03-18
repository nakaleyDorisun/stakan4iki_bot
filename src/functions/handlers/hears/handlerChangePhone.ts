import { MyContext } from "../../../types";

export async function handlerChangePhone(ctx: MyContext) {
  const phone = ctx.session.phone;
  if (phone) {
    ctx.session.isWaitingForPhone = true;
    ctx.session.isWaitingForAdress = false;
    // ctx.session.phone = null;
    await ctx.reply("Введите новый контактный телефон:");
  } else {
    await ctx.reply("Сначала укажите контактный телефон");
  }
}
