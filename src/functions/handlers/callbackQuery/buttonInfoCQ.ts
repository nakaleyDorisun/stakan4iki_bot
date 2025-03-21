import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonInfoCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.infoRender(ctx);
  } else {
    console.log("Ошибка buttonInfoCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню информация, попрубуйте позднее");
  }
}
