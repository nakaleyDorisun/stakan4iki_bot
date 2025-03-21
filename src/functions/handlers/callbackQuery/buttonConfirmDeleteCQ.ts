import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonConfirmDeleteCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.confirmDeleteRender(ctx);
  } else {
    console.log("Ошибка buttonConfirmDeleteCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки подтверждения очистки корзины, попрубуйте позднее"
    );
  }
}
