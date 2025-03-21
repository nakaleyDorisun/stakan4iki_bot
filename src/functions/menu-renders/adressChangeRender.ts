import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function adressChangeRender(ctx: MyContext) {
  try {
    const menu = menus["adressChange"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.isWaitingForAdressChange = true;
      const message =
        "Введите ваш новый адрес доставки\n\nАдрес должен содержать:\n📍Город\n📍Улицу\n📍Номер дома (номер офиса / квартиры / помещения)\n\nНапример: г.Калининград, ул.Брамса д.45, оф.1";
      ctx.session.menuHistory.push("adressChangeRender");
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
