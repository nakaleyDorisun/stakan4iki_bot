import { MyContext } from "../../types";

export async function adminDeliveryMenuRender(ctx: MyContext) {
  if (ctx.session.isAdmin) {
    console.log("admin panel render");
  } else {
    ctx.reply("Доступ запрещен");
    console.log(`Не админ пытается использовать админ панель`);
    return;
  }
}
