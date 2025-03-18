import { Keyboard } from "grammy";
import { IMenuItem, MyContext } from "../../types";
import { createInlineMenu } from "./createInlineMenu";

// Функция прослойка для вызова меню через Reply клавиатуру?
export async function handleMenuSection(
  ctx: MyContext,
  menuText?: string | null,
  keyboard?: Keyboard,
  menuId?: string,
  menu?: IMenuItem
) {
  let updateMessage;
  if (menuText && menu?.price) {
    updateMessage = await ctx.reply("Обновляем корзину...", {
      reply_markup: keyboard,
    });
  }
  if (menuText && !menu?.price) {
    await ctx.reply(`Загружаю ${menuText}...`, {
      reply_markup: keyboard,
    });
  }
  if (menuId && keyboard) {
    ctx.session.keyboardHistory.push(keyboard);
    ctx.session.menuHistory.push(menuId);
    await createInlineMenu(ctx, menuId);
  }
  // if (updateMessage && ctx.chatId) {
  //   await ctx.api.deleteMessage(ctx.chatId, updateMessage.message_id);
  // }
}
