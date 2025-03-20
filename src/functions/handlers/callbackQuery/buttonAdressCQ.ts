import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAdressCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.adressRender(ctx, userId);
  } else {
    console.log("Ошибка buttonAdressCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню адреса доставки, попрубуйте позднее");
  }
}
