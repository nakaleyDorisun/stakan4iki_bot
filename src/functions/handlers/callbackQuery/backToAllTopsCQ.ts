import { menuRenderExport } from "../../menu-renders/_menuRenderExport";
import { MyContext } from "../../../types";

export async function backToAllTopsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.backToAllTopsRender(ctx);
  } else {
    console.log("Ошибка backToAllTopsCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню каталога крышек, попрубуйте позднее");
  }
}
