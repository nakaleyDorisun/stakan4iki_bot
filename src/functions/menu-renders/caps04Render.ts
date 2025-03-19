import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function caps04Render(ctx: MyContext, userID?: number) {
  try {
    const imgURL =
      "https://barista-spb.ru/components/com_jshopping/files/img_products/913_bumazhniy-stakan-200ml-white.jpg";
    const menu = menus["caps04"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("caps04");
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
