import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"

export const metadata = {
  title: "Terms of Service | ELVO Technologies",
  description: "ELVO Technologies' terms of service governing the use of our website and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: May 1, 2026
              </p>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using the ELVO Technologies website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      2. Services
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ELVO Technologies provides web development, design, and related digital services. The specific scope, deliverables, and timelines for each project will be defined in a separate agreement or statement of work.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      3. Client Responsibilities
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Clients agree to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Provide all necessary content, assets, and information in a timely manner</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Review and provide feedback on deliverables within agreed timeframes</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Make payments according to the agreed schedule</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Ensure they have rights to all content and materials provided</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      4. Payment Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Payment terms are outlined in the project agreement. Typically, a 50% deposit is required before work begins, with the remaining 50% due upon project completion. Late payments may result in project delays or suspension of services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      5. Intellectual Property
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon full payment, clients receive ownership of the final delivered website and its content. ELVO Technologies retains the right to display the work in our portfolio and marketing materials unless otherwise agreed in writing.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      6. Revisions
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The number of revision rounds included depends on the selected plan. Additional revisions beyond the included amount will be billed at our standard hourly rate.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      7. Limitation of Liability
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ELVO Technologies shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability shall not exceed the amount paid by the client for the specific project.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      8. Termination
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Either party may terminate the agreement with written notice. In the event of termination, the client shall pay for all work completed up to the termination date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      9. Governing Law
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These terms shall be governed by and construed in accordance with the laws of India (Maharashtra), without regard to its conflict of law provisions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      10. Contact
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms of Service, please contact us at <a href="mailto:elvotech10@gmail.com" className="text-primary hover:underline">elvotech10@gmail.com</a>.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
