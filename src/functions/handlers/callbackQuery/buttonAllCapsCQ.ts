import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAllCapsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.allCapsRender(ctx, userId);
  } else {
    console.log("Ошибка buttonAllCapsCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню каталога стаканов, попрубуйте позднее"
    );
  }
}
