"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";
import { AvatarWithFallback } from "./avatar-with-fallback";

const defaultGradients = [
  "from-pink-500 to-rose-500",
  "from-blue-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-violet-500 to-purple-500",
  "from-cyan-500 to-blue-500",
];

interface TestimonialData {
  id: string;
  client_name: string;
  client_role?: string;
  company?: string;
  content: string;
  rating: number;
  avatar_url?: string;
  is_featured?: boolean;
}

const defaultTestimonials: TestimonialData[] = [
  {
    id: "default-1",
    client_name: "Sarah Johnson",
    client_role: "CEO",
    company: "TechStart Inc.",
    content:
      "ELVO Technologies transformed our online presence completely. Our new website is fast, beautiful, and easy to manage.",
    rating: 5,
  },
  {
    id: "default-2",
    client_name: "Michael Chen",
    client_role: "Founder",
    company: "HealthCare Plus",
    content:
      "They understood our complex requirements and delivered a secure, reliable solution that our users love.",
    rating: 5,
  },
  {
    id: "default-3",
    client_name: "Emily Rodriguez",
    client_role: "Marketing Director",
    company: "FinanceFlow LLC",
    content:
      "The dashboard they built is incredible. Real-time data visualization and rock-solid performance.",
    rating: 5,
  },
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/testimonials?featured=true")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setTestimonials(list.length > 0 ? list : defaultTestimonials);
        setLoading(false);
      })
      .catch(() => {
        setTestimonials(defaultTestimonials);
        setLoading(false);
      });
  }, []);

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [50, 0, 50], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
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
              Testimonials
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to
              say about working with us.
            </p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border/50 p-8 animate-pulse"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => (
                    <div key={si} className="w-5 h-5 bg-muted rounded" />
                  ))}
                </div>
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-5/6 mb-8" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted" />
                  <div>
                    <div className="h-4 bg-muted rounded w-24 mb-2" />
                    <div className="h-3 bg-muted rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial, index) => {
              const gradient = defaultGradients[index % defaultGradients.length];
              const role = testimonial.client_role
                ? testimonial.company
                  ? `${testimonial.client_role}, ${testimonial.company}`
                  : testimonial.client_role
                : testimonial.company || "";

              return (
                <StaggerItem key={testimonial.id || testimonial.client_name}>
                  <motion.div
                    className="group relative h-full"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <div className="relative h-full bg-card rounded-2xl border border-border/50 p-8 shadow-lg overflow-hidden">
                      <motion.div
                        className="absolute top-6 right-6 text-primary/10"
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        <Quote className="w-16 h-16" />
                      </motion.div>

                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-foreground leading-relaxed mb-8 relative z-10">
                        &quot;{testimonial.content}&quot;
                      </p>

                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} p-0.5 overflow-hidden`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <AvatarWithFallback
                            src={testimonial.avatar_url}
                            alt={testimonial.client_name}
                            className="w-full h-full rounded-full object-cover"
                            fallback={
                              <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                                  {(testimonial.client_name || "?").charAt(0)}
                                </span>
                              </div>
                            }
                          />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.client_name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
