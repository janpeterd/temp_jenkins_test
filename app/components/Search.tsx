import { SearchIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useSearch } from "~/context/SearchContext";
import { cn } from "~/lib/utils";

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function Search({
  className = "",
  placeholder = "Search",
}: Props) {
  const { setOpen } = useSearch();
  return (
    <Button
      variant="outline"
      className={cn(
        "text-muted-foreground relative flex items-center justify-center sm:w-full sm:justify-start",
        className,
      )}
      onClick={() => setOpen(true)}
    >
      <span className="ml-3 hidden sm:block">{placeholder}</span>
      <SearchIcon
        aria-hidden="true"
        className="sm:absolute sm:top-1/2 sm:right-1.5 sm:-translate-y-1/2"
      />
    </Button>
  );
}
