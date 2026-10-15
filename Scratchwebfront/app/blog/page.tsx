import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { FadeIn } from "@/components/landing/motion-wrapper"
import { AnimatedButton } from "@/components/landing/animated-button"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"

export const metadata = {
  title: "Blog | ELVO Technologies",
  description: "Insights, tips, and trends in web development, software, and digital business.",
}

const posts = [
  {
    title: "10 Web Design Trends to Watch in 2026",
    excerpt: "From AI-powered layouts to immersive 3D experiences, discover the trends shaping the future of web design.",
    category: "Design",
    date: "May 15, 2026",
    readTime: "8 min read",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Why Your Business Needs a Mobile-First Website",
    excerpt: "With over 60% of web traffic coming from mobile devices, a mobile-first approach isn't optional anymore.",
    category: "Strategy",
    date: "May 10, 2026",
    readTime: "6 min read",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "The Complete Guide to Website Performance Optimization",
    excerpt: "Learn how to make your website load faster, rank higher, and convert more visitors into customers.",
    category: "Development",
    date: "May 5, 2026",
    readTime: "12 min read",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "How to Choose the Right CMS for Your Business",
    excerpt: "WordPress, Shopify, or custom? We break down the pros and cons of each platform for different use cases.",
    category: "Strategy",
    date: "April 28, 2026",
    readTime: "10 min read",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Understanding Web Accessibility: A Practical Guide",
    excerpt: "Making your website accessible isn't just the right thing to do—it's good for business too.",
    category: "Development",
    date: "April 20, 2026",
    readTime: "9 min read",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "SEO in 2026: What's Changed and What Hasn't",
    excerpt: "Search engine optimization continues to evolve. Here's what you need to know to stay ahead.",
    category: "Marketing",
    date: "April 15, 2026",
    readTime: "7 min read",
    gradient: "from-indigo-500 to-blue-500",
  },
]

export default function BlogPage() {
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
                Blog & Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Stay{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  In The Know
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert insights on web development, design trends, and digital strategy to help your business grow online.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <FadeIn key={post.title} delay={index * 0.1}>
                <article className="group bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all h-full flex flex-col">
                  <div className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-serif font-bold text-white/30">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <AnimatedButton variant="outline" size="sm" className="w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Never Miss a Post
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest insights delivered straight to your inbox.
              </p>
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Subscribe Now
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
