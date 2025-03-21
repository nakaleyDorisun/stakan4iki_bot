import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function phoneChangeRender(ctx: MyContext) {
  try {
    const menu = menus["phoneChange"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.isWaitingForPhoneChange = true;
      const message =
        "Введите ваш новый номер телефона\nНомер телефона можно вводить в любом формате, миним 6 цифр, например\n\n89123123123 или +79123123123";
      ctx.session.menuHistory.push("adressEmpty");
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
