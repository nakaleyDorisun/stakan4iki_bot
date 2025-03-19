import dotenv from "dotenv";
import {
  Bot,
  MemorySessionStorage,
  session,
  GrammyError,
  HttpError,
} from "grammy";
import { MyContext, SessionData } from "./types";
import { handlerHearExport } from "./functions/handlers/hears/_handlerHearExport";
import { handlerCallBackQuery } from "./functions/handlers/callbackQuery/_buttonExportCQ";
import { startCommand } from "./functions/handlers/commands/startCommand";

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
      messageId: 0,
    }),
    storage: new MemorySessionStorage(),
  })
);

// запуск первого сообщения которое имеет кнопку "Запустить магазин", "menu"
bot.command("start", startCommand);

//Слушатели Reply кнопок
// bot.hears("Главное меню🏡", handlerHearExport.handlerMainMenu);

// bot.hears("Каталог📕", handlerHearExport.handlerCatalog);

// bot.hears(/Корзина(\((\d+)\)|\s*)/, handlerHearExport.handlerCart);

// bot.hears("Личный кабинет🔐", handlerHearExport.handlerAccoutn);

// bot.hears("Адрес🏠", handlerHearExport.handlerAdress);

// bot.hears("Изменить адрес⚙️", handlerHearExport.handlerChangeAdress);

// bot.hears("Телефон☎️", handlerHearExport.handlerPhone);

// bot.hears("Изменить телефон⚙️", handlerHearExport.handlerChangePhone);

// bot.hears(/Доставка(\((\d+)\)|\s*)/, handlerHearExport.handlerDelivery);

// bot.hears("Информация📋", handlerHearExport.handlerInfo);

// bot.hears("Панель Админа🔏", handlerHearExport.handlerAdminPanel);

// bot.hears("Назад", handlerHearExport.handlerBackButton);

// Слушатель ввода/замены адреса и телефона
bot.on("message:text", handlerHearExport.handlerPersonalDataRegister);

// Слушатель инлайн кнопки МЕНЮ
bot.callbackQuery("menu", handlerCallBackQuery.buttonMenuCQ);

// Слушатель инлайн кнопки КАТАЛОГ
bot.callbackQuery("catalog", handlerCallBackQuery.buttonCatalogCQ);

// Слушатель инлайн кнопки КОРЗИНА
bot.callbackQuery("cart", handlerCallBackQuery.buttonCartCQ);

// Слушатель инлайн кнопки ДОСТАВКА
bot.callbackQuery("delivery", handlerCallBackQuery.buttonDeliveryCQ);

// Слушатель инлайн кнопки ЛИЧНЫЙ КАБИНЕТ
bot.callbackQuery("account", handlerCallBackQuery.buttonAccountCQ);

// Слушатель инлайн кнопки ПАНЕЛЬ АДМИНИСТРАТОРА
bot.callbackQuery("admin", handlerCallBackQuery.buttonAdminPanelCQ);

// Слушатель инлайн кнопки ИНФОРМАЦИЯ
bot.callbackQuery("info", handlerCallBackQuery.buttonInfoCQ);

// Раздел каталога все стаканчики
bot.callbackQuery("allCaps", handlerCallBackQuery.buttonAllCapsCQ);

// Раздел каталога все крышки
bot.callbackQuery("allTops", handlerCallBackQuery.buttonAllTopsCQ);

bot.callbackQuery("caps02", handlerCallBackQuery.buttonCap02CQ);

bot.callbackQuery("caps03", handlerCallBackQuery.buttonCap03CQ);

bot.callbackQuery("caps04", handlerCallBackQuery.buttonCap04CQ);

bot.callbackQuery("tops02", handlerCallBackQuery.buttonTops02CQ);

bot.callbackQuery("tops03", handlerCallBackQuery.buttonTops03CQ);

bot.callbackQuery("tops04", handlerCallBackQuery.buttonTops04CQ);

//Инлайн кнопка добавить в корзину
bot.callbackQuery("addToCart", handlerCallBackQuery.buttonAddToCartCQ);

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

//Другие инлайн кнопки
// bot.on("callback_query", async (ctx) => {
//   const action = ctx.callbackQuery.data;
//   if (
//     action &&
//     action !== "menu" &&
//     action !== "back_to_menu" &&
//     action !== "cart" &&
//     action !== "makeOrder" &&
//     action !== "deleteItems"
//   ) {
//     // Проверка callback_data
//     ctx.session.menuHistory.push(action);
//     await createInlineMenu(ctx, action);
//   }
// });

bot.catch((error) => {
  const ctx = error.ctx;
  console.error(`Error while handling update${ctx.update.update_id}`);
  const e = error.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not connect Telegram", e);
  } else {
    console.error("Unknow error", e);
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
