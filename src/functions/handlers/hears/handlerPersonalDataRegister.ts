import { menus } from "../../../menus/menus";
import { StakanchikAI } from "../../../stakanchikAI/stakanchikAI";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function handlerPersonalDataRegister(ctx: MyContext) {
  const chatID = ctx.chat?.id;
  const messageID = ctx.message?.message_id;
  const menuAdress = menus["adress"];
  const menuPhone = menus["phone"];
  const message = ctx.message?.text ? ctx.message.text : "";

  const isWaitingForPhone = ctx.session.isWaitingForPhone;
  const isWaitingForAdress = ctx.session.isWaitingForAdress;
  const isWaitingForPhoneChange = ctx.session.isWaitingForPhoneChange;
  const isWaitingForAdressChange = ctx.session.isWaitingForAdressChange;
  const isPhoneCorrect = /^\+?[0-9\s\-\(\)]{6,}$/;
  const isAdressCorrect = message.length > 10;
  const keyboardAdress = await createInlineKeyboard(menuAdress.buttons);
  const keyboardPhone = await createInlineKeyboard(menuPhone.buttons);

  if (isWaitingForPhone || isWaitingForAdress) {
    if (isWaitingForPhone && !isWaitingForAdress) {
      if (isPhoneCorrect && message && chatID && messageID) {
        ctx.session.phone = ctx.message?.text;
        ctx.session.isWaitingForPhone = false;
        await ctx.deleteMessage();
        await ctx.reply(`Вы установили телефон: ${ctx.session.phone}`, {
          reply_markup: keyboardPhone,
        });
      } else {
        await ctx.deleteMessage();
        await ctx.reply(`Введите корректный номер телефона`);
      }
    } else {
      if (isAdressCorrect && message) {
        ctx.session.adress = ctx.message?.text;
        ctx.session.isWaitingForAdress = false;
        await ctx.deleteMessage();
        await ctx.reply(`Вы установили адрес: ${ctx.session.adress}`, {
          reply_markup: keyboardAdress,
        });
      } else {
        await ctx.deleteMessage();
        await ctx.reply(`Введите корректный адрес доставки`);
      }
    }
  } else {
    if (isWaitingForPhoneChange || isWaitingForAdressChange) {
      if (isWaitingForPhoneChange && !isWaitingForAdressChange) {
        if (isPhoneCorrect && message) {
          ctx.session.phone = ctx.message?.text;
          ctx.session.isWaitingForPhoneChange = false;
          await ctx.deleteMessage();
          await ctx.reply(`Вы изменили телефон на: ${ctx.session.phone}`, {
            reply_markup: keyboardPhone,
          });
        } else {
          await ctx.deleteMessage();
          await ctx.reply(`Введите корректный номер телефона`);
        }
      } else {
        if (isAdressCorrect && message) {
          ctx.session.adress = ctx.message?.text;
          ctx.session.isWaitingForAdressChange = false;
          await ctx.deleteMessage();
          await ctx.reply(`Вы изменили адрес на: ${ctx.session.adress}`, {
            reply_markup: keyboardAdress,
          });
        } else {
          await ctx.deleteMessage();
          await ctx.reply(`Введите корректный адрес доставки`);
        }
      }
    }
  }
  await StakanchikAI(ctx);
}
