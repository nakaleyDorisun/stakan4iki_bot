import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function allCapsRender(ctx: MyContext) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(ctx.callbackQuery.message.message_id, "from allCapsRender");
    } /////////////////////////////////////////////////
    const menu = menus["allCaps"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("allCaps");
      await ctx.editMessageText(menu.text, {
        reply_markup: keyboard,
        parse_mode: "MarkdownV2",
      });
    } else {
      await ctx.editMessageText("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
