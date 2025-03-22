import { menus } from "../../menus/menus";
import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";

export async function deliveryRender(ctx: MyContext, useId?: number) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(ctx.callbackQuery.message.message_id, "from deliveryRender");
    } /////////////////////////////////////////////////
    ctx.session.menuHistory.push("delivery");
    const menu = menus["delivery"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const isOrder = ctx.session.orders;
    console.log(isOrder, "isOrder");
    if (keyboard) {
      if (isOrder.length) {
        const message = ctx.session.orders.map((order) => order.text);
        await ctx.editMessageText(`Список ваших заказов:${message}`, {
          reply_markup: keyboard,
        });
      } else {
        ctx.editMessageText(
          "У вас нет заказов🙁, перейдите в каталог чтобы добавить свой первый товар",
          {
            reply_markup: keyboard,
            parse_mode: "MarkdownV2",
          }
        );
      }
    } else {
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }
  } catch (error) {
    console.error("Произошла ошибка при загрузке меню доставки");
    await ctx.reply("Не удалось загрузить меню доставки");
  }
}
