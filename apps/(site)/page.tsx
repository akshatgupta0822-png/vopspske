import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import InitiativesGrid from "@/components/initiatives-grid"
import ImpactStats from "@/components/impact-stats"
import Testimonials from "@/components/testimonials"
import NewsletterForm from "@/components/newsletter-form"
import FloatingChat from "@/components/floating-chat"
import BackgroundPattern from "@/components/background-pattern"
import SectionDivider from "@/components/section-divider"
import SectionReveal from "@/components/section-reveal"
import Link from "next/link"
import {
  HeartHandshake,
  Users,
  Globe,
  BookOpen,
  Quote,
  Award,
  Lightbulb,
  Target,
  Shield,
  Handshake,
} from "lucide-react"

const nobelPrizeWinners = [
  {
    name: "Mahatma Gandhi",
    year: "Nominated 5 times",
    contribution: "Non-violent resistance and civil rights",
    quote: "Be the change you wish to see in the world.",
    image: "🕉️",
  },
  {
    name: "Martin Luther King Jr.",
    year: "1964",
    contribution: "Civil rights through non-violent protest",
    quote: "Darkness cannot drive out darkness; only light can do that.",
    image: "✊🏿",
  },
  {
    name: "Nelson Mandela",
    year: "1993",
    contribution: "Peaceful transition from apartheid",
    quote: "Education is the most powerful weapon to change the world.",
    image: "🕊️",
  },
  {
    name: "Malala Yousafzai",
    year: "2014",
    contribution: "Education rights and women's empowerment",
    quote: "One child, one teacher, one book can change the world.",
    image: "📚",
  },
]

const peaceActions = [
  {
    title: "Listen Actively",
    description: "Practice deep listening to understand different perspectives",
    icon: HeartHandshake,
    color: "blue",
  },
  {
    title: "Mediate Conflicts",
    description: "Help resolve disputes through peaceful dialogue",
    icon: Users,
    color: "green",
  },
  {
    title: "Educate Others",
    description: "Share knowledge about peace-building and conflict resolution",
    icon: BookOpen,
    color: "purple",
  },
  {
    title: "Build Bridges",
    description: "Connect diverse communities and foster understanding",
    icon: Globe,
    color: "orange",
  },
]

const peacePillars = [
  {
    title: "Justice",
    description: "Ensuring fairness and equality for all",
    icon: Shield,
    color: "from-blue-100 to-indigo-100",
  },
  {
    title: "Dialogue",
    description: "Open communication and active listening",
    icon: Quote,
    color: "from-green-100 to-emerald-100",
  },
  {
    title: "Reconciliation",
    description: "Healing relationships and building trust",
    icon: Handshake,
    color: "from-purple-100 to-violet-100",
  },
  {
    title: "Education",
    description: "Learning and teaching peace-building skills",
    icon: BookOpen,
    color: "from-orange-100 to-amber-100",
  },
]

export default function HomePage() {
  return (
    <div className="relative">
      <BackgroundPattern />
      <FloatingChat />

      <Hero />

      <SectionDivider variant="wave" />

      {/* Nobel Peace Prize Winners */}
      <SectionReveal>
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 backdrop-blur-sm px-4 py-2 text-sm text-amber-700 mb-6">
                <Award className="w-4 h-4" />
                <span className="font-medium">Peace Champions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nobel Peace Prize Winners</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from the greatest peace-builders in history who dedicated their lives to creating a better world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nobelPrizeWinners.map((winner, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="text-4xl mb-4">{winner.image}</div>
                  <h3 className="font-bold text-lg mb-2">{winner.name}</h3>
                  <p className="text-sm text-amber-600 font-medium mb-3">{winner.year}</p>
                  <p className="text-sm text-muted-foreground mb-4">{winner.contribution}</p>
                  <blockquote className="text-xs italic text-gray-600 border-l-2 border-amber-300 pl-3">
                    "{winner.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionDivider />

      {/* Actions for Peace */}
      <SectionReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 backdrop-blur-sm px-4 py-2 text-sm text-emerald-700 mb-6">
                <Target className="w-4 h-4" />
                <span className="font-medium">Take Action</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ideas for Peace Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple yet powerful actions you can take today to contribute to peace in your community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {peaceActions.map((action, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-${action.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className={`w-6 h-6 text-${action.color}-600`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionDivider variant="dots" />

      {/* Pillars of Peace */}
      <SectionReveal>
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50/30 to-teal-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 backdrop-blur-sm px-4 py-2 text-sm text-emerald-700 mb-6">
                <Lightbulb className="w-4 h-4" />
                <span className="font-medium">Core Principles</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Four Pillars of Peace</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The fundamental principles that support lasting peace in communities and nations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {peacePillars.map((pillar, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group`}
                >
                  <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionDivider />

      {/* Our Initiatives - Shortened */}
      <SectionReveal>
        <section id="initiatives" className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local actions with global impact, designed for communities across India.
              </p>
            </div>
            <InitiativesGrid />
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/initiatives">View All Initiatives</Link>
              </Button>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionDivider />

      {/* Impact Stats */}
      <SectionReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ImpactStats />
          </div>
        </section>
      </SectionReveal>

      <SectionDivider variant="dots" />

      {/* Testimonials & Newsletter - Shortened */}
      <SectionReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Community Voices</h2>
                <Testimonials />
              </div>
              <div className="rounded-2xl border p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Stay Connected</h3>
                <p className="text-muted-foreground mb-6">
                  Get updates on events and stories of impact from our community.
                </p>
                <NewsletterForm />
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700 font-medium">
                    🌟 Join 1,200+ community members making a difference!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                <Link href="/about">Our Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/quiz">Test Your Knowledge</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
