"use client";

import { motion } from "framer-motion";
import { ClipboardList, PencilRuler, Code2, FlaskConical, Rocket, Headphones } from "lucide-react";
import { FadeIn } from "./motion-wrapper";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Discovery and Requirements",
    description:
      "We understand your business, objectives, users, and functional requirements.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Planning and Design",
    description:
      "We plan the application structure, user journeys, interface, and technical approach.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "We implement the frontend, backend, database, and integrations required by the project.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FlaskConical,
    step: "04",
    title: "Testing and Quality Checks",
    description:
      "We test the main workflows, validation, responsiveness, and error handling.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment and Handover",
    description:
      "We prepare the application for deployment and provide the agreed handover.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Ongoing Support",
    description:
      "We can discuss maintenance, fixes, and future improvements according to the agreed scope.",
    color: "from-indigo-500 to-blue-500",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [-100, 0, -100], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              Our Process
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A structured, transparent process that keeps your project on track
              from first conversation to launch and beyond.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Icon container */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                    </motion.div>

                    {/* Step number badge */}
                    <motion.span
                      className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    >
                      {step.step}
                    </motion.span>

                    {/* Pulse animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
