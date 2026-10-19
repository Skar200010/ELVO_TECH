"use client";

import { useState } from "react";

interface BrandLogoProps {
  className?: string;
  alt?: string;
}

export function BrandLogo({ className = "h-20 w-auto object-contain", alt = "ELVO Technologies" }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-serif font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        ELVO
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/elvo-logo.png"
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
