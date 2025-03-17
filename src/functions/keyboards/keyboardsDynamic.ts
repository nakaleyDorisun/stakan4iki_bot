import { Keyboard } from "grammy";
import { MyContext } from "../../types";

export const keyboardMenu = async (ctx: MyContext) => {
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
};

export const keyboardMenuAdmin = async (ctx: MyContext) => {
  if (ctx.session.isAdmin) {
    const keyboardMenuAdmin = new Keyboard()
      .text("Каталог📕")
      .text(
        `Корзина🛒${
          ctx.session.cart.length ? `(${ctx.session.cart.length + 1})` : " "
        }`
      )
      .row()
      .text("Личный кабинет🔐")
      .text("Панель Админа🔐")
      .text(
        `Доставка🛵${
          ctx.session.orders.length ? `(${ctx.session.orders.length + 1})` : " "
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
};

export const keyboardCatalog = async (ctx: MyContext) => {
  const keyboardCatalog = new Keyboard()
    .text(
      `Корзина🛒${
        ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
      }`
    )
    .text("Главное меню🏡")
    .resized();
  return keyboardCatalog;
};
