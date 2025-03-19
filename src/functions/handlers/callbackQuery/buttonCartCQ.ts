import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCartCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.cartRender(ctx, userId);
  } else {
    console.log("Ошибка buttonCartCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню корзины, попрубуйте позднее");
  }
}
