import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonTops03CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.tops03Render(ctx, userId);
  } else {
    console.log("Ошибка tops02Render, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню крышек 0,3, попрубуйте позднее");
  }
}
