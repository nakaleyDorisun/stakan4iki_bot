import { MyContext } from "../../types";
import { menuRenderExport } from "./_menuRenderExport";

export async function cancelDeleteRender(ctx: MyContext) {
  try {
    //////////////////////////////////////////////////
    if (ctx.callbackQuery?.message) {
      console.log(
        ctx.callbackQuery.message.message_id,
        "from cancelDeleteRender"
      );
    } /////////////////////////////////////////////////
    await menuRenderExport.cartRender(ctx);
  } catch (error) {
    console.error(error);
  }
}
