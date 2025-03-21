import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAccountCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.accountRender(ctx);
  } else {
    console.log("Ошибка buttonAccountCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню личного кабинета, попрубуйте позднее"
    );
  }
}
