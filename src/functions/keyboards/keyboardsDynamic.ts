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
        ctx.session.orders.length ? `(${ctx.session.orders.length})` : " "
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
          ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
        }`
      )
      .row()
      .text("Личный кабинет🔐")
      .text("Панель Админа🔐")
      .text(
        `Доставка🛵${
          ctx.session.orders.length ? `(${ctx.session.orders.length})` : " "
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

export const keyboardCap = async (ctx: MyContext) => {
  const keyboardCap02 = new Keyboard()
    .text("Добавить в Корзину🛍")
    .text(
      `Корзина🛒${
        ctx.session.cart.length ? `(${ctx.session.cart.length})` : " "
      }`
    )
    .row()
    .text("Каталог📕")
    .text("Главное меню🏡")
    .resized();
  return keyboardCap02;
};

export const keyboardAddToCart = async (ctx: MyContext) => {
  const keyboardAddToCart = new Keyboard()
    .text("1️⃣")
    .text("2️⃣")
    .text("3️⃣")
    .row()
    .text("Ввести свое количество")
    .row()
    .text("Каталог📕")
    .text("Главное меню🏡")
    .resized();
  return keyboardAddToCart;
};
