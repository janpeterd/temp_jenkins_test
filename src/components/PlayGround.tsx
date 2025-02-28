import { Button } from "./ui/button";

export default function Playground() {
  return (
    <div className="mx-auto flex max-w-[80%] flex-col items-start justify-center gap-4">
      <h1 className="text-2xl">Playground</h1>
      <div className="flex flex-col flex-wrap">
        <h2 className="text-xl">Buttons variants</h2>
        <div className="flex max-w-96 flex-wrap items-center justify-center gap-4">
          <Button>Default</Button>
          <Button variant={"destructive"}>Destructive</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"link"}>Link</Button>
          <Button variant={"outline"}>Outline</Button>
          <Button variant={"secondary"}>Secondary</Button>
        </div>
      </div>
    </div>
  );
}
