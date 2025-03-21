import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";
import { MyContext } from "../../types";

export async function cartRender(ctx: MyContext) {
  try {
    ctx.session.menuHistory.push("cart");
    const menu = menus["cart"];
    const menuCartEmpty = menus["cartEmpty"];
    // const menuCartItem = menus["cartItem"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const keyboardCartEmpty = await createInlineKeyboard(menuCartEmpty.buttons);
    // const keyboardItem = createInlineKeyboard(menuCartItem.buttons);
    const isCart = ctx.session.cart.length;
    if (isCart) {
      const cartBodyMessage = ctx.session.cart
        .map(
          (item) => `📍 ${item.name} ➡️ ${item.amounth} шт ➡️ ${item.price}₽\n`
        )
        .join("");
      const cartResultMessage = `Всего в корзине товаров: ${ctx.session.cart.length} \nна сумму: ${ctx.session.totalRub}₽`;

      await ctx.editMessageText(`${cartBodyMessage}\n\n${cartResultMessage}`, {
        reply_markup: keyboard,
        parse_mode: "MarkdownV2",
      });
    } else {
      await ctx.editMessageText(
        "Корзина пуста🙁, выбирете товар из каталога:",
        {
          reply_markup: keyboardCartEmpty,
          parse_mode: "MarkdownV2",
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
