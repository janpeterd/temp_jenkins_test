import { authCookie } from "~/cookies.server";
import type { Route } from "./+types/route";
import { Outlet, redirect } from "react-router";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  if (Object.keys(cookie).length === 0) {
    return redirect("/login");
  }
};

export default function AuthenticatedLayout() {
  return <Outlet />;
}
