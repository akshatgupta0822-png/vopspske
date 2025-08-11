import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import InitiativesGrid from "@/components/initiatives-grid"
import ImpactStats from "@/components/impact-stats"
import Testimonials from "@/components/testimonials"
import NewsletterForm from "@/components/newsletter-form"
import FloatingChat from "@/components/floating-chat"
import BackgroundPattern from "@/components/background-pattern"
import SectionDivider from "@/components/section-divider"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="relative">
      <BackgroundPattern />
      <FloatingChat />

      <Hero />

      <SectionDivider variant="wave" />

      {/* Community Showcase */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Our Community in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Real stories from real people making a difference in their communities across India, starting from our
              partnership with Sagar Public School, Katara Extension.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="group hover:scale-105 transition-all duration-500">
              <ScrollRevealImage
                src="/images/community-garden-people.png"
                alt="Community members working together in a garden, showing collaboration and shared purpose"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
              />
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Growing Together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Community gardens in Katara Extension bring neighbors together, fostering connections that last beyond
                  harvest season. Students from Sagar Public School lead these initiatives.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="group hover:scale-105 transition-all duration-500">
              <ScrollRevealImage
                src="/images/students-mediating.png"
                alt="Young students engaged in peer mediation training, learning conflict resolution skills"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
              />
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Youth Leadership
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Training the next generation of peacemakers through hands-on mediation and leadership skills,
                  combining modern techniques with traditional Indian values of harmony.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all duration-300 bg-transparent"
                >
                  Join Program
                </Button>
              </div>
            </div>
            <div className="group hover:scale-105 transition-all duration-500">
              <ScrollRevealImage
                src="/images/acoustic-community-night.png"
                alt="Community members gathered for an acoustic music night, sharing stories and songs"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
              />
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Arts & Connection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Music and storytelling create spaces where different voices can harmonize and heal. Our cultural
                  events celebrate India's rich tradition of unity in diversity.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all duration-300 bg-transparent"
                >
                  Attend Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Indian Heritage Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50/30 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
              Rooted in Indian Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our peace-building approach draws inspiration from India's ancient wisdom of <em>Ahimsa</em>{" "}
              (non-violence) and <em>Sarvodaya</em> (welfare of all), creating culturally relevant solutions for modern
              conflicts.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">🕉️</div>
                <h3 className="font-bold text-lg mb-2">Ahimsa</h3>
                <p className="text-sm text-muted-foreground">Non-violence in thought, word, and action</p>
              </div>
              <div className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-lg mb-2">Sarvodaya</h3>
                <p className="text-sm text-muted-foreground">Welfare and progress of all beings</p>
              </div>
              <div className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="font-bold text-lg mb-2">Vasudhaiva Kutumbakam</h3>
                <p className="text-sm text-muted-foreground">The world is one family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="initiatives" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
                Our Initiatives
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Local actions with global impact, designed for Indian communities and schools like Sagar Public School.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent hover:shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105"
            >
              <Link href="/initiatives">Explore All Initiatives</Link>
            </Button>
          </div>
          <InitiativesGrid />
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactStats />
        </div>
      </section>

      <SectionDivider variant="dots" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Testimonials />
            <div className="rounded-2xl border p-8 md:p-10 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Connected</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Get updates on events, initiatives, and stories of impact from our community across India.
              </p>
              <NewsletterForm />
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-700 font-medium">
                  🌟 Join 1,200+ community members already making a difference!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/events">Upcoming Events</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
