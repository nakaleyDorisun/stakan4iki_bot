
import { StakanchikAI } from "../../../stakanchikAI/stakanchikAI";
import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerPersonalDataChange(ctx: MyContext) {
  if (ctx.message?.text) {
    const message = ctx.message.text;
    const isWaitingForPhone = ctx.session.isWaitingForPhone;
    const isWaitingForAdress = ctx.session.isWaitingForAdress;
    const isPhoneCorrect = /^\+?[0-9\s\-\(\)]{6,}$/;
    const isAdressCorrect = message.length > 5;
    //если номер телефона введен неврено и бот ожидает ввод нового номера телефона и не ожидает ввод нового адреса
    if (
      !isPhoneCorrect.test(message) &&
      isWaitingForPhone &&
      !isWaitingForAdress
    ) {
      await ctx.reply(
        "Номер телефона должен состоять минимум из 6 цифр, введите корректный номер телефона",
        {
          reply_markup: { remove_keyboard: true },
        }
      );
      //return;
    } else if (!isAdressCorrect) {
      // если адресс доставки введен неверно и бот ожидает ввод нового адресса и не ожидает ввода нового телефона
      await ctx.reply(
        "Напишите более точный адрес, например: г.Калининград, ул.Брамса д.54",
        {
          reply_markup: { remove_keyboard: true },
        }
      );
    }
    if (
      isWaitingForPhone &&
      isPhoneCorrect.test(message) &&
      !isWaitingForAdress
    ) {
      ctx.session.phone = message;
      ctx.session.isWaitingForPhone = false;
      await ctx.reply(`Ваш телефона сохранен: ${ctx.session.phone}`);
      const keyboardAccount = await createSimpleReplyKeyboard(
        ctx,
        simpleKeyboards.KEYBOARD_ACCOUNT
      );
      if (keyboardAccount) {
        handleMenuSection(ctx, "Личный кабинет🔐", keyboardAccount, "account");
      } else {
        console.error(
          `Ошибка: Не удалось создать клавиатуру личного кабинета. keyboardAccount = ${keyboardAccount}`
        );
        await ctx.reply(
          "Произошла ошибка при загрузке личного кабинета. Попробуйте позже."
        );
      }
      return;
    } else if (isAdressCorrect) {
      ctx.session.adress = message;
      ctx.session.isWaitingForPhone = false;
      await ctx.reply(`Ваш адресс сохранен: ${ctx.session.adress}`);
      ctx.session.isWaitingForAdress = false;
      const keyboardAccount = await createSimpleReplyKeyboard(
        ctx,
        simpleKeyboards.KEYBOARD_ACCOUNT
      );
      if (keyboardAccount) {
        handleMenuSection(ctx, "Личный кабинет🔐", keyboardAccount, "account");
      } else {
        console.error(
          `Ошибка: Не удалось создать клавиатуру личного кабинета. keyboardAccount = ${keyboardAccount}`
        );
        await ctx.reply(
          "Произошла ошибка при загрузке личного кабинета. Попробуйте позже."
        );
      }
    }
  } else {
    await StakanchikAI(ctx);
  }
}
