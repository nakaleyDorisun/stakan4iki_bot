import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonCap03CQ(ctx: MyContext) {
  try {
    const menu = menus["caps03"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    await ctx.editMessageText(menu.text, { reply_markup: keyboard });
  } catch (error) {
    await ctx.reply("Не удалось загрузить товар");
    console.error(error);
  }
}
