import { MyContext } from "../../types";
import { cartRender } from "./cartRender";

export async function confirmDeleteRender(ctx: MyContext, userID?: number) {
  try {
    const cart = ctx.session.cart;
    if (cart) {
      ctx.session.cart = [];
      ctx.session.totalRub = 0;
      await ctx.answerCallbackQuery({
        text: `Корзина очищена✅`,
      });
      await ctx.editMessageText(`Корзина очищена✅`);
      await cartRender(ctx);
    } else {
      await ctx.reply("Нечего удалять");
    }
  } catch (error) {
    console.error(error);
  }
}
