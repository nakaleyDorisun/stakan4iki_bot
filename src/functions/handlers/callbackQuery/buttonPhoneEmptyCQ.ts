import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonPhoneEmptyCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.phoneRender(ctx, userId);
  } else {
    console.log("Ошибка buttonPhoneEmptyCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню отсутсвия контактного телефона, попрубуйте позднее"
    );
  }
}
