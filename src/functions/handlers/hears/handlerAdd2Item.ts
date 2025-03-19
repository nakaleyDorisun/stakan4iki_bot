import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { keyboardAddToCart } from "../../keyboards/keyboardsDynamic";

export async function handlerAdd2Item(ctx: MyContext) {
  let n = 2;
  const itemCardKey =
    ctx.session.menuHistory[ctx.session.menuHistory.length - 1];
  const item = menus[itemCardKey];
  try {
    if (item.price) {
      const cart = ctx.session.cart;
      const itemToCart = {
        id: Date.now().toLocaleString(),
        name: item.text,
        amount: 1,
        price: item.price,
      };
      for (let i = 0; i < n; i++) {
        cart.push(itemToCart);
        ctx.session.totalRub += itemToCart.price;
      }
      const keyboard = await keyboardAddToCart(ctx);
      await ctx.reply(`Добавлено в корзину ${item.text} - ${n} уп. ✅`, {
        reply_markup: keyboard,
      });
    }
  } catch (error) {
    await ctx.reply(
      `Ошибка добавления в корзину ${item.text}, попробуйте еще раз`
    );
    console.error(error);
  }
}
