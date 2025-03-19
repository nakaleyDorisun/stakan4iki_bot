import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function accountRender(ctx: MyContext, userID?: number) {
  try {
    const menu = menus["account"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("account");
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
