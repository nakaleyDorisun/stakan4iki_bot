import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCancelDeleteCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.cancelDeleteRender(ctx);
  } else {
    console.log("Ошибка buttonCancelDeleteCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки отмены очистки корзины, попрубуйте позднее"
    );
  }
}
