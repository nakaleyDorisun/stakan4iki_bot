import { MyContext } from "../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function buttonAdressChangeCQ(ctx: MyContext) {
  if (ctx.callbackQuery) {
    await menuRenderExport.adressChangeRender(ctx);
  } else {
    console.log("Ошибка buttonAdressChangeCQ, не удалось загрузить меню");
    await ctx.reply(
      "Ошибка загрузки меню изменения контактного телефона, попрубуйте позднее"
    );
  }
}
