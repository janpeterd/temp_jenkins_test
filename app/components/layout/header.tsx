import React from "react";
import { cn } from "~/lib/utils";

interface HeaderProps extends React.ComponentPropsWithRef<"header"> {
  fixed?: boolean;
}

export default function Header({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "relative flex w-full flex-col justify-center gap-3 px-4 py-1 sm:gap-4",
        fixed && "header-fixed peer/header fixed z-50 w-[inherit] rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}
