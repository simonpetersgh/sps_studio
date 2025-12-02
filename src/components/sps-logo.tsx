import Image from "next/image";
import type { ComponentProps } from "react";

export const SpsLogo = (props: Partial<ComponentProps<typeof Image>>) => {
  const { width = 48, height = 48, ...rest } = props;
  return (
    <Image
      src="/sp-icon.png"
      alt="SPS Studio Logo"
      width={width}
      height={height}
      {...rest}
    />
  );
};
