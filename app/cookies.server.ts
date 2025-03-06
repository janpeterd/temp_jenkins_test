import { createCookie } from "react-router";

// set cookie
export const authCookie = createCookie("auth", {
  maxAge: 60 * 60 * 24 * 365, // 1 year
});
