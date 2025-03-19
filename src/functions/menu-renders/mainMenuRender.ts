import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { isAdmin } from "../admin/isAdmin";
import { menus } from "../../menus/menus";

export async function mainMenuRender(ctx: MyContext, userID?: number) {
  try {
    if (userID) {
      await isAdmin(ctx, userID);
    }
    const menu = menus["menu"];
    const menuAdmin = menus["menuAdmin"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const keyboardAdmin = await createInlineKeyboard(menuAdmin.buttons);
    const isAdminFlag = ctx.session.isAdmin;

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
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
