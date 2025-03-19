import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonMenuCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.mainMenuRender(ctx, userId);
  } else {
    console.log("Ошибка buttonMenuCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки главного меню, попрубуйте позднее");
  }
}
