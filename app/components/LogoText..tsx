import { Link } from "react-router";
import { cn } from "~/lib/utils";

export default function LogoText({ className = "" }: { className?: string }) {
  return (
    <Link to="/">
      <div
        className={cn(
          className,
          "relative flex items-center justify-start sm:w-42 sm:gap-x-4",
        )}
      >
        {/* <img src="/logo.svg" alt="Logo" width={60} /> */}
        {/* <h1 className="font-racing absolute top-5 left-12 text-4xl">Qurio</h1> */}
        <h1 className="font-racing text-2xl sm:text-4xl">Qurio</h1>
      </div>
    </Link>
  );
}
