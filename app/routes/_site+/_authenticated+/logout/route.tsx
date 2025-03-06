import type { Route } from "./+types/route";
import { authCookie } from "~/cookies.server";
import { redirectWithInfo } from "remix-toast";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  delete cookie.jwt;
  delete cookie.user;

  throw await redirectWithInfo("/home", "You have been logged out!", {
    headers: {
      "Set-Cookie": await authCookie.serialize(cookie),
    },
  });
};
