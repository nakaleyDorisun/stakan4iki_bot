import { MyContext } from "../../types";
import { createSimpleReplyKeyboard } from "../keyboards/createKeyboard";
import { simpleKeyboards } from "../keyboards/keyboardsSimple";

export async function deliveryMenuRender(ctx: MyContext) {
  try {
    const keyboardDeleviry = await createSimpleReplyKeyboard(
      ctx,
      simpleKeyboards.KEYBOARD_DELIVERY
    );
    const isOrder = ctx.session.orders;
    if (keyboardDeleviry) {
    } else {
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }

    if (isOrder) {
      const message = ctx.session.orders.map((order) => order.text);
      await ctx.reply("Список ваших заказов: ", {
        reply_markup: keyboardDeleviry,
      });
      message.map(async (message) => await ctx.reply(`${message}`));
    } else {
      ctx.reply("У вас нет заказов");
    }
  } catch (error) {
    console.error("Произошла ошибка при загрузке меню доставки");
    await ctx.reply("Не удалось загрузить меню доставки");
  }
}
