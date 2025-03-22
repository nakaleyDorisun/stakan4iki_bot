import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { isAdmin } from "../admin/isAdmin";
import { menus } from "../../menus/menus";
import { resetInputFlags } from "./resetInputFlags";

export async function mainMenuRender(ctx: MyContext, userID?: number) {
  try {
    if (userID) {
      await isAdmin(ctx, userID);
    }
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(ctx.callbackQuery.message.message_id, "from mainMenuRender");
    } /////////////////////////////////////////////////
    const menu = menus["menu"];
    const menuAdmin = menus["menuAdmin"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const keyboardAdmin = await createInlineKeyboard(menuAdmin.buttons);
    const isAdminFlag = ctx.session.isAdmin;
    await resetInputFlags(ctx);
    if (keyboardAdmin && isAdminFlag) {
      ctx.session.menuHistory.push("menu");
      await ctx.editMessageText(menuAdmin.text, {
        reply_markup: keyboardAdmin,
        parse_mode: "MarkdownV2",
      });
    } else if (keyboard) {
      ctx.session.menuHistory.push("menu");
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
