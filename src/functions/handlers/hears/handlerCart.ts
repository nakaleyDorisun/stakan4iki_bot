import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerCart(ctx: MyContext) {
  const keyboardCart = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_CART
  );
  if (keyboardCart) {
    await handleMenuSection(
      ctx,
      `Корзина🛒${
        ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
      }`,
      keyboardCart,
      "cart"
    );
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру каталога.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
}
