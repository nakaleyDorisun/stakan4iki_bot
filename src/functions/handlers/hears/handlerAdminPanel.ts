import { MyContext } from "../../../types";
import { adminPanelMenuRender } from "../../admin/adminPanelMenuRender";
import { handleMenuSection } from "../../createFunctions/handleMenuSection";
import { createSimpleReplyKeyboard } from "../../keyboards/createKeyboard";
import { simpleKeyboards } from "../../keyboards/keyboardsSimple";

export async function handlerAdminPanel(ctx: MyContext) {
  const keyboardAdminPanel = await createSimpleReplyKeyboard(
    ctx,
    simpleKeyboards.KEYBOARD_ADMIN_PANEL
  );
  if (keyboardAdminPanel) {
    await handleMenuSection(ctx, "Панель Админа🔐", keyboardAdminPanel);
  } else {
    console.error("Ошибка: Не удалось создать клавиатуру меню администратора.");
    await ctx.reply(
      "Произошла ошибка при загрузке меню информации. Попробуйте позже."
    );
  }
  await adminPanelMenuRender(ctx);
}
