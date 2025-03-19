import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonTops02CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.tops02Render(ctx, userId);
  } else {
    console.log("Ошибка tops02Render, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню крышек 0,2, попрубуйте позднее");
  }
}
