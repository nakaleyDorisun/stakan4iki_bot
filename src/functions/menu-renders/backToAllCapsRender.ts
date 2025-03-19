import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function backToAllCapsRender(ctx: MyContext, userID?: number) {
  try {
    console.log("back to menu");
    if (ctx.chat?.id && ctx.callbackQuery?.message?.message_id) {
      const menu = menus["backToAllCaps"];
      const chatID = ctx.chat.id;
      const messageID = ctx.callbackQuery.message.message_id;
      const keyboard = await createInlineKeyboard(menu.buttons);
      if (keyboard) {
        ctx.session.menuHistory.push("backToAllCaps");
        await ctx.api.editMessageText(chatID, messageID, menu.text);
      } else {
        await ctx.reply("Произошла ошибка создания клавиатуры");
      }
      await ctx.answerCallbackQuery();
    }
  } catch (error) {
    console.error(error);
  }
}
