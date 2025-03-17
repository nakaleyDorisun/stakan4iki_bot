import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createReplyKeyboard } from "../../keyboards/createKeyboard";

export async function handlerMainMenu(ctx: MyContext) {
  if (ctx.session.isAdmin) {
    const keyboardMenuAdmin = await createReplyKeyboard(
      ctx,
      "keyboardMenuAdmin"
    );
    if (keyboardMenuAdmin) {
      await handleMenuSection(ctx, "Главное меню🏡", keyboardMenuAdmin, "menu");
    } else {
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }
    return;
  }
  const keyboardMenu = await createReplyKeyboard(ctx, "keyboardMenu");
  if (keyboardMenu) {
    await handleMenuSection(ctx, "Главное меню🏡", keyboardMenu, "menu");
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру каталога.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
}
