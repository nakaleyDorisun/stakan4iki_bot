import { Context, Keyboard } from "grammy";

export interface Cart {
  id: string;
  name: string;
  amounth: number;
  price: number;
}

export interface Orders {
  id: string;
  text: string;
  date: string;
}

export interface SessionData {
  menuHistory: string[]; // Массив для хранения истории меню, необходим для инлайн кнопки обрано
  keyboardHistory: Keyboard[]; // Массив для хранения истории клавиатур, небходим для reply кнопки обратно
  cart: Cart[]; // Массив товар в корзине
  phone: string | null; // номер телефона из личного кабинета
  adress: string | null; // адрес доставки из личного кабинета
  totalRub: number; // итоговая ссумма заказа
  isWaitingForPhone: boolean; // бот ожидает ответ чтобы сохранить номер телефона
  isWaitingForAdress: boolean; // бот ожидает ответ чтобы сохранить адрес доставки
  orders: Orders[]; // массив заказов для вкладки доставка
  isAdmin: boolean;
}

export interface MyContext extends Context {
  session: SessionData;
}

export interface IMenuItem {
  text: string;
  price?: number;
  callbackQuery?: string;
  buttons: {
    text: string;
    callback_data: string;
  }[];
}

export interface IMenus {
  [menuId: string]: IMenuItem; // Index Signature
}

// [menuId: string]: MenuItem;:  Это называется Index Signature (сигнатура индекса).  Она говорит TypeScript, что IMenus будет вести себя как объект, ключами которого являются строки (string), а значениями – объекты типа MenuItem.

// [menuId: string]: Это объявление индекса. menuId - это как имя переменной для ключа (ты можешь назвать ее как угодно, например, key или menuName). string после двоеточия говорит, что ключи этого объекта должны быть строками.
// : MenuItem: Это говорит, что значением для каждого строкового ключа в этом объекте должен быть объект типа MenuItem.
// Как это работает и почему это лучше:

// Теперь, вместо того чтобы перечислять каждое название меню в интерфейсе, мы говорим, что IMenus — это просто коллекция меню, где каждое меню имеет структуру, описанную в MenuItem.
