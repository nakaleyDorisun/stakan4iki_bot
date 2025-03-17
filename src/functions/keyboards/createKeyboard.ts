import { InlineKeyboard, Keyboard } from "grammy";
import { MyContext } from "../../types";

export function createInlineKeyboard(
  buttons: { text: string; callback_data: string }[]
) {
  const keyboard = new InlineKeyboard();
  buttons.forEach((button, index) => {
    if ((index + 1) % 2 === 0 && index < buttons.length - 1) {
      keyboard.text(button.text, button.callback_data).row();
    } else keyboard.text(button.text, button.callback_data);
  });
  return keyboard;
}

export async function createSimpleReplyKeyboard(
  ctx: MyContext,
  buttons: string[][]
) {
  const keyboard = new Keyboard();

  buttons.forEach((row) => {
    row.forEach((button) => {
      keyboard.text(button);
    });
    keyboard.row();
  });
  return keyboard.resized();
}

export async function createReplyKeyboard(
  ctx: MyContext,
  keyboardType: string
): Promise<Keyboard | undefined> {
  if (keyboardType === "keyboardMenu") {
    const keyboardMenu = new Keyboard()
      .text("Каталог📕")
      .text(
        `Корзина🛒${
          ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
        }`
      )
      .row()
      .text("Личный кабинет🔐")
      .text(
        `Доставка🛵${
          ctx.session.orders.length ? `(${ctx.session.orders.length + 1})` : " "
        }`
      )
      .row()
      .text("Информация📋")
      .resized();
    return keyboardMenu;
  }
  if (keyboardType === "keyboardMenuAdmin") {
    if (ctx.session.isAdmin) {
      const keyboardMenuAdmin = new Keyboard()
        .text("Каталог📕")
        .text(
          `Корзина🛒${
            ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
          }`
        )
        .row()
        .text("Личный кабинет🔐")
        .text("Панель Админа🔐")
        .text(
          `Доставка🛵${
            ctx.session.orders.length
              ? `(${ctx.session.orders.length + 1})`
              : " "
          }`
        )
        .row()
        .text("Информация📋")
        .resized();
      return keyboardMenuAdmin;
    } else {
      console.log("Кто-то пытается отрисовать клавиатуру меню админа");
      return;
    }
  }
  if (keyboardType === "keyboardCatalog") {
    const keyboardCatalog = new Keyboard()
      .text(
        `Корзина🛒${
          ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
        }`
      )
      .text("Главное меню🏡")
      .resized();
    return keyboardCatalog;
  }

  return undefined;
}
