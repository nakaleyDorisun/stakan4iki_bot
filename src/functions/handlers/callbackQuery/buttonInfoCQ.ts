import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonInfoCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.infoRender(ctx, userId);
  } else {
    console.log("Ошибка buttonInfoCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню информация, попрубуйте позднее");
  }
}
