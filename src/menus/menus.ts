import { IMenus } from "../types";

export const menus: IMenus = {
  menu: {
    text: "Вы находитесь в главном меню **Стаканчик Бота**, вы можете оформить заказ на доставку или самовывоз \n\nДля оформления заказа перейдите в \nКаталог📕 \n\nСтатус вашего заказа можно отслеживать в разделе \nДоставка🛵 \n\nДля оформления доставки необходимо указать адресс и контактный телефон в разделе \nЛичный кабинет🔐",
    callbackQuery: "menu",
    buttons: [],
  },
  cart: {
    text: `Корзина`,
    callbackQuery: "cart",
    buttons: [{ text: "Оформить заказ🛍", callback_data: "makeOrder" }],
  },
  cartItem: {
    text: `cartItem`,
    callbackQuery: "cartItem",
    buttons: [{ text: "Очистить карзину", callback_data: "deleteItems" }],
  },
  delivery: {
    text: "Доставка",
    callbackQuery: "delivery",
    buttons: [],
  },
  info: {
    text: `Информация Информация Информация Информация Информация Информация Информация Информация Информация`,
    callbackQuery: "info",
    buttons: [],
  },
  makeOrder: {
    text: `Заказ оформлен`,
    callbackQuery: "makeOrder",
    buttons: [
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Главное меню📝", callback_data: "menu" },
    ],
  },
  catalog: {
    text: "Выберите нужный вид товара для заказа:",
    callbackQuery: "catalog",
    buttons: [
      { text: "Стаканы 🥤", callback_data: "button_allCaps_click" },
      { text: "Крышки☕️", callback_data: "button_allTops_click" },
      { text: "Прочее товары", callback_data: "button_another_click" },
    ],
  },
  account: {
    text: "Личный кабинет",
    callbackQuery: "account",
    buttons: [],
  },
  adress: {
    text: "Хотите изменить ваш адрес доставки?",
    callbackQuery: "adress",
    buttons: [],
  },
  phone: {
    text: "Хотите изменить ваш номер телефона?",
    callbackQuery: "phone",
    buttons: [],
  },
  admin: {
    text: "Панель админа",
    callbackQuery: "admin",
    buttons: [],
  },
  button_allCaps_click: {
    text: "Одноразовые стаканы для горячей продукции: \n0,2л 100 шт в упаковке - 200 рублей\n0,3л 100 шт в упаковке - 250 рублей\n0,4л 100 шт в упаковке - 350 рублей",
    callbackQuery: "button_allCaps_click",
    buttons: [
      { text: "0,2л 100 шт", callback_data: "button_caps02_click" },
      { text: "0,3л 100 шт", callback_data: "button_caps03_click" },
      { text: "0,4л 100 шт", callback_data: "button_caps04_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_caps02_click: {
    text: "Стаканы 0,2л - упаковка 100шт. Белые, без рисунка",
    price: 150,
    callbackQuery: "button_caps02_click",
    buttons: [
      // { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      // { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      // { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_caps03_click: {
    text: "Стаканы 0,3л - упаковка 100шт. Белые, без рисунка",
    price: 200,
    callbackQuery: "button_caps03_click",
    buttons: [
      // { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      // { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      // { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_caps04_click: {
    text: "Стаканы 0,4л - упаковка 100шт. Белые, без рисунка",
    price: 250,
    callbackQuery: "button_caps03_click",
    buttons: [
      // { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      // { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      // { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_allTops_click: {
    text: "Крышки пластиковые для одноразовых стаканов",
    callbackQuery: "button_allTops_click",
    buttons: [
      { text: "0,2л 100 шт", callback_data: "button_tops02_click" },
      { text: "0,3л 100 шт", callback_data: "button_tops03_click" },
      { text: "0,4л 100 шт", callback_data: "button_tops04_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_tops02_click: {
    text: "Крышки для стаканов 0,2л 100шт черные",
    price: 100,
    callbackQuery: "button_tops02_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_tops03_click: {
    text: "Крышки для стаканов 0,3л 100шт черные",
    price: 150,
    callbackQuery: "button_tops03_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_tops04_click: {
    text: "Крышки для стаканов 0,4л 100шт черные",
    price: 200,
    callbackQuery: "button_tops04_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_another_click: {
    text: "Раздел пока пуст",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
};
