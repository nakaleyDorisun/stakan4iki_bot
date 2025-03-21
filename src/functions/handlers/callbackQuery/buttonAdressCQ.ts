import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAdressCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.adressRender(ctx);
  } else {
    console.log("Ошибка buttonAdressCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню адреса доставки, попрубуйте позднее");
  }
}
