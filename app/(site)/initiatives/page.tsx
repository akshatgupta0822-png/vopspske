import InitiativesGrid from "@/components/initiatives-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionReveal from "@/components/section-reveal"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import Link from "next/link"
import { Users, Calendar, MapPin, ArrowRight, Heart } from "lucide-react"

const featuredInitiatives = [
  {
    title: "Community Mediation Program",
    description:
      "Training local volunteers to resolve conflicts peacefully through structured dialogue and mediation techniques.",
    image: "/images/students-mediating.png",
    location: "Bhopal, Madhya Pradesh",
    participants: "150+ trained mediators",
    impact: "300+ conflicts resolved",
    category: "Conflict Resolution",
  },
  {
    title: "Youth Peace Ambassadors",
    description:
      "Empowering young leaders with skills to promote peace and understanding in their schools and communities.",
    image: "/images/peaceful-hands.png",
    location: "Multiple cities across India",
    participants: "500+ youth leaders",
    impact: "50+ schools engaged",
    category: "Youth Leadership",
  },
  {
    title: "Community Gardens for Unity",
    description:
      "Creating shared spaces where neighbors work together, building relationships while growing food and flowers.",
    image: "/images/community-garden-people.png",
    location: "Katara Extension, Bhopal",
    participants: "200+ families",
    impact: "15 gardens established",
    category: "Community Building",
  },
]

export default function InitiativesPage() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent">Our Initiatives</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              From conflict mediation to youth leadership, our initiatives create practical pathways to peace across
              Indian communities.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Initiatives */}
        <div className="mb-16">
          <SectionReveal delay={100}>
            <h2 className="text-2xl font-bold text-center mb-8">Featured Programs</h2>
          </SectionReveal>

          <div className="space-y-8">
            {featuredInitiatives.map((initiative, i) => (
              <SectionReveal key={i} delay={200 + i * 100}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <ScrollRevealImage
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {initiative.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300">
                        {initiative.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          {initiative.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-emerald-600" />
                          {initiative.participants}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Heart className="w-4 h-4 text-emerald-600" />
                          {initiative.impact}
                        </div>
                      </div>

                      <Button className="group-hover:scale-105 transition-all duration-300 w-fit">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* All Initiatives Grid */}
        <SectionReveal delay={500}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">All Our Initiatives</h2>
            <InitiativesGrid />
          </div>
        </SectionReveal>

        {/* Get Involved Section */}
        <SectionReveal delay={600}>
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Initiatives</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to make a difference in your community? Join one of our ongoing initiatives or help us start a new
                one in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  <Link href="/get-involved">
                    <Users className="w-4 h-4 mr-2" />
                    Get Involved
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-emerald-50 hover:border-emerald-300"
                >
                  <Link href="/contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Meeting
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </div>
  )
}
