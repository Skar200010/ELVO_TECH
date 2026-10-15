import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"
import { AnimatedButton } from "@/components/landing/animated-button"
import { PricingContent } from "./pricing-content"

export const metadata = {
  title: "Pricing | ELVO Technologies",
  description: "Transparent pricing plans for every business size. Start your project with ELVO Technologies today.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <PricingContent />
      <Footer />
    </main>
  )
}
