import { InlineKeyboard } from "grammy";
import { MyContext } from "../../../types";

export async function startCommand(ctx: MyContext) {
  const firstName = ctx.from?.first_name;
  const keyboard = new InlineKeyboard().text("Запустить магазин🛍", "menu");
  await ctx.reply(
    `Привет, ${firstName}!\n\nДобро пожаловать в Стаканчик бот!\nЯ удобное приложение для заказа одноразовых стаканчиков Калининградского производства🙃`,
    {
      reply_markup: keyboard,
    }
  );
}
