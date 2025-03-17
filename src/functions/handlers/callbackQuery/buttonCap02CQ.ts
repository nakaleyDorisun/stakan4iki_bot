import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonCap02CQ(ctx: MyContext) {
  try {
    const menu = menus["button_caps02_click"];
    if (menu.callbackQuery) ctx.session.menuHistory.push(menu.callbackQuery);
    const keyboard = createInlineKeyboard(menu.buttons);
    await ctx.editMessageText(menu.text, { reply_markup: keyboard });
  } catch (error) {
    await ctx.reply("Не удалось загрузить товар");
    console.log(error);
  }
}
