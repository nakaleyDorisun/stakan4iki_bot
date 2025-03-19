import { menus } from "../../../menus/menus";
import { MyContext } from "../../../types";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createReplyKeyboard } from "../../keyboards/createKeyboard";

export async function buttonAddToCartCQ(ctx: MyContext) {
  const itemCardKey =
    ctx.session.menuHistory[ctx.session.menuHistory.length - 1];
  const item = menus[itemCardKey];
  try {
    if (item.price)
      ctx.session.cart.push({
        id: Date.now().toLocaleString(),
        name: item.text,
        amount: 1,
        price: item.price,
      });

    await ctx.answerCallbackQuery({
      text: `Добавлено в корзину ${item.text} ✅`,
    });
    await ctx.editMessageText(`Добавлено в корзину ${item.text} ✅`); /// ctx.reply
    const currentMenuId =
      ctx.session.menuHistory[ctx.session.menuHistory.length - 1];
    const curretnMenuText = item.text;
    const keyboardCatalog = await createReplyKeyboard(ctx, "keyboardCatalog");
    if (item.price) ctx.session.totalRub += item.price;
    if (keyboardCatalog)
      await handleMenuSection(
        ctx,
        curretnMenuText,
        keyboardCatalog,
        currentMenuId,
        item ///
      );
  } catch (error) {
    await ctx.reply(
      `Ошибка добавления в корзину ${item.text}, попробуйте еще раз`
    );
    console.error(error);
  }
}
