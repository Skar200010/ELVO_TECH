"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const isInternalRoute = (href?: string) => href && href.startsWith("/") && !href.startsWith("//");

const MotionLink = motion(Link);

export function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}: AnimatedButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-xl overflow-hidden transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border-2 border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/5",
    ghost: "text-foreground hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-primary"
          initial={{ x: "100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  if (href && isInternalRoute(href)) {
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function GlowButton({
  children,
  className = "",
  onClick,
  href,
}: GlowButtonProps) {
  const innerContent = (
    <>
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
      <span className="absolute inset-[2px] rounded-[10px] bg-foreground" />
      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
      <span className="relative z-10 text-background flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href && isInternalRoute(href)) {
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        className={cn(
          "group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl overflow-hidden",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {innerContent}
      </MotionLink>
    );
  }

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl overflow-hidden",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {innerContent}
    </Component>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}
