"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const defaultGradients = [
  "from-violet-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-indigo-500 to-blue-500",
];

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar_url?: string;
  social_links?: Record<string, string>;
}

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  website: Globe,
};

export function Team() {
  const [team, setTeam] = useState<TeamMemberData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayTeam = team.length > 0 ? team : [];

  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
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
              Our Team
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Meet The Experts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A talented group of designers, developers, and strategists dedicated to bringing your vision to life.
            </p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border/50 p-8 text-center animate-pulse"
              >
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                <div className="h-5 bg-muted rounded w-32 mx-auto mb-2" />
                <div className="h-4 bg-muted rounded w-24 mx-auto mb-4" />
                <div className="h-4 bg-muted rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTeam.map((member, index) => {
              const gradient = defaultGradients[index % defaultGradients.length];

              return (
                <StaggerItem key={member.id || member.name}>
                  <motion.div
                    className="group relative"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <div className="relative bg-card rounded-2xl border border-border/50 p-8 text-center shadow-lg overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                      </div>

                      <div className="relative z-10">
                        {member.avatar_url ? (
                          <motion.img
                            src={member.avatar_url}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-primary/20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        ) : (
                          <motion.div
                            className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradient} mx-auto mb-6 flex items-center justify-center`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-3xl font-bold text-white">
                              {member.name.charAt(0)}
                            </span>
                          </motion.div>
                        )}

                        <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-4">
                          {member.role}
                        </p>
                        {member.bio && (
                          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                            {member.bio}
                          </p>
                        )}

                        {member.social_links && Object.keys(member.social_links).length > 0 && (
                          <div className="flex items-center justify-center gap-3">
                            {Object.entries(member.social_links).map(([platform, url]) => {
                              const Icon = socialIcons[platform.toLowerCase()] || Globe;
                              return (
                                <motion.a
                                  key={platform}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Icon className="w-4 h-4" />
                                </motion.a>
                              );
                            })}
                          </div>
                        )}
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
