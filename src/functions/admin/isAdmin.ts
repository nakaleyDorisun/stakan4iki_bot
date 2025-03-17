import { MyContext } from "../../types";

export async function isAdmin(ctx: MyContext, userID: number) {
  const isAdminFlag = userID?.toString() === process.env.ADMIN_ID;
  if (isAdminFlag) {
    ctx.session.isAdmin = true;
    console.log("Admin logged in");
  } else {
    console.log(`User ${userID} is not a admin `);
  }
}
