import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCaps02CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.caps02Render(ctx);
  } else {
    console.log("Ошибка buttonCaps02CQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню стакана 0,2, попрубуйте позднее");
  }
}
