import { MyContext } from "../../types";

export function resetInputFlags(ctx: MyContext) {
  if (ctx.session) {
    ctx.session.isWaitingForAdress = false;
    ctx.session.isWaitingForPhone = false;
    ctx.session.isWaitingForAdressChange = false;
    ctx.session.isWaitingForPhoneChange = false;
  }
}
