import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";
import { phoneEmptyRender } from "./phoneEmptyRender";

export async function phoneRender(ctx: MyContext) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(ctx.callbackQuery.message.message_id, "from phoneRender");
    } /////////////////////////////////////////////////
    const menu = menus["phone"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const phone = ctx.session.phone;
    if (phone) {
      const message = `Ваш контактный номер телефона: ${phone}\n\nВы можете изменить номер телефона нажав кнопку "Изменить телефон⚙️"`;
      if (keyboard) {
        ctx.session.menuHistory.push("phone");
        await ctx.editMessageText(message, {
          reply_markup: keyboard,
          parse_mode: "HTML",
        });
      } else {
        await ctx.reply("Произошла ошибка создания клавиатуры");
      }
    } else {
      ctx.session.menuHistory.push("phone");
      ctx.session.isWaitingForPhone = true;
      await phoneEmptyRender(ctx);
    }
  } catch (error) {
    console.error(error);
  }
}
