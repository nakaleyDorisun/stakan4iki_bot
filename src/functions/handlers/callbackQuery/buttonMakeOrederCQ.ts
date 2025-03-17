import { bot } from "../../..";
import { MyContext } from "../../../types";
import {
  createReplyKeyboard,
  createSimpleReplyKeyboard,
} from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";
import { createInlineMenu } from "../../createFunctions/createInlineMenu";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";

export async function isNotRegisted(ctx: MyContext) {
  if (!ctx.session.phone || !ctx.session.adress) {
    if (!ctx.session.phone && !ctx.session.adress) {
      await ctx.reply(
        "Для оформления заказа необходимо указать телефон и адрес доставки\nВыберите соотвествующее меню и укажите свои данные."
      );
    } else if (!ctx.session.phone) {
      await ctx.reply("Для оформления заказа необходимо указать телефон.");
    } else if (!ctx.session.adress) {
      await ctx.reply(
        "Для оформления заказа необходимо указать адрес доставки."
      );
    }
    // Перенаправляем пользователя в личный кабинет
    const keyboard = await createSimpleReplyKeyboard(
      ctx,
      simpleKeyboards.KEYBOARD_ACCOUNT
    );
    if (keyboard) {
      await handleMenuSection(ctx, "Личный кабинет🔐", keyboard, "account");
    }
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
  const keyboardCart = await createReplyKeyboard(ctx, "keyboardCatalog");
  if (keyboardCart) {
    await handleMenuSection(
      ctx,
      `Корзина🛒${
        ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
      }`,
      keyboardCart,
      "cart"
    );
  } else {
    // Обработка случая, когда клавиатура не была создана
    console.error("Ошибка: Не удалось создать клавиатуру каталога.");
    await ctx.reply(
      "Произошла ошибка при загрузке каталога. Попробуйте позже."
    );
  }
  await createInlineMenu(ctx, "makeOrder");
}
