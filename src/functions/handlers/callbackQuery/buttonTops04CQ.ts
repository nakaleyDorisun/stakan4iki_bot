import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonTops04CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.tops04Render(ctx, userId);
  } else {
    console.log("Ошибка tops04Render, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню крышек 0,4, попрубуйте позднее");
  }
}
