import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"

export const metadata = {
  title: "FAQ | ELVO Technologies",
  description: "Frequently asked questions about ELVO Technologies' services, process, and projects.",
}

const faqSections = [
  {
    title: "General",
    questions: [
      { q: "What is ELVO Technologies?", a: "ELVO Technologies is a technology solutions company focused on website development, custom software development, business applications, and digital transformation. We turn business requirements into practical digital products." },
      { q: "Where are you located?", a: "We are based in Andheri East, Mumbai, Maharashtra, India, and work with clients both locally and remotely." },
      { q: "What does ELVO stand for?", a: "ELVO stands for Empower, Leverage, Value, and Opportunity — the ideas that guide how we work with every client." },
    ],
  },
  {
    title: "Services & Projects",
    questions: [
      { q: "What services does ELVO Technologies provide?", a: "We offer website development, custom software, CRM and admin panels, e-commerce solutions, backend/API development, deployment, and maintenance." },
      { q: "Can you build a custom application for my business?", a: "Yes. We can discuss your requirements and define a suitable scope, features, timeline, and technical approach." },
      { q: "Can you improve or maintain an existing website?", a: "We can assess your existing website or application and discuss the required enhancements, fixes, and maintenance." },
      { q: "Do you provide hosting and deployment?", a: "We can help with deployment and supported hosting configurations. Hosting, domains, and third-party services depend on the project requirements." },
    ],
  },
  {
    title: "Working With Us",
    questions: [
      { q: "How can I get a quotation?", a: "Contact us with your project idea, required features, preferred timeline, and budget range. We can then discuss the scope and next steps." },
      { q: "How do I contact support?", a: "You can reach us via email at elvotech10@gmail.com, by phone at 7045878466 or 91466 01241, or through the contact form on our website." },
      { q: "How quickly do you respond to inquiries?", a: "We typically respond within 24 hours. For urgent matters, mention it in your message and we'll prioritize your request." },
    ],
  },
]

export default function FAQPage() {
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
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Got{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Questions?
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find answers to the most common questions about our services, process, and pricing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqSections.map((section, sectionIndex) => (
              <FadeIn key={section.title} delay={sectionIndex * 0.1}>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-card/80 backdrop-blur-sm rounded-xl border border-border open:border-primary/30 transition-colors"
                      >
                        <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                          <span className="font-medium text-foreground pr-4">{faq.q}</span>
                          <span className="text-muted-foreground transition-transform group-open:rotate-180 shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
