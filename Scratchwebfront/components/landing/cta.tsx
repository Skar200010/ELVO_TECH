"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "./motion-wrapper";
import { GlowButton, AnimatedButton } from "./animated-button";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Free Consultation
              </span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance mb-6">
              Let&apos;s Build Something Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Have a website idea, a business process to improve, or a custom
              software requirement? Contact ELVO Technologies to discuss your
              project.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="/contact">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <AnimatedButton
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Pricing
              </AnimatedButton>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={0.4}>
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>Free Consultation</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>No Hidden Fees</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>24/7 Support</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>100% Satisfaction</span>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
