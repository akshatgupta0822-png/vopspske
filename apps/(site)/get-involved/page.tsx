import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SectionReveal from "@/components/section-reveal"
import Link from "next/link"
import { Users, Calendar, MessageSquare, Heart, Handshake, Megaphone, Star } from "lucide-react"

const opportunities = [
  {
    title: "Community Mediator",
    description: "Help resolve conflicts in your neighborhood through peaceful dialogue",
    commitment: "2-4 hours/week",
    skills: ["Active listening", "Empathy", "Communication"],
    icon: Handshake,
    color: "blue",
  },
  {
    title: "Youth Mentor",
    description: "Guide young people in developing leadership and peace-building skills",
    commitment: "3-5 hours/week",
    skills: ["Mentoring", "Leadership", "Patience"],
    icon: Users,
    color: "green",
  },
  {
    title: "Event Organizer",
    description: "Plan and coordinate community events, workshops, and cultural nights",
    commitment: "5-8 hours/week",
    skills: ["Organization", "Planning", "Coordination"],
    icon: Calendar,
    color: "purple",
  },
  {
    title: "Content Creator",
    description: "Share stories and create content to inspire others toward peace",
    commitment: "2-3 hours/week",
    skills: ["Writing", "Creativity", "Social media"],
    icon: MessageSquare,
    color: "orange",
  },
]

const steps = [
  {
    step: "1",
    title: "Explore Opportunities",
    description: "Browse our volunteer roles and find what matches your interests and skills",
  },
  {
    step: "2",
    title: "Apply Online",
    description: "Fill out our simple application form and tell us about yourself",
  },
  {
    step: "3",
    title: "Attend Orientation",
    description: "Join our virtual or in-person orientation to learn about our mission",
  },
  {
    step: "4",
    title: "Start Making Impact",
    description: "Begin your journey as a peace-builder in your community",
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/20"></div>
      <div className="container mx-auto px-4 relative">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 backdrop-blur-sm px-4 py-2 text-sm text-emerald-700 mb-6">
              <Heart className="w-4 h-4" />
              <span className="font-medium">Join Our Movement</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of peace-builders across India working to create positive change in their communities.
            </p>
          </div>
        </SectionReveal>

        {/* Volunteer Opportunities */}
        <SectionReveal delay={100}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {opportunities.map((opportunity, i) => (
                <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${opportunity.color}-100 flex items-center justify-center`}
                      >
                        <opportunity.icon className={`w-6 h-6 text-${opportunity.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {opportunity.commitment}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Skills needed:</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* How to Get Started */}
        <SectionReveal delay={200}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">How to Get Started</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Call to Action */}
        <SectionReveal delay={300}>
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 text-center">
            <CardContent className="p-8">
              <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every voice matters in building a more peaceful world. Join our community of changemakers today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    <Megaphone className="w-4 h-4 mr-2" />
                    Start Your Journey
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/events">
                    <Calendar className="w-4 h-4 mr-2" />
                    Attend an Event
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
