import { MyContext } from "../../../types";

export async function buttonBackToMenuCQ(ctx: MyContext) {
  console.log("back to menu");
  if (ctx.chat?.id && ctx.callbackQuery?.message?.message_id) {
    const chatID = ctx.chat.id;
    const messageID = ctx.callbackQuery.message.message_id;

    await ctx.api.editMessageText(chatID, messageID, "Это просто текст!");
  }
  await ctx.answerCallbackQuery();
}
