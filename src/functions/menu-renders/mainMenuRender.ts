import { MyContext } from "../../types";
import { createReplyKeyboard } from "../keyboards/createKeyboard";
import { isAdmin } from "../admin/isAdmin";
import { keyboardMenu } from "../keyboards/keyboardsDynamic";

export async function mainMenuRender(ctx: MyContext, userID?: number) {
  if (userID) {
    await isAdmin(ctx, userID);
  }
  try {
    // const keyboardMenu = await createReplyKeyboard(ctx, "keyboardMenu"); //все keyboardMenu поменял на keyboard
    const keyboard = await keyboardMenu(ctx);
    const keyboardMenuAdmin = await createReplyKeyboard(
      ctx,
      "keyboardMenuAdmin"
    );
    const isAdminFlag = ctx.session.isAdmin;
    const messageMainMenu = `Вы находитесь в главном меню **Стаканчик Бота**, вы можете оформить заказ на доставку или самовывоз \n\n📍Для оформления заказа перейдите в \n\nКаталог📕\n\n📍Статус вашего заказа можно \nотслеживать в разделе \n\nДоставка🛵\n\n❕Для оформления доставки необходимо указать адрес и контактный телефон в разделе\n\nЛичный кабинет🔐\nВы всегда можете отредактировать свои данные в Личном кабинете\n\nНажмите [здесь](tg://user?id=${process.env.ADMIN_ID}), чтобы связаться с оператором`;

    if (keyboardMenuAdmin && isAdminFlag && keyboard && ctx.chat) {
      ctx.session.keyboardHistory.push(keyboardMenuAdmin);
      ctx.session.menuHistory.push("menu");
      await ctx.reply(messageMainMenu, {
        reply_markup: keyboardMenuAdmin,
        parse_mode: "MarkdownV2",
      });
    } else if (keyboard) {
      ctx.session.keyboardHistory.push(keyboard);
      ctx.session.menuHistory.push("menu");
      await ctx.reply(messageMainMenu, {
        reply_markup: keyboard,
        parse_mode: "MarkdownV2",
      });
    } else {
      await ctx.reply("Произошла ошибка создания клавиатуры");
    }
  } catch (error) {
    console.error(error);
  }
}
