import { handleMenuSection } from "../functions/createFunctions/handleMenuSection";
import { createReplyKeyboard } from "../functions/keyboards/createKeyboard";
import { MyContext } from "../types";

export async function StakanchikAI(ctx: MyContext) {
  let isCatalog;
  let isCap;
  let isTop;

  if (ctx.message?.text) {
    const message = ctx.message.text.toLocaleLowerCase();
    isCatalog =
      message === "каталог" ||
      message === "каталаг" ||
      message === "купить" ||
      message === "покупка" ||
      message === "ассортимент";
    isCap =
      message === "стакан" ||
      message === "стаканчик" ||
      message === "стаканы" ||
      message === "купить стаканы" ||
      message === "стоканы";
    isTop =
      message === "крышка" ||
      message === "крышечка" ||
      message === "крышки" ||
      message === "купить крышку" ||
      message === "крыжка" ||
      message === "крыжки";
  }

  if (isCatalog) {
    const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
    if (keyboardCatalog) {
      handleMenuSection(ctx, "Каталог📕", keyboardCatalog, "catalog");
    } else {
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }
  }
  if (isCap) {
    const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
    if (keyboardCatalog) {
      handleMenuSection(
        ctx,
        "Каталог📕",
        keyboardCatalog,
        "button_allCaps_click"
      );
    } else {
      // Обработка случая, когда клавиатура не была создана
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }
  }
  if (isTop) {
    const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
    if (keyboardCatalog) {
      handleMenuSection(
        ctx,
        "Каталог📕",
        keyboardCatalog,
        "button_allTops_click"
      );
    } else {
      // Обработка случая, когда клавиатура не была создана
      console.error("Ошибка: Не удалось создать клавиатуру каталога.");
      await ctx.reply(
        "Произошла ошибка при загрузке каталога. Попробуйте позже."
      );
    }
  }
}
