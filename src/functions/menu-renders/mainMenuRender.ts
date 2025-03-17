import { MyContext } from "../../types";
import { createReplyKeyboard } from "../keyboards/createKeyboard";
import { isAdmin } from "../admin/isAdmin";

export async function mainMenuRender(ctx: MyContext, userID?: number) {
  if (userID) {
    await isAdmin(ctx, userID);
  }
  try {
    const keyboardMenu = await createReplyKeyboard(ctx, "keyboardMenu");
    const keyboardMenuAdmin = await createReplyKeyboard(
      ctx,
      "keyboardMenuAdmin"
    );
    const isAdminFlag = ctx.session.isAdmin;
    const message =
      "Вы находитесь в главном меню <b>Стаканчик Бота</b>, вы можете оформить заказ на доставку или самовывоз \n\n📍Для оформления заказа перейдите в Каталог📕\n\n📍Статус вашего заказа можно \nотслеживать в разделе Доставка🛵\n\n❕Для оформления доставки необходимо указать адрес и контактный телефон в разделе Личный кабинет🔐";

    if (keyboardMenuAdmin && isAdminFlag && keyboardMenu) {
      ctx.session.keyboardHistory.push(keyboardMenuAdmin);
      ctx.session.menuHistory.push("menu");
      await ctx.reply(message, {
        reply_markup: keyboardMenuAdmin,
        parse_mode: "HTML",
      });
    } else if (keyboardMenu) {
      ctx.session.keyboardHistory.push(keyboardMenu);
      ctx.session.menuHistory.push("menu");
      await ctx.reply(message, {
        reply_markup: keyboardMenu,
        parse_mode: "HTML",
      });
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.log(error);
  }
}
