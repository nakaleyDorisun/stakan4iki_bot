import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerAdress(ctx: MyContext) {
  const keyboardAdress = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_ADDRESS
  );
  if (keyboardAdress) {
    await handleMenuSection(ctx, "Адрес🏠", keyboardAdress /*"adress"*/);
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру меню адреса.");
    await ctx.reply(
      "Произошла ошибка при загрузке меню адреса. Попробуйте позже."
    );
  }
  if (!ctx.session.adress) {
    ctx.session.isWaitingForAdress = true;
    await ctx.reply("Адрес🏠 доставки отсутсвует");
    await ctx.reply(
      "Введите ваш адрес доставки\n\nАдрес должен содержать:\n- город\n- улицу\n- номер дома (номер офиса / квартиры / помещения\n\nНапример: г.Калининград, ул.Брамса д.45, оф.1",
      {
        reply_markup: { remove_keyboard: true },
      }
    );
  } else {
    await ctx.reply(`Ваш адрес доставки: ${ctx.session.adress}`);
    ctx.session.isWaitingForAdress = false; //
  }
}
