import { MyContext } from "../../../types";
import { mainMenuRender } from "../../menu-renders/mainMenuRender";

export async function buttonMenuCQ(ctx: MyContext) {
  const menu = ctx.session.menuHistory;
  if (ctx.callbackQuery) {
    const userId = ctx.callbackQuery.from.id;
    await mainMenuRender(ctx, userId);
  } else {
    console.log("Ошибка buttonMenuCQ, не удалось загрузить меню");
    await ctx.reply("Ошибка запуска бота, попрубуйте позднее");
  }
}
