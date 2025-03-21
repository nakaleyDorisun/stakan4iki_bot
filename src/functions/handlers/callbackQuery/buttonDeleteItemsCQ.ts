import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonDeleteItemsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.deleteItemsRender(ctx);
  } else {
    console.log("Ошибка buttonCartCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню корзины, попрубуйте позднее");
  }
}
