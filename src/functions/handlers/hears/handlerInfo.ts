import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerInfo(ctx: MyContext) {
  const keyboardInfo = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_INFO
  );
  if (keyboardInfo) {
    await handleMenuSection(ctx, "Информация📋", keyboardInfo, "info");
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру меню информации.");
    await ctx.reply(
      "Произошла ошибка при загрузке меню информации. Попробуйте позже."
    );
  }
}
