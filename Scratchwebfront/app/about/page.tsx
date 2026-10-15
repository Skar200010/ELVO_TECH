import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"
import { AnimatedButton } from "@/components/landing/animated-button"
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Users,
  Puzzle,
  Heart,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "About Us | ELVO Technologies",
  description:
    "Learn about ELVO Technologies — our mission, vision, values, and what ELVO stands for. Empower. Leverage. Value. Opportunity.",
}

const acronym = [
  {
    letter: "E",
    word: "Empower",
    description: "Enable businesses through technology and digital tools.",
  },
  {
    letter: "L",
    word: "Leverage",
    description: "Make effective use of technology to improve processes.",
  },
  {
    letter: "V",
    word: "Value",
    description: "Focus on solutions that deliver meaningful business value.",
  },
  {
    letter: "O",
    word: "Opportunity",
    description:
      "Help businesses explore new opportunities through digital innovation.",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation and Continuous Learning",
    description:
      "We stay curious and keep learning so we can bring better ideas to every project.",
  },
  {
    icon: Award,
    title: "Quality-Focused Development",
    description:
      "We care about clean, reliable delivery that holds up after launch.",
  },
  {
    icon: Users,
    title: "Transparency and Collaboration",
    description:
      "We communicate clearly and work closely with you throughout development.",
  },
  {
    icon: Puzzle,
    title: "Practical Problem-Solving",
    description:
      "We focus on solutions that actually solve the problem at hand.",
  },
  {
    icon: Heart,
    title: "Long-Term Client Relationships",
    description:
      "We aim to be a dependable partner well beyond the first launch.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <img
                src="/elvo-logo.png"
                alt="ELVO Technologies"
                className="h-32 w-auto object-contain mx-auto mb-6"
              />
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About ELVO Technologies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Who{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  We Are
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ELVO Technologies is a technology solutions company focused on
                website development, custom software development, business
                applications, and digital transformation. We work with businesses
                to understand their challenges and develop digital solutions that
                improve how they operate, serve customers, and manage their
                workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our approach combines technical implementation with
                business-focused thinking, helping turn ideas into useful,
                reliable software.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What ELVO Stands For */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Identity
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                What ELVO Stands For
              </h2>
              <p className="text-lg text-muted-foreground">
                Empower • Leverage • Value • Opportunity
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {acronym.map((item, index) => (
              <FadeIn key={item.letter} delay={index * 0.1}>
                <div className="group h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-serif font-bold shadow-lg shadow-primary/20">
                    {item.letter}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {item.word}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver useful, reliable, and scalable digital solutions
                  that help businesses solve problems, improve efficiency, and
                  build stronger digital experiences.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted technology partner for businesses seeking
                  to innovate, adapt, and grow through digital solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every project we take on and every
                relationship we build.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Let&apos;s Build Something Together
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Have a website idea, a business process to improve, or a custom
                software requirement? Contact us to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton
                  href="/#services"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Explore Our Services
                </AnimatedButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
