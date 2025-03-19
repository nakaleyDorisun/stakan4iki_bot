import { IMenus } from "../types";

export const menus: IMenus = {
  launch: {
    text: "Добро пожаловать в Стаканчик Бот\nЯ удобное приложение для заказа одноразовых стаканчиков Калининградского производства🙃",
    callbackQuery: "launch",
    buttons: [{ text: "Запустить Магазин🛍", callback_data: "menu" }],
  },
  menu: {
    text: `Вы находитесь в главном меню **Стаканчик Бота**, вы можете оформить заказ на доставку или самовывоз \n\n📍Для оформления заказа перейдите в \n\nКаталог📕\n\n📍Статус вашего заказа можно \nотслеживать в разделе \n\nДоставка🛵\n\n❕Для оформления доставки необходимо указать адрес и контактный телефон в разделе\n\nЛичный кабинет🔐\nВы всегда можете отредактировать свои данные в Личном кабинете\n\nНажмите [здесь](tg://user?id=${process.env.ADMIN_ID}), чтобы связаться с оператором`,
    callbackQuery: "menu",
    buttons: [
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Личный Кабинет🔐", callback_data: "account" },
      { text: "Информация📋", callback_data: "info" },
    ],
  },
  menuAdmin: {
    text: `Вы находитесь в главном меню **Стаканчик Бота**, вы можете оформить заказ на доставку или самовывоз \n\n📍Для оформления заказа перейдите в \n\nКаталог📕\n\n📍Статус вашего заказа можно \nотслеживать в разделе \n\nДоставка🛵\n\n❕Для оформления доставки необходимо указать адрес и контактный телефон в разделе\n\nЛичный кабинет🔐\nВы всегда можете отредактировать свои данные в Личном кабинете\n\nНажмите [здесь](tg://user?id=${process.env.ADMIN_ID}), чтобы связаться с оператором`,
    callbackQuery: "menuAdmin",
    buttons: [
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Личный Кабинет🔐", callback_data: "account" },
      { text: "Панель Админа🔏", callback_data: "account" },
      { text: "Информация📋", callback_data: "admin" },
    ],
  },
  catalog: {
    text: "Выберите нужный вид товара для заказа:",
    callbackQuery: "catalog",
    buttons: [
      { text: "Стаканы 🥤", callback_data: "button_allCaps_click" },
      { text: "Крышки☕️", callback_data: "button_allTops_click" },
      { text: "Прочее Товары", callback_data: "button_another_click" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Личный Кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  cart: {
    text: `Корзина`,
    callbackQuery: "cart",
    buttons: [
      { text: "Оформить заказ🛍", callback_data: "makeOrder" },
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Личный кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  cartItem: {
    text: `cartItem`,
    callbackQuery: "cartItem",
    buttons: [{ text: "Очистить карзину", callback_data: "deleteItems" }],
  },
  delivery: {
    text: "Доставка",
    callbackQuery: "delivery",
    buttons: [
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Личный кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  account: {
    text: "Личный кабинет",
    callbackQuery: "account",
    buttons: [
      { text: "Адрес🏠", callback_data: "adress" },
      { text: "Телефон☎️", callback_data: "phone" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
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
    text: "Стаканы 0,2л 100шт белые",
    price: 150,
    amount: 1,
    callbackQuery: "button_caps02_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_caps03_click: {
    text: "Стаканы 0,3л 100шт белые",
    price: 200,
    amount: 1,
    callbackQuery: "button_caps03_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_caps04_click: {
    text: "Стаканы 0,4л 100шт белые",
    price: 250,
    amount: 1,
    callbackQuery: "button_caps03_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все стаканы🥤", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
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
    amount: 1,
    callbackQuery: "button_tops02_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки☕️", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_tops03_click: {
    text: "Крышки для стаканов 0,3л 100шт черные",
    price: 150,
    amount: 1,
    callbackQuery: "button_tops03_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки☕️", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  button_tops04_click: {
    text: "Крышки для стаканов 0,4л 100шт черные",
    price: 200,
    amount: 1,
    callbackQuery: "button_tops04_click",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "Все крышки☕️", callback_data: "button_allTops_click" },
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
