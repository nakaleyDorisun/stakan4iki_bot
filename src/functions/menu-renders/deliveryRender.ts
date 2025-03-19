import { menus } from "../../menus/menus";
import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";

export async function deliveryRender(ctx: MyContext, useId?: number) {
  try {
    ctx.session.menuHistory.push("delivery");
    const menu = menus["delivery"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const isOrder = ctx.session.orders;
    if (keyboard) {
    } else {
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }

    if (isOrder) {
      const message = ctx.session.orders.map((order) => order.text);
      await ctx.editMessageText(`Список ваших заказов:`, {
        reply_markup: keyboard,
      });
    } else {
      ctx.editMessageText("У вас нет заказов", {
        reply_markup: keyboard,
        parse_mode: "MarkdownV2",
      });
    }
  } catch (error) {
    console.error("Произошла ошибка при загрузке меню доставки");
    await ctx.reply("Не удалось загрузить меню доставки");
  }
}
