import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { ContactForm } from "@/components/landing/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | ELVO Technologies",
  description: "Get in touch with ELVO Technologies to discuss your website, software, or digital project.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Let&apos;s Build Something Together
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a website idea, a business process to improve, or a custom software requirement? Fill out the form below and we&apos;ll get back to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:elvotech10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        elvotech10@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call us</p>
                      <a href="tel:+917045878466" className="block text-muted-foreground hover:text-primary transition-colors">
                        7045878466
                      </a>
                      <a href="tel:+919146601241" className="block text-muted-foreground hover:text-primary transition-colors">
                        91466 01241
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Andheri East<br />
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Sat: 10AM - 7PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Quick Response
                </h3>
                <p className="text-primary-foreground/80">
                  We typically respond to all inquiries within 24 hours. For urgent projects, mention it in your message!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
