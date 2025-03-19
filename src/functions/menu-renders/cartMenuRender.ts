import {
  createInlineKeyboard,
  createReplyKeyboard,
} from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";
import { MyContext } from "../../types";
import { handleMenuSection } from "../createFunctions/handleMenuSection";

export async function cartMenuRender(ctx: MyContext) {
  try {
    ctx.session.menuHistory.push("cart");
    const menuCart = menus["cart"];
    const menuCartItem = menus["cartItem"];
    const keyboardCart = createInlineKeyboard(menuCart.buttons);
    const keyboardItem = createInlineKeyboard(menuCartItem.buttons);
    const isCart = ctx.session.cart.length;
    if (isCart) {
      const cartBodyMessage = ctx.session.cart
        .map(
          (item) => `📍 ${item.name} - ${item.amount} шт. - ${item.price}₽\n`
        )
        .join("");
      const cartResultMessage = `Всего в корзине товаров: ${ctx.session.cart.length} \n на сумму: ${ctx.session.totalRub}₽`;
      await ctx.reply("В корзине:");

      await ctx.reply(cartBodyMessage, { reply_markup: keyboardItem });

      await ctx.reply(cartResultMessage, {
        reply_markup: keyboardCart,
      });
    } else {
      await ctx.reply("Корзина пуста, выбирете товар из каталога");
      const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
      if (keyboardCatalog) {
        await handleMenuSection(ctx, "Каталог📕", keyboardCatalog, "catalog");
      } else {
        console.error("Ошибка: Не удалось создать клавиатуру каталога.");
        await ctx.reply(
          "Произошла ошибка при загрузке каталога. Попробуйте позже."
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
}
