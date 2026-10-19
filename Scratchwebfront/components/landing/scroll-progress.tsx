"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
}
