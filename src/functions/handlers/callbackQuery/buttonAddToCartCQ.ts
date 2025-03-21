import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAddToCartCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.addToCartRender(ctx);
  } else {
    console.log("Ошибка buttonAddToCartCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню личного кабинета, попрубуйте позднее"
    );
  }
}
