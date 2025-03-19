import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCaps02CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.caps02Render(ctx, userId);
  } else {
    console.log("Ошибка buttonCaps02CQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню стакана 0,2, попрубуйте позднее");
  }
}
