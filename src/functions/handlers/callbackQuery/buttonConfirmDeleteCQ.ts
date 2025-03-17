import { createInlineMenu } from "../../createFunctions/createInlineMenu";
import { MyContext } from "../../../types";

export async function buttonConfirmDeleteCQ(ctx: MyContext) {
  ctx.session.cart = [];
  ctx.session.totalRub = 0;
  await createInlineMenu(ctx, "cart");
}
