import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="size-10 text-primary" />
        <h2 className="text-xl font-medium text-muted-foreground animate-pulse">
          Loading SkillSphere...
        </h2>
      </div>
    </div>
  );
}
