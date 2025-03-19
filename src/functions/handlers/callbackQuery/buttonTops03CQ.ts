import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { createInlineKeyboard } from "../../keyboards/createKeyboard";

export async function buttonTops03CQ(ctx: MyContext) {
  const imageURL =
  "https://www.foodinni.ru/upload/iblock/24d/ich_80fb_kryshka_dlya_bumazhnykh_stakanov_d_80_mm_chernaya_s_klapanom.jpg";
try {
  const menu = menus["button_tops03_click"];
  if (menu.callbackQuery) ctx.session.menuHistory.push(menu.callbackQuery);
  const keyboard = createInlineKeyboard(menu.buttons);
  await ctx.replyWithPhoto(imageURL, {
    caption: menu.text,
    reply_markup: keyboard,
  });
} catch (error) {
  await ctx.reply("Не удалось загрузить товар");
  console.error(error);
}
}
