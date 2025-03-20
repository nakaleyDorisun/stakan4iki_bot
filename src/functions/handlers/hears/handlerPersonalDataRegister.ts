import { menus } from "../../../menus/menus";
import { StakanchikAI } from "../../../stakanchikAI/stakanchikAI";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function handlerPersonalDataRegister(ctx: MyContext) {
  const chatID = ctx.chat?.id;
  console.log(ctx.session.messageId, "ctx.session.messageId");
  const menuAdress = menus["adress"];
  const menuPhone = menus["phone"];
  const messageInput = ctx.message?.text ? ctx.message.text : "";
  const isWaitingForPhone = ctx.session.isWaitingForPhone;
  const isWaitingForAdress = ctx.session.isWaitingForAdress;
  const isWaitingForPhoneChange = ctx.session.isWaitingForPhoneChange;
  const isWaitingForAdressChange = ctx.session.isWaitingForAdressChange;
  const isPhoneCorrect = /^\+?[0-9\s\-\(\)]{6,}$/;
  const isAdressCorrect = messageInput.length > 10;
  const keyboardAdress = await createInlineKeyboard(menuAdress.buttons);
  const keyboardPhone = await createInlineKeyboard(menuPhone.buttons);

  if (isWaitingForPhone || isWaitingForAdress) {
    if (isWaitingForPhone && !isWaitingForAdress) {
      if (isPhoneCorrect.test(messageInput)) {
        ctx.session.phone = messageInput;
        ctx.session.isWaitingForPhone = false;
        const message = await ctx.reply(
          `Вы установили телефон: ${ctx.session.phone}`,
          {
            reply_markup: keyboardPhone,
          }
        );
        await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
        ctx.session.messageId = message.message_id;
        console.log(ctx.session.messageId, "Вы установили телефон:");
      } else {
        const message = await ctx.reply(
          `❗️Ошибка ввода номера телефона\n\nВведите корректный номер телефона\n\nНомер  можно вводить в любом формате, миним 6 цифр, например\n\n89123123123 | +79123123123 | +7-912-312-31-13`
        );

        console.log(ctx.session.messageId, "Ошибка номера телефона");
        await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
        ctx.session.messageId = message.message_id;
      }
    } else {
      if (isAdressCorrect && messageInput) {
        ctx.session.adress = ctx.message?.text;
        ctx.session.isWaitingForAdress = false;
        const message = await ctx.reply(
          `Вы установили адрес: ${ctx.session.adress}`,
          {
            reply_markup: keyboardAdress,
          }
        );
        await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
        ctx.session.messageId = message.message_id;
        console.log(ctx.session.messageId, "Вы установили адрес:");
      } else {
        const message = await ctx.reply(
          `❗️Ошибка ввода адреса доставки\n\nВведите корректный адрес доставки\n\nАдрес должен содержать:\n📍Город\n📍 Улицу\n📍Номер дома (номер офиса / квартиры / помещения)\n\nНапример: г.Калининград, ул.Брамса д.45, оф.1`
        );
        await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
        ctx.session.messageId = message.message_id;
        console.log(ctx.session.messageId, "Ошибка ввода адреса доставки");
      }
    }
  } else {
    if (isWaitingForPhoneChange || isWaitingForAdressChange) {
      if (isWaitingForPhoneChange && !isWaitingForAdressChange) {
        if (isPhoneCorrect && messageInput) {
          ctx.session.phone = ctx.message?.text;
          ctx.session.isWaitingForPhoneChange = false;
          const message = await ctx.reply(
            `Вы изменили телефон на: ${ctx.session.phone}`,
            {
              reply_markup: keyboardPhone,
            }
          );
          await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
          ctx.session.messageId = message.message_id;
        } else {
          const message = await ctx.reply(`Введите корректный номер телефона`);
          ctx.session.messageId = message.message_id;
          await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
        }
      } else {
        if (isAdressCorrect && messageInput) {
          ctx.session.adress = ctx.message?.text;
          ctx.session.isWaitingForAdressChange = false;
          const message = await ctx.reply(
            `Вы изменили адрес на: ${ctx.session.adress}`,
            {
              reply_markup: keyboardAdress,
            }
          );
          await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
          ctx.session.messageId = message.message_id;
        } else {
          const message = await ctx.reply(
            `❗️Ошибка ввода адреса доставки\n\nВведите корректный адрес доставки\n\nАдрес должен содержать:\n📍Город\n📍 Улицу\n📍Номер дома (номер офиса / квартиры / помещения)\n\nНапример: г.Калининград, ул.Брамса д.45, оф.1`
          );
          await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
          ctx.session.messageId = message.message_id;
        }
      }
    }
  }
  await StakanchikAI(ctx);
}
