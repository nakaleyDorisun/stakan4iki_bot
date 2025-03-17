import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerCatalog(ctx: MyContext) {
  const keyboardCatalog = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_CART
  );
  if (keyboardCatalog) {
    handleMenuSection(ctx, "Каталог📕", keyboardCatalog, "catalog");
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру каталога.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
}
