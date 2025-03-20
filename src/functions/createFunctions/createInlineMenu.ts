import { menus } from "../../menus/menus";
import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { cartRender } from "../menu-renders/cartRender";
import { mainMenuRender } from "../menu-renders/mainMenuRender";

// функция для отправки ботом в чат сообщения с инлайн кнопками (менюшек)
export async function createInlineMenu(ctx: MyContext, menuId?: string) {
  try {
    if (menuId === "cart") {
      await cartRender(ctx);
      return;
    }
    if (
      (menuId === "phone" && !ctx.session.phone) ||
      (menuId === "adress" && !ctx.session.adress)
    ) {
      return;
    }
    if (menuId === "delivery") {
      return;
    }
    if (menuId) {
      const menu = menus[menuId];
      const keyboard = await createInlineKeyboard(menu.buttons);
      await ctx.reply(menu.text, { reply_markup: keyboard });
    } else {
      await ctx.reply("Меню не найдено");
      return;
    }
  } catch (error) {
    console.error(`Ошибка при отправке меню ${menuId}:`, error);
    await ctx.reply("Произошла ошибка при загрузке меню. Попробуйте позже.");
    await mainMenuRender(ctx);
  }
}
