import { InlineKeyboard } from "grammy";
import { MyContext } from "../../../types";

export async function buttonDeleteItemsCQ(ctx: MyContext) {
  const confirmKeyboard = new InlineKeyboard()
    .text("Да", "confirmDelete")
    .text("Нет", "cancelDelete");

  await ctx.editMessageText("Вы уверены, что хотите очистить корзину?", {
    reply_markup: confirmKeyboard,
  });
}
