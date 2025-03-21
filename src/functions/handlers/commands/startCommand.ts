import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";
import { menus } from "../../../menus/menus";
import { resetInputFlags } from "../../menu-renders/resetInputFlags";

export async function startCommand(ctx: MyContext) {
  const menu = menus["launch"];
  const firstName = ctx.from?.first_name;
  const keyboard = await createInlineKeyboard(menu.buttons);
  await resetInputFlags(ctx);
  const startMessage = await ctx.reply(`Привет, ${firstName}\n\n${menu.text}`, {
    reply_markup: keyboard,
    parse_mode: "MarkdownV2",
  });
  const messageId = startMessage.message_id;
  ctx.session.messageId = messageId;
  console.log(ctx.session.messageId, "from /start");
}
