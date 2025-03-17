import { IMenus } from "../types";
import { productsCaps, productsTops } from "../DB/products";

export const capsMenu: IMenus = {
  button_allCaps_click: {
    text: "Одноразовые стаканы для горячей продукции: \n 0,2л 100 шт в упаковке - 200 рублей\n0,3л 100 шт в упаковке - 250 рублей\n0,4л 100 шт в упаковке - 350 рублей",
    buttons: [
      { text: "0,2л 100 шт", callback_data: "button_caps02_click" },
      { text: "0,3л 100 шт", callback_data: "button_caps03_click" },
      { text: "0,4л 100 шт", callback_data: "button_caps04_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_caps02_click: {
    text: "Стаканы 0,2л 100шт белые",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все стаканы", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_caps03_click: {
    text: "Стаканы 0,3л 100шт белые",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все стаканы", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_caps04_click: {
    text: "Стаканы 0,4л 100шт белые",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все стаканы", callback_data: "button_allCaps_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
};
