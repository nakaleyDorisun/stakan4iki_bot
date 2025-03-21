import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAdressEmptyCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.phoneRender(ctx);
  } else {
    console.log("Ошибка buttonPhoneCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню отсутствия адреса доставки, попрубуйте позднее"
    );
  }
}
