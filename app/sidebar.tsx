import { SearchIcon, Trophy, UserSearch } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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

export function AppSidebar() {
  return (
    <Sidebar className="from-primaryDark border-none bg-gradient-to-b to-primary font-bold text-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
