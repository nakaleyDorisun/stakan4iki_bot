import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCaps04CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.caps04Render(ctx);
  } else {
    console.log("Ошибка buttonCaps04CQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню стакана 0,4, попрубуйте позднее");
  }
}
