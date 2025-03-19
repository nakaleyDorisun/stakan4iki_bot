import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAdminPanelCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.mainMenuRender(ctx, userId);
  } else {
    console.log("Ошибка buttonAdminPanelCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки панели администратора, попрубуйте позднее"
    );
  }
}
