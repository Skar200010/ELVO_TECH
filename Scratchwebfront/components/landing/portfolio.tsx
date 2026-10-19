"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const defaultGradients = [
  "from-orange-400 via-pink-500 to-purple-600",
  "from-blue-400 via-indigo-500 to-purple-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-amber-400 via-orange-500 to-red-600",
  "from-cyan-400 via-blue-500 to-indigo-600",
  "from-rose-400 via-pink-500 to-red-600",
];

interface Project {
  id: string;
  title: string;
  category: string;
  filter: string;
  overview: string;
  features: string[];
  experience: string;
  featured?: boolean;
  image?: string;
}

const filterCategories = [
  "All Projects",
  "Web Applications",
  "CRM & Admin Panels",
  "Billing & MIS",
  "E-commerce",
  "Mobile Apps",
  "Academic Projects",
  "UI Concepts",
];

const elvoProjects: Project[] = [
  {
    id: "neuberg-admin-panel",
    title: "Neuberg Admin Panel",
    category: "Admin & Web Application",
    filter: "CRM & Admin Panels",
    overview:
      "An administrative web application designed to support management workflows and centralized operations.",
    features: [
      "Admin workflows",
      "Data management",
      "Dashboard functionality",
      "Application integration",
    ],
    experience: "Previous team project",
    featured: true,
  },
  {
    id: "canimage-vendor-billing",
    title: "CanImage — Vendor Billing System",
    category: "Billing & MIS Platform",
    filter: "Billing & MIS",
    overview:
      "A vendor-oriented billing system supporting file uploads, vendor management, billing calculations, and MIS reporting.",
    features: [
      "Vendor management and vendor-wise file uploads",
      "Billing and MIS calculations",
      "Invoice-related data processing",
      "Excel report generation and data handling",
    ],
    experience: "Previous team project",
    featured: true,
  },
  {
    id: "election-ballot-link",
    title: "Election Ballot Link",
    category: "Election Application",
    filter: "Web Applications",
    overview:
      "An election-related web application involving frontend and backend development to support election workflow requirements.",
    features: [
      "Frontend implementation",
      "Backend functionality",
      "Application data handling",
      "Workflow development",
    ],
    experience: "Previous team project",
    featured: true,
  },
  {
    id: "ucs-crm",
    title: "UCS CRM",
    category: "CRM & Business Management",
    filter: "CRM & Admin Panels",
    overview:
      "A CRM platform involving administrative panels, business workflows, data management, and structured technical documentation.",
    features: [
      "CRM modules",
      "Management screens",
      "API integrations",
      "Database architecture",
      "Role-based workflows (where implemented)",
    ],
    experience: "Project discussed in development work",
    featured: true,
  },
  {
    id: "canimage-mis-lot",
    title: "CanImage — MIS & Lot Processing",
    category: "Data Processing & Reporting",
    filter: "Billing & MIS",
    overview:
      "A reporting and processing workflow involving uploaded files, lot tracking, client-specific MIS records, and billing data.",
    features: [
      "XLSX file uploads and processing",
      "Lot progress and process status tracking",
      "Client-specific MIS reports",
      "Invoice calculations and Excel exports",
      "Large-file and batch processing workflows",
    ],
    experience: "Previous team project/workstream",
  },
  {
    id: "trendkart",
    title: "TrendKart",
    category: "E-commerce & Fashion",
    filter: "E-commerce",
    overview:
      "A fashion discovery platform concept for showcasing clothing products and supporting affiliate commerce.",
    features: [
      "Clothing and sportswear catalogues",
      "Product listings and categories",
      "Blog and content management",
      "Affiliate product links",
      "Administrative product management",
    ],
    experience: "Personal/project concept",
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    category: "Real-Time Web Application",
    filter: "Web Applications",
    overview:
      "A chat application concept using web technologies and Socket.IO for real-time communication.",
    features: [
      "Messaging interface",
      "Real-time events",
      "Client-server communication",
      "Chat workflow implementation",
    ],
    experience: "Personal/learning project discussed",
  },
  {
    id: "stock-portfolio-tracker",
    title: "Stock Portfolio Tracker",
    category: "Finance Dashboard",
    filter: "Web Applications",
    overview:
      "A portfolio-tracking application concept for organizing investment holdings and presenting financial information.",
    features: [
      "Portfolio overview",
      "Holdings tables",
      "Performance visualization",
      "Transaction summaries",
    ],
    experience: "Concept discussed — confirm features before publishing",
  },
  {
    id: "online-examination-system",
    title: "Online Student Examination System",
    category: "Education Technology",
    filter: "Academic Projects",
    overview:
      "An online examination system based on ASP.NET and Microsoft SQL Server.",
    features: [
      "Examination workflows",
      "Application development",
      "Relational database integration",
    ],
    experience: "Academic/project experience",
  },
  {
    id: "e-learning-website",
    title: "E-Learning Website",
    category: "Education & Learning",
    filter: "Academic Projects",
    overview:
      "An educational website concept for presenting learning content and providing an online learning experience.",
    features: [
      "Course listings",
      "Learning content",
      "Student-facing pages",
      "Course navigation",
    ],
    experience: "Academic/project experience — confirm implemented features",
  },
  {
    id: "todo-mern",
    title: "To-Do List — MERN Stack",
    category: "Productivity Application",
    filter: "Web Applications",
    overview: "A task-management application based on the MERN stack.",
    features: [
      "Task creation",
      "Task lists",
      "Status management",
      "Frontend-backend integration",
    ],
    experience: "Personal/learning project",
  },
  {
    id: "lockbox-flutter",
    title: "LockBox — Flutter Application",
    category: "Mobile Application",
    filter: "Mobile Apps",
    overview:
      "A Flutter application project with setup, app-list, status, and Android platform integration components.",
    features: [
      "Flutter UI",
      "Setup wizard",
      "Application listing",
      "Status screens",
      "Native Android communication",
    ],
    experience: "Project in development/planning",
  },
  {
    id: "broker-application-ui",
    title: "Broker Application UI",
    category: "FinTech UI Concept",
    filter: "UI Concepts",
    overview:
      "A broker application interface concept inspired by modern trading applications.",
    features: [
      "Watchlist",
      "Market overview",
      "Stock details",
      "Portfolio",
      "Order-related screens",
    ],
    experience: "UI concept — not a live trading platform",
  },
  {
    id: "ucs-career-portal",
    title: "UCS Career Portal",
    category: "Recruitment & Careers",
    filter: "Web Applications",
    overview:
      "A career portal project concept for presenting opportunities and supporting job application workflows.",
    features: [
      "Job listings",
      "Application forms",
      "Candidate information",
      "Recruitment administration",
    ],
    experience: "Project discussed — verify implementation status",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const gradient = defaultGradients[index % defaultGradients.length];
  const palette = [
    ["#6366f1", "#ec4899"],
    ["#3b82f6", "#8b5cf6"],
    ["#10b981", "#06b6d4"],
    ["#f59e0b", "#ef4444"],
    ["#06b6d4", "#6366f1"],
    ["#f43f5e", "#f97316"],
  ][index % 6];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${palette[0]}'/><stop offset='100%' stop-color='${palette[1]}'/></linearGradient></defs><rect width='800' height='450' fill='url(#g)'/><text x='50%' y='46%' dominant-baseline='middle' text-anchor='middle' fill='rgba(255,255,255,0.9)' font-size='40' font-family='sans-serif' font-weight='700'>${project.title}</text><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' fill='rgba(255,255,255,0.7)' font-size='18' font-family='sans-serif'>${project.category}</text></svg>`;
  const imageSrc =
    project.image || `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <StaggerItem>
      <motion.div
        className="group relative h-full rounded-2xl"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        <div className="relative h-full bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg flex flex-col">
          {/* Visual */}
          <div className="aspect-[16/9] relative overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-7xl font-serif font-bold text-white/40 leading-none drop-shadow-lg">
                {project.title.charAt(0)}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 font-medium px-3 text-center">
                Project preview
              </span>
            </motion.div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              {project.overview}
            </p>

            <div className="mb-4">
              <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                Key areas
              </p>
              <ul className="space-y-1.5">
                {project.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1 leading-none">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/70">
                  Experience:
                </span>{" "}
                {project.experience}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const featuredProjects = elvoProjects.filter((p) => p.featured);
  const otherProjects = elvoProjects.filter((p) => !p.featured);

  const filtered =
    activeFilter === "All Projects"
      ? []
      : elvoProjects.filter((p) => p.filter === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              Our Work
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Our Work and Project Portfolio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A look at the kind of solutions our team has delivered. Projects
              are labelled with their true experience, and are not presented as
              ELVO Technologies clients.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-14 max-w-4xl mx-auto">
            {filterCategories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {activeFilter === "All Projects" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Featured */}
              <div className="mb-16">
                <h3 className="text-center text-lg font-serif font-bold text-foreground mb-8">
                  Selected Work
                </h3>
                <StaggerContainer className="grid md:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </StaggerContainer>
              </div>

              {/* Others */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    More Projects
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                    Personal, academic, in-development, and concept projects,
                    shared to show range of work.
                  </p>
                </div>
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length > 0 ? (
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </StaggerContainer>
              ) : (
                <p className="text-center text-muted-foreground py-12">
                  No projects in this category yet.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note */}
        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-muted-foreground mt-14 max-w-3xl mx-auto">
            Screenshots shown are illustrative placeholders and are not captures
            of the real systems. Live project visuals are only published where
            permission has been granted. Experience labels reflect the true
            nature of each project.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
