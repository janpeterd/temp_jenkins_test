import { LogIn, Plus, SearchIcon, Trophy, UserSearch } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";
import { NavUser } from "../NavUser";
import { useIsMobile } from "~/hooks/use-mobile";
import { Link } from "react-router";
// Menu items.
const items = [
  {
    title: "Leaderboards",
    url: "#",
    icon: Trophy,
  },
  {
    title: "Search quiz",
    url: "#",
    icon: SearchIcon,
  },
  {
    title: "Find user",
    url: "#",
    icon: UserSearch,
  },
];
export default function AppSideBar({ user }: { user?: UserResponseDto }) {
  console.log("user", user);
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <Sidebar
      className={`top-16 h-[calc(100%-4rem)] border-none py-2 ${isMobile ? "from-primary-gradient-from to-primary-gradient-to border-none bg-gradient-to-b" : ""}`}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size={"lg"}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {user ? (
          <NavUser user={user} />
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                size="lg"
                key={"Log In"}
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Link to="/login">
                  <LogIn />
                  <span>Log In</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                size="lg"
                key={"Sign Up"}
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Link to="/sign-up">
                  <Plus />
                  <span>Sign Up</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
