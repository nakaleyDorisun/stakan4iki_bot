import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function catalogRender(ctx: MyContext) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(
        ctx.callbackQuery.message.message_id,
        "ctx.callbackQuery.message.message_id from catalogRender"
      );

      ctx.session.messageId = ctx.callbackQuery.message.message_id;
      console.log(
        ctx.session.messageId,
        "ctx.session.messageId from catalogRender"
      );
    } /////////////////////////////////////////////////
    const menu = menus["catalog"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    if (keyboard) {
      ctx.session.menuHistory.push("catalog");
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
