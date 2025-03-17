import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonAllCapsCQ(ctx: MyContext) {
  const menu = menus["button_allCaps_click"];
  const keyboard = createInlineKeyboard(menu.buttons);
  await ctx.editMessageText(menu.text, { reply_markup: keyboard });
}
