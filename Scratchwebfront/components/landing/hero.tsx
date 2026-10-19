"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Zap } from "lucide-react";
import { AnimatedButton, GlowButton } from "./animated-button";
import { FadeIn, Floating, BlurIn, ZoomIn } from "./motion-wrapper";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Experts" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  "Website Development",
  "Custom Software",
  "Business Applications",
  "Technology Solutions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Empower • Leverage • Value • Opportunity
              </span>
            </motion.div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              <span className="text-balance">
                Turning Your Ideas Into{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]">
                    Digital Solutions
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                        <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              We help businesses establish, improve, and grow their digital
              presence through modern websites, custom software, business
              applications, and technology solutions — turning your requirements
              into practical digital products.
            </p>
          </FadeIn>

          {/* Feature Pills */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <GlowButton href="#contact">
                Let&apos;s Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <AnimatedButton href="#services" variant="outline" size="lg">
                <Play className="w-5 h-5" />
                Explore Our Services
              </AnimatedButton>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Floating key={stat.label} distance={5} duration={3 + index * 0.5}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
                      <div className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                </Floating>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
