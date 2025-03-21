import { MyContext } from "../../types";
import { createInlineKeyboard } from "../keyboards/createKeyboard";
import { menus } from "../../menus/menus";

export async function caps04Render(ctx: MyContext) {
  try {
    const menu = menus["caps04"];
    const imgURL =
      "https://barista-spb.ru/components/com_jshopping/files/img_products/913_bumazhniy-stakan-200ml-white.jpg";

    if (ctx.chat?.id && ctx.callbackQuery?.message) {
      const chatID = ctx.chat.id;
      const messageID = ctx.callbackQuery.message.message_id;
      const keyboard = await createInlineKeyboard(menu.buttons);
      if (keyboard) {
        ctx.session.menuHistory.push("caps04");
        await ctx.api.editMessageMedia(
          chatID,
          messageID,
          { type: "photo", media: imgURL, caption: menu.text },
          {
            reply_markup: keyboard,
          }
        );
      } else {
        await ctx.reply("Произошла ошибка создания клавиатуры");
      }
    }
    await ctx.answerCallbackQuery();
  } catch (error) {
    console.error(error);
  }
}
