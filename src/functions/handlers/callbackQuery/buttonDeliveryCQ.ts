import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonDeliveryCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.deliveryRender(ctx, userId);
  } else {
    console.log("Ошибка buttonDeliveryCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню доставки, попрубуйте позднее");
  }
}
