import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { keyboardCap02 } from "../../keyboards/keyboardsDynamic";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function buttonCap02CQ(ctx: MyContext) {
  const imageURL =
    "https://barista-spb.ru/components/com_jshopping/files/img_products/2787.jpg";
  try {
    const menu = menus["button_caps02_click"];
    if (menu.callbackQuery) ctx.session.menuHistory.push(menu.callbackQuery);
    const keyboard = await keyboardCap02(ctx);
    await ctx.replyWithPhoto(imageURL, {
      caption: menu.text,
      reply_markup: keyboard,
    });
  } catch (error) {
    await ctx.reply("Не удалось загрузить товар");
    console.error(error);
  }
}
