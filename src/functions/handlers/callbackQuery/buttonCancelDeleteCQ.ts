import { MyContext } from "../../../types";
import { createInlineMenu } from "../../createFunctions/createInlineMenu";

export async function buttonCancelDeleteCQ(ctx: MyContext) {
  await createInlineMenu(ctx, "cart");
}
