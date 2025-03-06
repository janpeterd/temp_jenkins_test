import { authCookie } from "~/cookies.server";
import type { Route } from "./+types/route";
import { Outlet } from "react-router";
import { AuthContext } from "~/context/AuthContext";
import { SidebarProvider } from "~/components/ui/sidebar";
import AppSideBar from "~/components/layout/AppSideBar";
import { cn } from "~/lib/utils";
import Navbar from "~/components/layout/Navbar";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  console.log(cookie);
  if (Object.keys(cookie).length === 0) {
    return null; // not logged in
  }
  return { user: cookie.user, token: cookie.jwt };
};

export default function Layout({ loaderData }: Route.ComponentProps) {
  const { user, token } = loaderData || { user: null, token: null };
  return (
    <div>
      <AuthContext.Provider value={{ user, token }}>
        <SidebarProvider>
          <div className="from-primary-gradient-from to-primary-gradient-to w-screen items-start bg-gradient-to-b">
            <Navbar />
            <AppSideBar user={user} />
            <div
              id="content"
              className={cn(
                "bg-background ml-auto rounded-lg p-6 md:mr-2",
                "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
                "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width)-0.5rem)]",
                "transition-[width] duration-200 ease-linear",
                "flex h-[calc(100vh-5rem)] flex-col overflow-y-auto",
              )}
            >
              <Outlet />
            </div>
          </div>
        </SidebarProvider>
      </AuthContext.Provider>
    </div>
  );
}
