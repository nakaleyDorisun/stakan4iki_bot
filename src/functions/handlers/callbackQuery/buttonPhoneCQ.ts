import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonPhoneCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await menuRenderExport.phoneRender(ctx, userId);
  } else {
    console.log("Ошибка buttonPhoneCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню контактного телефона, попрубуйте позднее"
    );
  }
}
