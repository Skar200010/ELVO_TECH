import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { LogoCloud } from "@/components/landing/logo-cloud"
import { Services } from "@/components/landing/services"
import { Technologies } from "@/components/landing/technologies"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Portfolio } from "@/components/landing/portfolio"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { Testimonials } from "@/components/landing/testimonials"
import { Team } from "@/components/landing/team"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <LogoCloud />
      <Services />
      <Technologies />
      <HowItWorks />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
