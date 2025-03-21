import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function backToAllCapsRender(ctx: MyContext) {
  try {
    const menu = menus["allCaps"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("allCaps");
      await ctx.deleteMessage();
      await ctx.reply(menu.text, {
        reply_markup: keyboard,
      });
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
    await ctx.answerCallbackQuery();
  } catch (error) {
    console.error(error);
  }
}
