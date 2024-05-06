import React from "react";

import { cn } from "@/lib/utils";

interface ISettingHeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  className?: string;
}

const SettingsHeader = ({
  title,
  className,
  ...props
}: ISettingHeaderProps) => {
  return (
    <div
      className={cn(
        "pb-2 border-b border-border w-full text-2xl text-primary font-semibold",
        className
      )}
      {...props}
    >
      {title}
    </div>
  );
};

export default SettingsHeader;
