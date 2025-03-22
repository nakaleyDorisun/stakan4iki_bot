import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";
import { resetInputFlags } from "./resetInputFlags";

export async function accountRender(ctx: MyContext) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(ctx.callbackQuery.message.message_id, "from accountRender");
    } /////////////////////////////////////////////////
    const menu = menus["account"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const firstName = ctx.from?.first_name;
    const id = ctx.from?.id;
    const isAdress = ctx.session.adress;
    const isPhone = ctx.session.phone;
    await resetInputFlags(ctx);
    if (keyboard) {
      if (isAdress && isPhone) {
        const message = await ctx.editMessageText(
          `${firstName}\n\nВаш ID: ${id}\n\n☎️Ваш номер телефона: ${ctx.session.phone}\n\n🏠Ваш адресс доставки: ${ctx.session.adress}\n\nВы всегда можете изменить свои данные перейдя в соответвующие пункты меню:`,
          { reply_markup: keyboard, parse_mode: "HTML" }
        );
      } else {
        const message = await ctx.editMessageText(
          `${firstName}\n\nпожалуйста, заполните адрес доставки и контактный номер телефона перейдя в соответвующие пункты меню:`,
          { reply_markup: keyboard, parse_mode: "HTML" }
        );
      }
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
