import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { keyboardAddToCart } from "../../keyboards/keyboardsDynamic";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerAddToCart(ctx: MyContext) {
  const keyboard = await keyboardAddToCart(ctx);
  if (keyboard) {
    await handleMenuSection(ctx, "Добавить в Корзину🛍", keyboard);
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру добавить в корзину.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
}
