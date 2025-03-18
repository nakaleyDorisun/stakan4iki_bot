import { StakanchikAI } from "../../../stakanchikAI/stakanchikAI";
import { MyContext } from "../../../types";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function _handlerPersonalDataChange(ctx: MyContext) {
  const message = ctx.message?.text ? ctx.message.text : "";
  const isWaitingForPhone = ctx.session.isWaitingForPhone;
  const isWaitingForAdress = ctx.session.isWaitingForAdress;
  const isPhoneCorrect = /^\+?[0-9\s\-\(\)]{6,}$/;
  const isAdressCorrect = message.length > 10;
  const keyboard = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_ACCOUNT
  );

  if (isWaitingForPhone || isWaitingForAdress) {
    if (isWaitingForPhone && !isWaitingForAdress) {
      if (isPhoneCorrect && message) {
        ctx.session.phone = ctx.message?.text;
        ctx.session.isWaitingForPhone = false;
        ctx.reply(`Вы установили телефон: ${ctx.session.phone}`, {
          reply_markup: keyboard,
        });
      } else {
        ctx.reply(`Введите корректный номер телефона`);
      }
    } else {
      if (isAdressCorrect && message) {
        ctx.session.adress = ctx.message?.text;
        ctx.session.isWaitingForAdress = false;
        ctx.reply(`Вы установили адрес: ${ctx.session.adress}`, {
          reply_markup: keyboard,
        });
      } else {
        ctx.reply(`Введите корректный адрес доставки`);
      }
    }
  } else {
    await StakanchikAI(ctx);
  }
}
