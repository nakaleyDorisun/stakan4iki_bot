import { MyContext } from "../../../types";
import { createInlineMenu } from "../../createFunctions/createInlineMenu";
import { mainMenuRender } from "../../menu-renders/mainMenuRender";

export async function handlerBackButton(ctx: MyContext) {
  if (ctx.session.keyboardHistory.length > 1) {
    ctx.session.keyboardHistory.pop();
    const previousKeyboard = ctx.session.keyboardHistory.slice(-1)[0];

    ctx.session.menuHistory.pop();
    const previousMenu = ctx.session.menuHistory.slice(-1)[0];

    if (previousKeyboard && previousMenu) {
      await ctx.reply(`Возвращаемся к ${previousMenu}`, {
        reply_markup: previousKeyboard,
      });
      await createInlineMenu(ctx, previousMenu);
    } else {
      await mainMenuRender(ctx);
    }
  } else {
    await mainMenuRender(ctx);
  }
}

//////////////////////////////////////////////////////////////////////////////////
//Reply кнопка назад олд версия
// bot.hears("Назад", async (ctx) => {
//   if (ctx.session.keyboardHistory.length > 1) {
//     const previousKeyboard =
//       ctx.session.keyboardHistory[ctx.session.keyboardHistory.length - 2];
//     ctx.session.keyboardHistory.pop();
//     const previousMenu =
//       ctx.session.menuHistory[ctx.session.menuHistory.length - 2];
//     ctx.session.menuHistory.pop();
//     if (previousKeyboard && previousMenu) {
//       ctx.reply(previousMenu, {
//         reply_markup: previousKeyboard,
//       });
//       await createInlineMenu(ctx, previousMenu);
//     } else {
//       await ctx.reply("Вы вернулись в начало.");
//     }
//   } else {
//     await ctx.reply("Вы вернулись в начало.");
//   }
// });
