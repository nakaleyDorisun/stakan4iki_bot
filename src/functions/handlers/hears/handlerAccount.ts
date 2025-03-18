import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerAccoutn(ctx: MyContext) {
  const firstName = ctx.from?.first_name;
  const id = ctx.from?.id;
  const keyboardAccount = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_ACCOUNT
  );
  if (keyboardAccount) {
    await handleMenuSection(
      ctx,
      "Личный кабинет🔐",
      keyboardAccount /*"account"*/
    );
    if (ctx.session.adress && ctx.session.phone) {
      await ctx.reply(
        `${firstName}\n\nВаш ID: ${id}\n\n☎️Ваш номер телефона: ${ctx.session.phone}\n\n🏠Ваш адресс доставки: ${ctx.session.adress}\n\nВы всегда можете изменить свои данные перейдя в соответвующие пункты меню:`
      );
    } else {
      await ctx.reply(
        `${firstName}\n\nпожалуйста, заполните адрес доставки и контактный номер телефона перейдя в соответвующие пункты меню:`
      );
    }
  } else {
    console.error(
      `Ошибка: Не удалось создать клавиатуру личного кабинета. keyboardAccount = ${keyboardAccount}`
    );
    await ctx.reply(
      "Произошла ошибка при загрузке личного кабинета. Попробуйте позже."
    );
  }
}
