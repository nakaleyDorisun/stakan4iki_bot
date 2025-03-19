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
  if (menuText && menu?.price) {
    await ctx.reply("Обновляем корзину...", {
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
}
