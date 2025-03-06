import { authCookie } from "~/cookies.server";
import type { Route } from "./+types/route";
import { Outlet } from "react-router";
import { useAuth } from "~/context/AuthContext";
import { SidebarProvider } from "~/components/ui/sidebar";
import AppSideBar from "~/components/layout/AppSideBar";
import { cn } from "~/lib/utils";
import Navbar from "~/components/layout/Navbar";
import { useEffect } from "react";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  if (Object.keys(cookie).length === 0) {
    return null; // not logged in
  }
  return { user: cookie.user, token: cookie.jwt };
};

export default function Layout({ loaderData }: Route.ComponentProps) {
  const { setUser, setToken } = useAuth();
  const { user, token } = loaderData || { user: null, token: null };
  useEffect(() => {
    if (user && token) {
      setUser(user);
      setToken(token);
    }
  }, [user, token, setUser, setToken]);

  return (
    <div>
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
    </div>
  );
}
