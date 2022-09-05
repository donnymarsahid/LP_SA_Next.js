import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <a href="/">
      <Image src="/icons/logo-sa.svg" alt="nextjs" width="45" height="36" />
    </a>
  );
};
