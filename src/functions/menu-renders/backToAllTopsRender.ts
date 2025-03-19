import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function backToAllTopsRender(ctx: MyContext, userID?: number) {
  try {
    if (ctx.chat?.id && ctx.callbackQuery?.message?.message_id) {
      const menu = menus["allTops"];
      const keyboard = await createInlineKeyboard(menu.buttons);
      if (keyboard) {
        ctx.session.menuHistory.push("allTops");
        await ctx.deleteMessage();
        await ctx.reply(menu.text, {
          reply_markup: keyboard,
        });
      } else {
        await ctx.reply("Произошла ошибка создания клавиатуры");
      }
      await ctx.answerCallbackQuery();
    }
  } catch (error) {
    console.error(error);
  }
}
