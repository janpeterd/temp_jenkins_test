import { authCookie } from "~/cookies.server";
import type { Route } from "./+types/route";
import { Outlet, redirect } from "react-router";
import { UserTypeEnum } from "~/enums/userType";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  const user = cookie.user;
  if (
    user != null &&
    (user.type !== UserTypeEnum.companyClient ||
      user.type !== UserTypeEnum.companyAdministrator)
  ) {
    return redirect("/login");
  }
};

export default function CompanyClientLayout() {
  return <Outlet />;
}
