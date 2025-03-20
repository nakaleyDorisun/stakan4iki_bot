import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";
import { adressEmptyRender } from "./adressEmptyRender";

export async function adressRender(ctx: MyContext, userID?: number) {
  try {
    const menu = menus["adress"];
    const keyboard = await createInlineKeyboard(menu.buttons);
    const adress = ctx.session.adress;
    if (adress) {
      const message = `Ваш адрес доставки: ${adress}\n\nВы можете изменить адрес доставки нажав кнопку "Изменить адрес⚙️"`;
      if (keyboard) {
        ctx.session.menuHistory.push("adress");
        await ctx.editMessageText(message, {
          reply_markup: keyboard,
          parse_mode: "HTML",
        });
      } else {
        await ctx.reply("Произошла ошибка создания клавиатуры");
      }
    } else {
      ctx.session.menuHistory.push("adress");
      ctx.session.isWaitingForAdress = true;
      await adressEmptyRender(ctx);
    }
  } catch (error) {
    console.error(error);
  }
}
