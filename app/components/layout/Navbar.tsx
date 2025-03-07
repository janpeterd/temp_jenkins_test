import LogoText from "../LogoText";
import Search from "../Search";
import LogOutButton from "../LogOutButton";
import { SidebarTrigger } from "../ui/sidebar";
import Header from "./header";
import LogInButton from "../LogInButton";
import SignUpButton from "../SignUpButton";

export default function Navbar() {
  return (
    <Header>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-primary-foreground size-16" />
          <LogoText className="text-primary-foreground" />
        </div>
        <div className="flex max-w-[750px] items-center justify-end gap-4">
          <Search />
          <LogOutButton />
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </Header>
  );
}
