import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCaps03CQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.caps03Render(ctx);
  } else {
    console.log("Ошибка buttonCaps03CQ, не удалось загрузить меню");
    await ctx.reply("Ошибка загрузки меню стакана 0,3, попрубуйте позднее");
  }
}
