"use client";

import { useState } from "react";

interface AvatarWithFallbackProps {
  src?: string | null;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
}

export function AvatarWithFallback({
  src,
  alt,
  className,
  fallback,
}: AvatarWithFallbackProps) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return <>{fallback}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
