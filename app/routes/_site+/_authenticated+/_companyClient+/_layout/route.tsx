import { authCookie } from "~/cookies.server";
import type { Route } from "./+types/route";
import { Outlet, redirect } from "react-router";
import { UserTypeEnum } from "~/enums/userType";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  const user: UserResponseDto = cookie.user;
  if (
    user == null ||
    (user.userType !== UserTypeEnum.companyClient &&
      user.userType !== UserTypeEnum.companyAdministrator)
  ) {
    return redirect("/login");
  }
};

export default function CompanyClientLayout() {
  return <Outlet />;
}
