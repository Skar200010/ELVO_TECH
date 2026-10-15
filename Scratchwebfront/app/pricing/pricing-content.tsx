"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/landing/motion-wrapper"
import { AnimatedButton } from "@/components/landing/animated-button"
import { Check, ArrowRight, Zap, Shield, Sparkles, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started online.",
    price: "999",
    popular: false,
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Custom 5-page website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "30-day support",
    ],
    notIncluded: ["E-commerce features", "Custom animations", "Priority support"],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses that need more power.",
    price: "2,499",
    popular: true,
    icon: Sparkles,
    gradient: "from-primary to-accent",
    features: [
      "Custom 10-page website",
      "Mobile-responsive design",
      "Advanced SEO optimization",
      "CMS integration",
      "Custom animations",
      "3 rounds of revisions",
      "90-day support",
      "Performance optimization",
    ],
    notIncluded: ["E-commerce features"],
  },
  {
    name: "Enterprise",
    description: "Full-scale solution for established businesses.",
    price: "5,999",
    popular: false,
    icon: Shield,
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Unlimited pages",
      "Mobile-responsive design",
      "Full SEO suite",
      "Custom CMS & admin panel",
      "Premium animations",
      "Unlimited revisions",
      "12-month support",
      "Performance optimization",
      "E-commerce integration",
      "Analytics dashboard",
    ],
    notIncluded: [],
  },
]

const faqs = [
  { question: "What's included in the initial consultation?", answer: "We discuss your business goals, target audience, design preferences, and technical requirements. You'll receive a detailed project proposal within 48 hours." },
  { question: "How long does a typical project take?", answer: "Starter projects take 2-3 weeks, Professional projects 4-6 weeks, and Enterprise projects 8-12 weeks depending on complexity." },
  { question: "Do you offer payment plans?", answer: "Yes! We offer flexible payment plans. Typically 50% upfront and 50% upon completion, but we can customize this to fit your needs." },
  { question: "What happens after my website launches?", answer: "You'll receive the agreed-upon support period with bug fixes, minor updates, and technical assistance. After that, we offer affordable maintenance plans." },
]

export function PricingContent() {
  return (
    <>
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
                Transparent Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Plans That{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Scale With You
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No hidden fees, no surprises. Choose the plan that fits your needs and budget. All plans include our signature design quality.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.15}>
                <motion.div
                  className={`relative h-full rounded-2xl border ${plan.popular ? "border-primary/50 shadow-xl shadow-primary/10" : "border-border"} overflow-hidden`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${plan.popular ? "pt-12" : ""} h-full flex flex-col`}>
                    <div className="mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} p-0.5 mb-4`}>
                        <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                          <plan.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">$</span>
                        <span className="text-4xl font-serif font-bold text-foreground">{plan.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">one-time project fee</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-muted-foreground/50">
                          <span className="w-5 h-5 shrink-0 mt-0.5 text-center">&times;</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <AnimatedButton
                      href="/contact"
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full justify-center"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </AnimatedButton>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                FAQ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Common Questions
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <details className="group bg-card/80 backdrop-blur-sm rounded-xl border border-border open:border-primary/30 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <span className="text-muted-foreground transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
