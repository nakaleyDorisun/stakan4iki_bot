import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function phoneEmptyRender(ctx: MyContext, userID?: number) {
  try {
    const menu = menus["phoneEmpty"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      const message =
        "Введите ваш номер телефона\nНомер телефона можно вводить в любом формате, миним 6 цифр, например\n\n89123123123 или +79123123123";
      ctx.session.menuHistory.push("phoneEmpty");
      await ctx.editMessageText(message, {
        reply_markup: keyboard,
        parse_mode: "HTML",
      });
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
