import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonTops02CQ(ctx: MyContext) {
  try {
    const menu = menus["tops02"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    await ctx.editMessageText(menu.text, { reply_markup: keyboard });
  } catch (error) {
    await ctx.reply("Не удалось загрузить товар");
    console.error(error);
  }
}
