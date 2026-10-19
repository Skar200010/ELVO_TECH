"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion-wrapper";

const logos = [
  { name: "Acme Corp", src: "/placeholder-logo.svg" },
  { name: "Globex", src: "/placeholder-logo.svg" },
  { name: "Initech", src: "/placeholder-logo.svg" },
  { name: "Umbrella", src: "/placeholder-logo.svg" },
  { name: "Hooli", src: "/placeholder-logo.svg" },
  { name: "Vehement", src: "/placeholder-logo.svg" },
];

export function LogoCloud() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by teams building with modern technology
          </p>
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name + index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.08, opacity: 1 }}
              className="opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
