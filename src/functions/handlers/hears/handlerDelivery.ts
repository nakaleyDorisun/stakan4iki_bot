import { MyContext } from "./../../../types";
import { menuRenderExport } from "../../menu-renders/_menuRenderExport";

export async function handlerDelivery(ctx: MyContext) {
  if (!ctx.session.orders.length) {
    await ctx.reply("У вас пока еще нет заказов");
    return;
  }
  await menuRenderExport.deliveryMenuRender(ctx);
}
