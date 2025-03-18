import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { keyboardCap } from "../../keyboards/keyboardsDynamic";

export async function buttonCap04CQ(ctx: MyContext) {
  const imageURL =
    "https://barista-spb.ru/components/com_jshopping/files/img_products/2787.jpg";
  try {
    const menu = menus["button_caps04_click"];
    if (menu.callbackQuery) ctx.session.menuHistory.push(menu.callbackQuery);
    const keyboard = await keyboardCap(ctx);
    await ctx.replyWithPhoto(imageURL, {
      caption: menu.text,
      reply_markup: keyboard,
    });
  } catch (error) {
    await ctx.reply("Не удалось загрузить товар");
    console.error(error);
  }
}
