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
      { text: "Панель Админа🔏", callback_data: "admin" },
      { text: "Информация📋", callback_data: "info" },
    ],
  },
  catalog: {
    text: "Выберите нужный вид товара для заказа:",
    callbackQuery: "catalog",
    buttons: [
      { text: "Стаканы🥤", callback_data: "allCaps" },
      { text: "Крышки☕️", callback_data: "allTops" },
      { text: "Прочее Товары", callback_data: "another_click" },
      // { text: "Корзина🛒", callback_data: "cart" },
      // { text: "Доставка🛵", callback_data: "delivery" },
      // { text: "Личный Кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  cart: {
    text: `Корзина`,
    callbackQuery: "cart",
    buttons: [
      { text: "Оформить заказ🛍", callback_data: "makeOrder" },
      { text: "Очистить корзину🛒", callback_data: "deleteItems" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  cartEmpty: {
    text: `Корзина`,
    callbackQuery: "cartEmpty",
    buttons: [
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  deleteItems: {
    text: `Очистить корзину`,
    callbackQuery: "deleteItems",
    buttons: [
      { text: "Да✅", callback_data: "confirmDelete" },
      { text: "Нет❌", callback_data: "cancelDelete" }, // cart
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  addToCart: {
    text: `Добавить в Корзину`,
    callbackQuery: "addToCart",
    buttons: [
      { text: "Оформить заказ🛍", callback_data: "makeOrder" },
      // { text: "Каталог📕", callback_data: "catalog" },
      // { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Корзина🛒 А ТЫ ПИДОР", callback_data: "cart" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  delivery: {
    text: "Доставка",
    callbackQuery: "delivery",
    buttons: [
      { text: "Каталог📕", callback_data: "catalog" },
      { text: "Корзина🛒", callback_data: "cart" },
      // { text: "Личный кабинет🔐", callback_data: "account" },
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
    text: "Адрес доставки",
    callbackQuery: "adress",
    buttons: [
      { text: "Изменить адрес⚙️", callback_data: "adressChange" },
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  adressEmpty: {
    text: "Адрес доставки не указан",
    callbackQuery: "adressEmpty",
    buttons: [
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" }, //
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  adressChange: {
    text: "Изменить адрес доставки",
    callbackQuery: "adressChange",
    buttons: [
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" }, //
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  phone: {
    text: "Контактный телефон",
    callbackQuery: "phone",
    buttons: [
      { text: "Изменить телефон⚙️", callback_data: "phoneChange" },
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" },
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  phoneEmpty: {
    text: "Адрес доставки не указан",
    callbackQuery: "phoneEmpty",
    buttons: [
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" }, //
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  phoneChange: {
    text: "Изменить контактный телефон",
    callbackQuery: "phoneChange",
    buttons: [
      { text: "Вернуться в Личный Кабинет🔐", callback_data: "account" }, //
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  info: {
    text: `Информация`,
    callbackQuery: "info",
    buttons: [{ text: "Главное Меню📒", callback_data: "menu" }],
  },
  admin: {
    text: "Панель админа",
    callbackQuery: "admin",
    buttons: [
      { text: "Редактировать Каталог📕", callback_data: "admin" }, //
      { text: "Список заказов🛒", callback_data: "admin" }, //
      { text: "Главное Меню📒", callback_data: "menu" },
    ],
  },
  noTAdmin: {
    text: "ВЫ НЕ АДМИН",
    callbackQuery: "not_admin",
    buttons: [{ text: "Главное Меню📒", callback_data: "menu" }],
  },
  makeOrder: {
    text: `Заказ оформлен`,
    callbackQuery: "makeOrder",
    buttons: [
      { text: "Доставка🛵", callback_data: "delivery" },
      { text: "Главное меню📝", callback_data: "menu" },
    ],
  },
  allCaps: {
    text: "Одноразовые стаканы для горячей продукции:\n\n📍0,2л 100 шт в упаковке ➡️ 200 рублей\n\n📍0,3л 100 шт в упаковке ➡️ 250 рублей\n\n📍0,4л 100 шт в упаковке ➡️ 350 рублей",
    callbackQuery: "allCaps",
    buttons: [
      { text: "0,2л (100 шт)", callback_data: "caps02" },
      { text: "0,3л (100 шт)", callback_data: "caps03" },
      { text: "0,4л (100 шт)", callback_data: "caps04" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  backToAllCaps: {
    text: "",
    callbackQuery: "backToAllCaps",
    buttons: [],
  },
  caps02: {
    text: "Стаканы 0,2л 100шт белые",
    price: 150,
    amount: 1,
    callbackQuery: "caps02",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllCaps" },
    ],
  },
  caps03: {
    text: "Стаканы 0,3л 100шт белые",
    price: 200,
    amount: 1,
    callbackQuery: "caps03",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllCaps" },
    ],
  },
  caps04: {
    text: "Стаканы 0,4л 100шт белые",
    price: 250,
    amount: 1,
    callbackQuery: "caps04",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllCaps" },
    ],
  },
  allTops: {
    text: "Крышки пластиковые с клапаном для стаканчиков:\n\n📍0,2л 100 шт в упаковке ➡️ 150 рублей\n\n📍0,3л 100 шт в упаковке ➡️ 200 рублей\n\n📍0,4л 100 шт в упаковке ➡️ 250 рублей",
    callbackQuery: "allCaps",
    buttons: [
      { text: "0,2л (100 шт)", callback_data: "tops02" },
      { text: "0,3л (100 шт)", callback_data: "tops03" },
      { text: "0,4л (100 шт)", callback_data: "tops04" },
      { text: "Корзина🛒", callback_data: "cart" },
      { text: "Вернуться в каталог📕", callback_data: "catalog" },
    ],
  },
  backToAllTops: {
    text: "",
    callbackQuery: "backToAllTops",
    buttons: [],
  },
  tops02: {
    text: "Крышки для стаканов 0,2л 100шт черные",
    price: 100,
    amount: 1,
    callbackQuery: "tops02",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllTops" },
    ],
  },
  tops03: {
    text: "Крышки для стаканов 0,3л 100шт черные",
    price: 150,
    amount: 1,
    callbackQuery: "tops03",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllTops" },
    ],
  },
  tops04: {
    text: "Крышки для стаканов 0,4л 100шт черные",
    price: 200,
    amount: 1,
    callbackQuery: "tops03",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "addToCart" },
      { text: "◀️Назад", callback_data: "backToAllTops" },
    ],
  },
  button_another_click: {
    text: "Раздел пока пуст",
    buttons: [
      { text: "Добавить в корзину🛍", callback_data: "button_addToCart_click" },
      { text: "◀️Назад", callback_data: "back" },
    ],
  },
};
