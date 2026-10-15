import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"
import { AnimatedButton } from "@/components/landing/animated-button"
import { ArrowRight, Briefcase, Coffee, Heart, Users, Globe, Laptop, Palette, Code, BarChart } from "lucide-react"

export const metadata = {
  title: "Careers | ELVO Technologies",
  description: "Join the ELVO Technologies team and help build practical digital solutions for businesses.",
}

const benefits = [
  { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world. We trust you to do your best work wherever you are." },
  { icon: Coffee, title: "Flexible Hours", description: "Set your own schedule. We care about results, not when you sit at your desk." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance, mental health support, and wellness stipends." },
  { icon: Users, title: "Collaborative Culture", description: "Join a team that values open communication, feedback, and continuous learning." },
  { icon: Laptop, title: "Top-Notch Equipment", description: "Get the best tools for the job. We provide whatever you need to excel." },
  { icon: BarChart, title: "Growth Opportunities", description: "Clear career paths, mentorship programs, and budget for conferences and courses." },
]

const openRoles = [
  { title: "Senior Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time", icon: Code },
  { title: "UI/UX Designer", department: "Design", location: "Remote", type: "Full-time", icon: Palette },
  { title: "Full-Stack Developer", department: "Engineering", location: "Remote", type: "Full-time", icon: Laptop },
  { title: "Project Manager", department: "Operations", location: "Remote", type: "Full-time", icon: Briefcase },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                We&apos;re Hiring
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Build the Future{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  With Us
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join a team of passionate creators, developers, and strategists who are transforming how businesses show up online.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Why Join Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits That Matter
              </h2>
              <p className="text-lg text-muted-foreground">
                We invest in our team because great people build great products.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Open Positions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Find Your Role
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't see a perfect fit? We're always looking for talented people. Send us your resume anyway!
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-4">
            {openRoles.map((role, index) => (
              <FadeIn key={role.title} delay={index * 0.1}>
                <div className="group bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <role.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {role.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                  </div>
                  <AnimatedButton href="/contact" variant="outline" size="sm" className="shrink-0">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Drop us a message with your resume and tell us about yourself. We respond to every application.
              </p>
              <AnimatedButton href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
