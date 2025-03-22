import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { isAdmin } from "../admin/isAdmin";
import { menus } from "../../menus/menus";

export async function adminPanelRender(ctx: MyContext, userID?: number) {
  try {
    if (userID) {
      await isAdmin(ctx, userID);
    }
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(
        ctx.callbackQuery.message.message_id,
        "from adminPanelRender"
      );
    } /////////////////////////////////////////////////
    const menu = menus["admin"];
    const menuNotAdmin = menus["noTAdmin"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const keyboardNotAdmin = await createInlineKeyboard(menuNotAdmin.buttons);
    const isAdminFlag = ctx.session.isAdmin;

    if (keyboard) {
      if (isAdminFlag) {
        ctx.session.menuHistory.push("admin");
        await ctx.editMessageText(menu.text, {
          reply_markup: keyboard,
          parse_mode: "MarkdownV2",
        });
      } else {
        await ctx.editMessageText(menuNotAdmin.text, {
          reply_markup: keyboardNotAdmin,
          parse_mode: "MarkdownV2",
        });
      }
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
