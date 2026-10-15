import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"

export const metadata = {
  title: "Privacy Policy | ELVO Technologies",
  description: "ELVO Technologies' privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: May 1, 2026
              </p>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      1. Information We Collect
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Name and email address</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Phone number and company name</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Project details and requirements</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Any other information you choose to provide</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      2. How We Use Your Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Respond to your inquiries and provide support</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Send you newsletters and marketing communications (with your consent)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Improve our website and services</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      3. Information Sharing
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      4. Data Security
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      5. Cookies
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      6. Your Rights
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You have the right to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Access your personal data</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Correct inaccurate data</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Request deletion of your data</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">&bull;</span>Opt out of marketing communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      7. Contact Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have questions about this Privacy Policy, please contact us at <a href="mailto:elvotech10@gmail.com" className="text-primary hover:underline">elvotech10@gmail.com</a>.
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
