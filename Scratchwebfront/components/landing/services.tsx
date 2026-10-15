"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Code2,
  LayoutDashboard,
  Server,
  Cloud,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const iconMap: Record<string, typeof Globe> = {
  Globe,
  ShoppingCart,
  Code2,
  LayoutDashboard,
  Server,
  Cloud,
};

const defaultGradients = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-indigo-500 to-blue-500",
];

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

const elvoServices: ServiceData[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "We build responsive, modern websites that represent your brand, communicate your services, and provide a smooth experience across desktop, tablet, and mobile devices.",
    icon: "Globe",
    features: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "Portfolio websites",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "We develop software around your specific workflows and requirements, helping replace repetitive manual tasks with structured digital processes.",
    icon: "Code2",
    features: [
      "Business applications",
      "Workflow systems",
      "Internal tools",
      "Custom platforms",
    ],
  },
  {
    id: "crm-admin-panels",
    title: "CRM and Admin Panels",
    description:
      "We create centralized management systems for customer information, user permissions, records, reports, and business operations.",
    icon: "LayoutDashboard",
    features: [
      "CRM systems",
      "Admin dashboards",
      "User management",
      "MIS and reporting",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "We build online shopping experiences with product catalogues, category management, customer workflows, and integration with appropriate payment and delivery services.",
    icon: "ShoppingCart",
    features: [
      "Online stores",
      "Product catalogues",
      "Shopping workflows",
      "Store management",
    ],
  },
  {
    id: "backend-api",
    title: "Backend and API Development",
    description:
      "We build server-side functionality, database structures, authentication, and APIs to connect applications and support reliable data exchange.",
    icon: "Server",
    features: [
      "REST APIs",
      "Database design",
      "Authentication",
      "Third-party integrations",
    ],
  },
  {
    id: "cloud-deployment",
    title: "Cloud, Deployment and Maintenance",
    description:
      "We help deploy applications, configure supported hosting services, manage environment settings, and maintain software after launch.",
    icon: "Cloud",
    features: [
      "Cloud hosting",
      "Deployment",
      "Domain configuration",
      "Maintenance and support",
    ],
  },
];

export function Services() {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(Array.isArray(data) && data.length > 0 ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayServices = services.length > 0 ? services : elvoServices;

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background pointer-events-none" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
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
              What We Offer
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a professional business website to a custom CRM or complete
              e-commerce platform, we build solutions designed around your goals.
            </p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border/50 p-8 animate-pulse"
              >
                <div className="w-14 h-14 rounded-xl bg-muted mb-6" />
                <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                <div className="h-4 bg-muted rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayServices.map((service, index) => {
              const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Globe;
              const gradient = defaultGradients[index % defaultGradients.length];

              return (
                <StaggerItem key={service.id || service.title}>
                  <motion.div
                    className="group relative h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <div className="relative h-full bg-card rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                      </div>

                      <div className="relative z-10">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-0.5 mb-6`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                            <Icon
                              className={`w-7 h-7 bg-gradient-to-br ${gradient} bg-clip-text`}
                              style={{
                                stroke: "url(#icon-gradient)",
                              }}
                            />
                          </div>
                        </motion.div>

                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {service.features && service.features.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {service.features.slice(0, 3).map((feature, fi) => (
                              <li key={fi} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">&bull;</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}

                        <motion.div
                          className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <span>Learn more</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            &rarr;
                          </motion.span>
                        </motion.div>
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
