import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonAllTopsCQ(ctx: MyContext) {
  const menu = menus["button_allTops_click"];
  const keyboard = createInlineKeyboard(menu.buttons);
  await ctx.editMessageText(menu.text, { reply_markup: keyboard });
}
