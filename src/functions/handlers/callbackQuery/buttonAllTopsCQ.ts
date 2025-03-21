import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAllTopsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.allTopsRender(ctx);
  } else {
    console.log("Ошибка buttonAllTopsCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню каталога крышек, попрубуйте позднее");
  }
}
