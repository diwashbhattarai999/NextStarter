import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[1700px] mx-auto xl:px-20 md:px-10 sm:px-6 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;
