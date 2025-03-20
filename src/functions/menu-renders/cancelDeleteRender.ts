import { MyContext } from "../../types";
import { menuRenderExport } from "./_menuRenderExport";

export async function cancelDeleteRender(ctx: MyContext, userID?: number) {
  try {
    await menuRenderExport.cartRender(ctx);
  } catch (error) {
    console.error(error);
  }
}
