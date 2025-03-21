import { MyContext } from "../../types";
import { menuRenderExport } from "./_menuRenderExport";

export async function cancelDeleteRender(ctx: MyContext) {
  try {
    await menuRenderExport.cartRender(ctx);
  } catch (error) {
    console.error(error);
  }
}
