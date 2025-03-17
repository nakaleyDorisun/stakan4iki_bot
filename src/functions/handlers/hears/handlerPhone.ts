import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerPhone(ctx: MyContext) {
  const keyboardPhone = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_PHONE
  );
  if (keyboardPhone) {
    handleMenuSection(ctx, "Телефон☎️", keyboardPhone, "phone");
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру меню телефона.");
    await ctx.reply(
      "Произошла ошибка при загрузке меню телефона. Попробуйте позже."
    );
  }
  if (!ctx.session.phone) {
    ctx.session.isWaitingForPhone = true;

    await ctx.reply(
      "Введите ваш номер телефона\nНомер телефона можно вводить в любом формате, миним 6 цифр, например\n\n89123123123 или +79123123123",
      {
        reply_markup: { remove_keyboard: true },
      }
    );
  } else {
    await ctx.reply(`Ваш номер телефона: ${ctx.session.phone}`);
  }
}
