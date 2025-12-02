import Image from "next/image";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const SpsLogo = (props: Partial<ComponentProps<typeof Image>>) => {
  const { width = 32, height = 32, className, ...rest } = props;
  return (
    <Image
      src="/sp-icon.png"
      alt="SP Image Logo"
      width={width}
      height={height}
      className={cn("rounded-full", className)}
      {...rest}
    />
  );
};
