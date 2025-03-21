import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonPhoneChangeCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.phoneChangeRender(ctx);
  } else {
    console.log("Ошибка buttonPhoneChangeCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню изменения адреса доставки, попрубуйте позднее"
    );
  }
}
