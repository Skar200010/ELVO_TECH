"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Cpu,
  MonitorSmartphone,
  MessagesSquare,
  LifeBuoy,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Stethoscope,
  HeartHandshake,
  ReceiptText,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const reasons = [
  {
    icon: Building2,
    title: "Business-Focused Solutions",
    description: "We begin by understanding your requirements.",
  },
  {
    icon: Wrench,
    title: "Custom Development",
    description: "We tailor features and workflows to the needs of your project.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    description: "We select suitable technologies based on project requirements.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Experiences",
    description: "We design for desktop, tablet, and mobile devices.",
  },
  {
    icon: MessagesSquare,
    title: "Collaborative Approach",
    description:
      "We encourage clear communication and feedback throughout development.",
  },
  {
    icon: LifeBuoy,
    title: "Support Beyond Launch",
    description:
      "Maintenance and improvements can be planned as part of the engagement.",
  },
];

const industries = [
  { icon: ShoppingBag, label: "Retail and e-commerce" },
  { icon: Briefcase, label: "Professional and business services" },
  { icon: GraduationCap, label: "Education and training" },
  { icon: Stethoscope, label: "Healthcare administration" },
  { icon: HeartHandshake, label: "Non-profit and social-impact organizations" },
  { icon: ReceiptText, label: "Operations, billing, and vendor management" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
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
              Why ELVO
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Why Choose ELVO Technologies?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on understanding your business requirements and delivering
              solutions that are practical, maintainable, and designed around your
              goals.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-card rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Industries */}
        <FadeIn delay={0.2}>
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Industries We Can Support
              </h3>
              <p className="text-muted-foreground">
                Sectors we are positioned to serve — not a claim of existing
                clients in each area.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-secondary/50 rounded-xl border border-border/50 p-4"
                >
                  <industry.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {industry.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
