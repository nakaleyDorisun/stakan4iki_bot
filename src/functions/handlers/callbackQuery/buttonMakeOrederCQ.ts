import { bot } from "../../..";
import { MyContext } from "../../../types";
import {
  createInlineKeyboard,
  createReplyKeyboard,
} from "../../keyboards/createKeyboard";
import { createInlineMenu } from "../../createFunctions/createInlineMenu";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { accountRender } from "../../menu-renders/accountRender";
import { menus } from "../../../menus/menus";

export async function isNotRegisted(ctx: MyContext) {
  // const chatID = ctx.chat?.id;
  const menu = menus["account"];
  const keyboard = await createInlineKeyboard(menu.buttons);
  if (!ctx.session.phone || !ctx.session.adress) {
    if (!ctx.session.phone && !ctx.session.adress) {
      const message = await ctx.editMessageText(
        "Для оформления заказа необходимо указать телефон и адрес доставки\nВыберите соотвествующее меню и укажите свои данные.",
        { reply_markup: keyboard }
      );
      // ctx.session.messageId = message.message_id;
    } else if (!ctx.session.phone) {
      const message = await ctx.editMessageText(
        "Для оформления заказа необходимо указать телефон.",
        { reply_markup: keyboard }
      );
      // ctx.session.messageId = message.message_id;
    } else if (!ctx.session.adress) {
      const message = await ctx.editMessageText(
        "Для оформления заказа необходимо указать адрес доставки.",
        { reply_markup: keyboard }
      );
      // ctx.session.messageId = message.message_id;
    }
    // Перенаправляем пользователя в личный кабинет
    // await accountRender(ctx);
    // setTimeout(async () => {
    //   await ctx.api.deleteMessage(chatID as number, ctx.session.messageId);
    // }, 1000);

    return true; // Пользователь не зарегистрирован
  }
  return false; // Пользователь зарегистрирован
}

export async function buttonMakeOrederCQ(ctx: MyContext) {
  if (await isNotRegisted(ctx)) {
    return;
  }
  if (ctx.session.cart.length < 1) {
    await ctx.reply(`Чтобы оформить заказа добавьте хотя бы 1 товар: `);
    await createInlineMenu(ctx, "catalog");
    return;
  }
  if (ctx.callbackQuery) {
    let userId = ctx.callbackQuery.from.id;
    const orderId = Date.now().toString(16);
    const orderTime = Date.now().toString();

    const messageOrderToAdmin = `
📦 Новый заказ от пользователя ${userId}:
${ctx.session.cart
  .map((e, i) => `${i + 1}. ${e.name} x${e.amounth} - ${e.price * e.amounth}₽`)
  .join("\n")}
Итого: ${ctx.session.totalRub}₽

📞 Телефон: ${ctx.session.phone}
🏠 Адрес: ${ctx.session.adress}
Номер заказ: ${orderId}
`;
    const messageOrderToUser = `
📦 Ваш заказ офорлен:
${ctx.session.cart
  .map((e, i) => `${i + 1}. ${e.name} x${e.amounth} - ${e.price * e.amounth}₽`)
  .join("\n")}
Итого: ${ctx.session.totalRub}₽
Номер заказ: ${orderId}
`;
    const orderText = `
📦 Ваш заказ:
${ctx.session.cart
  .map((e, i) => `${i + 1}. ${e.name} x${e.amounth} - ${e.price * e.amounth}₽`)
  .join("\n")}
Итого: ${ctx.session.totalRub}₽
Номер заказ: ${orderId}
Дата заказа: ${orderTime}
Статус: <в разработке>
`;

    ctx.session.orders.push({ id: orderId, text: orderText, date: orderTime });
    await bot.api.sendMessage(userId, messageOrderToUser);
    const adminId = process.env.ADMIN_ID;

    if (adminId) {
      try {
        await bot.api.sendMessage(adminId, messageOrderToAdmin);
      } catch (error) {
        console.error(
          "Ошибка при отправке уведомления администратору о заказе:",
          error
        );
      }
    } else {
      console.error(
        "Ошибка: ADMIN_ID не найден в переменных окружения. Уведомление администратору не отправлено."
      );
      await ctx.reply(
        "Произошла ошибка при отправке уведомления о заказе администратору."
      );
    }
  }

  ctx.session.cart = []; // очищаем корзину
  ctx.session.totalRub = 0; // очищаем тотал прайс
  const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
  if (keyboardCatalog) {
    await handleMenuSection(ctx, "Каталог📕", keyboardCatalog, "catalog");
  } else {
    // Обработка случая, когда клавиатура не была создана
    console.error("Ошибка: Не удалось создать клавиатуру каталога.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
  await createInlineMenu(ctx, "makeOrder");
}
