import dotenv from "dotenv";
import { Bot, MemorySessionStorage, session, Keyboard } from "grammy";
import { MyContext, SessionData } from "./types";
import { handlerHearExport } from "./functions/handlers/hears/_handlerHearExport";
import { handlerCallBackQuery } from "./functions/handlers/callbackQuery/_buttonExportCQ";
import { startCommand } from "./functions/handlers/commands/startCommand";
import { createInlineMenu } from "./functions/createFunctions/createInlineMenu";

dotenv.config();
const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  console.error(
    "Ошибка: BOT_TOKEN не найден в переменных окружения. Бот не может быть запущен."
  );
  process.exit(1);
}

export const bot = new Bot<MyContext>(botToken as string);

bot.use(
  session({
    initial: (): SessionData => ({
      menuHistory: [],
      keyboardHistory: [],
      cart: [],
      orders: [],
      phone: null,
      adress: null,
      totalRub: 0,
      isWaitingForAdress: false,
      isWaitingForPhone: false,
      isWaitingForAdressChange: false,
      isWaitingForPhoneChange: false,
      isAdmin: false,
    }),
    storage: new MemorySessionStorage(),
  })
);

// запуск первого сообщения которое имеет кнопку "Запустить магазин", "menu"
bot.command("start", startCommand);

//Слушатели Reply кнопок
bot.hears("Главное меню🏡", handlerHearExport.handlerMainMenu);

bot.hears("Каталог📕", handlerHearExport.handlerCatalog);

bot.hears(/Корзина(\((\d+)\)|\s*)/, handlerHearExport.handlerCart);

bot.hears("Личный кабинет🔐", handlerHearExport.handlerAccoutn);

bot.hears("Адрес🏠", handlerHearExport.handlerAdress);

bot.hears("Изменить адрес⚙️", handlerHearExport.handlerChangeAdress);

bot.hears("Телефон☎️", handlerHearExport.handlerPhone);

bot.hears("Изменить телефон⚙️", handlerHearExport.handlerChangePhone);

bot.hears("Доставка🛵", handlerHearExport.handlerDelivery);

bot.hears("Информация📋", handlerHearExport.handlerInfo);

bot.hears("Панель Админа🔐", handlerHearExport.handlerAdminPanel);

bot.hears("Назад", handlerHearExport.handlerBackButton);

// Слушатель ввода/замены адреса и телефона
bot.on("message:text", handlerHearExport.handlerPersonalDataRegister);

// Слушатель инлайн кнопки меню
bot.callbackQuery("menu", handlerCallBackQuery.buttonMenuCQ);

// Раздел каталога все стаканчики с заменой меню
bot.callbackQuery("button_allCaps_click", handlerCallBackQuery.buttonAllCapsCQ);

// Раздел каталога все крышки с заменой меню
bot.callbackQuery("button_allTops_click", handlerCallBackQuery.buttonAllTopsCQ);

//Инлайн кнопка добавить в корзину
bot.callbackQuery(
  "button_addToCart_click",
  handlerCallBackQuery.buttonAddToCartCQ
);

//Инлайн кнопка очистить карзину
bot.callbackQuery("deleteItems", handlerCallBackQuery.buttonDeleteItemsCQ);

//Инлайн кнопка подтвердить очистку корзину
bot.callbackQuery("confirmDelete", handlerCallBackQuery.buttonConfirmDeleteCQ);

//Инлайн кнопка отменить очистку корзину
bot.callbackQuery("cancelDelete", handlerCallBackQuery.buttonCancelDeleteCQ);

// ФУНКЦИОНАЛ КНОПКИ ОФОРМИТЬ ЗАКАЗ + проверка регистрации
bot.callbackQuery("makeOrder", handlerCallBackQuery.buttonMakeOrederCQ);

////Инлайн кнопка назад
bot.callbackQuery("back_to_menu", handlerCallBackQuery.buttonBackToMenuCQ);

bot.callbackQuery("button_caps02_click", handlerCallBackQuery.buttonCap02CQ);

bot.callbackQuery("button_caps03_click", handlerCallBackQuery.buttonCap03CQ);

bot.callbackQuery("button_caps04_click", handlerCallBackQuery.buttonCap04CQ);

bot.callbackQuery("button_tops02_click", handlerCallBackQuery.buttonTops02CQ);

bot.callbackQuery("button_tops03_click", handlerCallBackQuery.buttonTops03CQ);

bot.callbackQuery("button_tops04_click", handlerCallBackQuery.buttonTops04CQ);

//Другие инлайн кнопки
bot.on("callback_query", async (ctx) => {
  const action = ctx.callbackQuery.data;
  if (
    action &&
    action !== "menu" &&
    action !== "back_to_menu" &&
    action !== "cart" &&
    action !== "makeOrder" &&
    action !== "deleteItems"
  ) {
    // Проверка callback_data
    ctx.session.menuHistory.push(action);
    await createInlineMenu(ctx, action);
  }
});

bot.start();

console.log("Бот запущен...");

process.on("SIGINT", () => {
  console.log("Бот завершает работу...");
  bot.stop();
  process.exit();
});

process.on("SIGTERM", () => {
  console.log("Бот завершает работу...");
  bot.stop();
  process.exit();
});
