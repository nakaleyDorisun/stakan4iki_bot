import { menuRenderExport } from "./../../menu-renders/_menuRenderExport";
import { MyContext } from "../../../types";

export async function backToAllCapsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.backToAllCapsRender(ctx);
  } else {
    console.log("Ошибка buttonAllCapsCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню каталога стаканов, попрубуйте позднее"
    );
  }
}
