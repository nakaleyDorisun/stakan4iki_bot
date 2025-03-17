import { MyContext } from "../../../types";
import { createInlineMenu } from "../../createFunctions/createInlineMenu";

export async function buttonBackToMenuCQ(ctx: MyContext) {
  console.log("back to menu");
  if (ctx.session.menuHistory.length > 1) {
    ctx.session.menuHistory.pop();
    const previousMenu = ctx.session.menuHistory.slice(-1)[0];
    console.log(previousMenu, "previousMenu");
    if (previousMenu) {
      await createInlineMenu(ctx, previousMenu);
    } else {
      await ctx.reply("Некуда возвращаться");
    }
  } else {
    await ctx.reply("Некуда возвращаться");
  }

  await ctx.answerCallbackQuery();
}
