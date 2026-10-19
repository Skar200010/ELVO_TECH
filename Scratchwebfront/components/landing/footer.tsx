"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Loader2, CheckCircle, AlertCircle, Send } from "lucide-react";
import { FadeIn } from "./motion-wrapper";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./brand-logo";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { label: "Website Development", href: "/#services" },
    { label: "Custom Software", href: "/#services" },
    { label: "CRM & Admin Panels", href: "/#services" },
    { label: "E-Commerce Solutions", href: "/#services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Technologies", href: "/#technologies" },
    { label: "Our Work", href: "/#portfolio" },
    { label: "Our Process", href: "/#process" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setMessage(data.message || "Successfully subscribed!");
      setIsError(false);
      setEmail("");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to subscribe");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <h4 className="font-semibold text-background mb-3">Subscribe to our newsletter</h4>
      <p className="text-background/50 text-sm mb-4">Get the latest updates and news delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </Button>
      </form>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 mt-3 text-sm ${isError ? "text-red-400" : "text-green-400"}`}
        >
          {isError ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
          <span>{message}</span>
        </motion.div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <FadeIn className="lg:col-span-2">
            <motion.a
              href="/"
              className="inline-flex mb-6 bg-white rounded-xl px-3 py-2 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <BrandLogo className="h-20 w-auto object-contain" />
            </motion.a>

            <p className="text-background/60 leading-relaxed max-w-sm mb-8">
              We help businesses turn ideas into practical digital solutions
              through website development, custom software, business
              applications, and modern technology.
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:elvotech10@gmail.com"
                className="flex items-center gap-3 text-background/60 hover:text-background transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>elvotech10@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+917045878466"
                className="flex items-center gap-3 text-background/60 hover:text-background transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>7045878466 | 91466 01241</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-background/60 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Andheri East, Mumbai, Maharashtra, India</span>
              </motion.div>
            </div>

            <NewsletterForm />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4 className="font-semibold text-background mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-1 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-semibold text-background mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="font-semibold text-background mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="py-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <FadeIn>
              <p className="text-background/50 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} ELVO Technologies. All rights reserved.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-primary/20 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
}
