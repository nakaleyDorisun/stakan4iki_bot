import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAllCapsCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.allCapsRender(ctx);
  } else {
    console.log("Ошибка buttonAllCapsCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню каталога стаканов, попрубуйте позднее"
    );
  }
}
