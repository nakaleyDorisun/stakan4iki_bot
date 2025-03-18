import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { keyboardAddToCart } from "../../keyboards/keyboardsDynamic";

export async function handlerAdd1Item(ctx: MyContext) {
  const itemCardKey =
    ctx.session.menuHistory[ctx.session.menuHistory.length - 1];
  const item = menus[itemCardKey];
  try {
    if (item.price)
      ctx.session.cart.push({
        id: Date.now().toLocaleString(),
        name: item.text,
        amounth: 1,
        price: item.price,
      });
    const keyboard = await keyboardAddToCart(ctx);
    await ctx.reply(`Добавлено в корзину ${item.text} ✅`, {
      reply_markup: keyboard,
    });
  } catch (error) {
    await ctx.reply(
      `Ошибка добавления в корзину ${item.text}, попробуйте еще раз`
    );
    console.error(error);
  }
}
