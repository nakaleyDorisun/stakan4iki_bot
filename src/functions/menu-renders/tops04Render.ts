import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function tops04Render(ctx: MyContext, userID?: number) {
  try {
    const imgURL =
      "https://barista-spb.ru/components/com_jshopping/files/img_products/924_kryshka-plastikovaya-chernaya-klapan-80mm.jpg";
    const menu = menus["tops04"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("tops04");
      await ctx.editMessageText(menu.text, {
        reply_markup: keyboard,
        parse_mode: "MarkdownV2",
      });
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
