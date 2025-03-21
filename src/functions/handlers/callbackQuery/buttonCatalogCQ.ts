import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCatalogCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.catalogRender(ctx);
  } else {
    console.log("Ошибка buttonCatalogCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню каталога, попрубуйте позднее");
  }
}
