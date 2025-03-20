import { createInlineMenu } from "../../createFunctions/createInlineMenu";
import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonConfirmDeleteCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.confirmDeleteRender(ctx, userId);
  } else {
    console.log("Ошибка buttonConfirmDeleteCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки подтверждения очистки корзины, попрубуйте позднее"
    );
  }
}
