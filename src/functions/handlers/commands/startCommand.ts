import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";
import { menus } from "../../../menus/menus";

export async function startCommand(ctx: MyContext) {
  const menu = menus["launch"];
  const firstName = ctx.from?.first_name;
  const keyboard = await createInlineKeyboard(menu.buttons);
  await ctx.reply(`Привет, ${firstName}\n\n${menu.text}`, {
    reply_markup: keyboard,
    parse_mode: "MarkdownV2",
  });
}
