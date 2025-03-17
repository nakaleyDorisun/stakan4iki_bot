import { MyContext } from "../../types";

export async function adminPanelMenuRender(ctx: MyContext) {
  if (ctx.session.isAdmin) {
    ctx.reply("Тут будет всякая общая админская инфа ");
  } else {
    ctx.reply("Доступ запрещен");
    console.log(`Не админ пытается использовать админ панель`);
    return;
  }
}
