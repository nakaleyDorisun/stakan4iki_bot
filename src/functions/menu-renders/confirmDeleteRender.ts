import { MyContext } from "../../types";
import { cartRender } from "./cartRender";

export async function confirmDeleteRender(ctx: MyContext) {
  try {
    const cart = ctx.session.cart;
    if (cart) {
      ctx.session.cart = [];
      ctx.session.totalRub = 0;
      await ctx.answerCallbackQuery({
        text: `Корзина очищена✅`,
      });
      await ctx.editMessageText(`Корзина очищена✅`);
      if (ctx.chat?.id && ctx.session.messagesAddToCart)
        await ctx.api.deleteMessages(
          ctx.chat.id,
          ctx.session.messagesAddToCart
        );
      await cartRender(ctx);
    } else {
      await ctx.reply("Нечего удалять");
    }
  } catch (error) {
    console.error(error);
  }
}
