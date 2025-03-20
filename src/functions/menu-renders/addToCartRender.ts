import { menus } from "../../menus/menus";
import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";

export async function addToCartRender(ctx: MyContext) {
  const itemMenuKey = ctx.session.menuHistory.slice(-1)[0];
  const menu = menus[itemMenuKey];
  try {
    if (menu.price) {
      ctx.session.cart.push({
        id: Date.now().toLocaleString(),
        name: menu.text,
        amounth: 1,
        price: menu.price,
      });
      await ctx.answerCallbackQuery({
        text: `Добавлено в корзину ${menu.text} ➡️ ${menu.amount} уп✅`,
      });
      const message = await ctx.reply(
        `Добавлено в корзину ${menu.text} ➡️ ${menu.amount} уп✅`
      );
      if (message) {
        ctx.session.messagesAddToCart.push(message.message_id);
        console.log(ctx.session.messagesAddToCart);
      } else {
        console.log("!message"); // допилить нормальный обработчик
      }

      const keyboard = await createInlineKeyboard(menu.buttons);
      if (menu.price) ctx.session.totalRub += menu.price;
      if (keyboard) {
      }
    }
  } catch (error) {
    await ctx.reply(
      `Ошибка добавления в корзину ${menu.text}, попробуйте еще раз`
    );
    console.error(error);
  }
}
