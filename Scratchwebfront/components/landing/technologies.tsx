"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Layers,
  Hexagon,
  Waypoints,
  Leaf,
  Database,
  Cloud,
  Zap,
  Triangle,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const technologies = [
  { name: "React", role: "Frontend", icon: Atom, gradient: "from-cyan-500 to-blue-500" },
  { name: "Next.js", role: "Web Framework", icon: Layers, gradient: "from-slate-600 to-slate-900" },
  { name: "Node.js", role: "Backend Runtime", icon: Hexagon, gradient: "from-green-500 to-emerald-600" },
  { name: "Express.js", role: "Backend Framework", icon: Waypoints, gradient: "from-gray-600 to-gray-900" },
  { name: "MongoDB", role: "NoSQL Database", icon: Leaf, gradient: "from-green-500 to-teal-600" },
  { name: "SQL", role: "Relational Data", icon: Database, gradient: "from-blue-500 to-indigo-600" },
  { name: "AWS", role: "Cloud Infrastructure", icon: Cloud, gradient: "from-amber-500 to-orange-600" },
  { name: "Supabase", role: "Database Platform", icon: Zap, gradient: "from-emerald-500 to-green-600" },
  { name: "Vercel", role: "Deployment Platform", icon: Triangle, gradient: "from-slate-700 to-black" },
];

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              Our Stack
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Technologies We Work With
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We select suitable, industry-standard technologies based on your
              project requirements — not one-size-fits-all.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative h-full bg-card rounded-2xl border border-border/50 p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} p-0.5 shrink-0`}
                  >
                    <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground truncate">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {tech.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            This section communicates technology experience, not official vendor
            partnerships. We only list technologies our team can confidently
            support.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
