import { Outlet, useLocation } from "react-router";

export default function AuthLayout() {
  const pathname = useLocation().pathname;
  if (pathname === "/sign-in-2") {
    return <Outlet />;
  }

  return (
    <div className="from-primary-gradient-from to-primary-gradient-to container grid min-h-svh flex-col items-center justify-center bg-gradient-to-b lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="font-racing text-primary-foreground text-5xl">
            Qurio
          </h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
