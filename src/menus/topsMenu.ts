import { IMenus } from "../types";

export const capsMenu: IMenus = {
  button_allTops_click: {
    text: "Крышки пластиковые для одноразовых стаканов",
    buttons: [
      { text: "0,2л 100 шт", callback_data: "button_top02_click" },
      { text: "0,3л 100 шт", callback_data: "button_top03_click" },
      { text: "0,4л 100 шт", callback_data: "button_top04_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_top02_click: {
    text: "Крышки для стаканов 0,2л 100шт черные",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все крыЖки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_top03_click: {
    text: "Крышки для стаканов 0,3л 100шт черные",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все крыЖки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
  button_top04_click: {
    text: "Крышки для стаканов 0,4л 100шт черные",
    buttons: [
      { text: "Добавить в корзину", callback_data: "button_addToCart_click" },
      { text: "Все крыЖки", callback_data: "button_allTops_click" },
      { text: "Вернуться в каталог", callback_data: "catalog" },
    ],
  },
};
