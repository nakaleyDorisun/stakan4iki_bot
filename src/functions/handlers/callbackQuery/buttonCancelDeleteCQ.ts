import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonCancelDeleteCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.cancelDeleteRender(ctx, userId);
  } else {
    console.log("Ошибка buttonCancelDeleteCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки отмены очистки корзины, попрубуйте позднее"
    );
  }
}
