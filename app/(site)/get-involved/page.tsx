import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedCounter from "@/components/animated-counter"
import {
  Users,
  Heart,
  Calendar,
  Award,
  Target,
  Globe,
  HandHeart,
  GraduationCap,
  Megaphone,
  Building,
  Star,
} from "lucide-react"

export default function GetInvolvedPage() {
  const volunteerRoles = [
    {
      id: 1,
      title: "Community Mediator",
      description: "Help resolve conflicts in your neighborhood through trained mediation techniques.",
      commitment: "4-6 hours/week",
      training: "40-hour certification program",
      impact: "Resolve 2-3 conflicts per month",
      requirements: ["Good listening skills", "Patience and empathy", "Commitment to neutrality"],
      icon: HandHeart,
      color: "emerald",
      featured: true,
    },
    {
      id: 2,
      title: "Youth Mentor",
      description: "Guide young people in developing leadership and conflict resolution skills.",
      commitment: "3-4 hours/week",
      training: "20-hour mentorship training",
      impact: "Mentor 5-8 youth per semester",
      requirements: ["Experience with youth", "Leadership background", "Positive role model"],
      icon: GraduationCap,
      color: "blue",
      featured: true,
    },
    {
      id: 3,
      title: "Event Coordinator",
      description: "Organize community events, workshops, and peace-building activities.",
      commitment: "5-8 hours/week",
      training: "Event planning workshop",
      impact: "Coordinate 2-3 events per quarter",
      requirements: ["Organizational skills", "Communication abilities", "Event planning experience"],
      icon: Calendar,
      color: "purple",
      featured: false,
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Spread awareness about peace-building initiatives and recruit new volunteers.",
      commitment: "2-3 hours/week",
      training: "Outreach and communication training",
      impact: "Reach 50+ community members monthly",
      requirements: ["Strong communication", "Social media savvy", "Networking skills"],
      icon: Megaphone,
      color: "orange",
      featured: false,
    },
    {
      id: 5,
      title: "Workshop Facilitator",
      description: "Lead training sessions on conflict resolution and peace-building techniques.",
      commitment: "6-8 hours/week",
      training: "Advanced facilitation certification",
      impact: "Train 20-30 people per month",
      requirements: ["Public speaking skills", "Subject matter expertise", "Teaching experience"],
      icon: Users,
      color: "teal",
      featured: true,
    },
    {
      id: 6,
      title: "Administrative Support",
      description: "Help with day-to-day operations, data management, and organizational tasks.",
      commitment: "3-5 hours/week",
      training: "Basic orientation program",
      impact: "Support 10+ active programs",
      requirements: ["Computer skills", "Attention to detail", "Reliability"],
      icon: Building,
      color: "pink",
      featured: false,
    },
  ]

  const impactStats = [
    {
      title: "Active Volunteers",
      value: 156,
      change: "+23%",
      icon: Users,
      color: "emerald",
    },
    {
      title: "Hours Contributed",
      value: 2847,
      change: "+31%",
      icon: Heart,
      color: "pink",
    },
    {
      title: "Communities Served",
      value: 28,
      change: "+15%",
      icon: Globe,
      color: "blue",
    },
    {
      title: "Lives Impacted",
      value: 1247,
      change: "+18%",
      icon: Target,
      color: "purple",
    },
  ]

  const volunteerBenefits = [
    {
      title: "Professional Development",
      description: "Gain valuable skills in mediation, leadership, and community organizing",
      icon: GraduationCap,
    },
    {
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals and community leaders",
      icon: Users,
    },
    {
      title: "Recognition & Certificates",
      description: "Receive official recognition and certificates for your contributions",
      icon: Award,
    },
    {
      title: "Personal Fulfillment",
      description: "Make a meaningful difference in your community and personal growth",
      icon: Heart,
    },
    {
      title: "Flexible Scheduling",
      description: "Choose volunteer opportunities that fit your schedule and availability",
      icon: Calendar,
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support from experienced mentors",
      icon: HandHeart,
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-100 text-emerald-800"
      case "blue":
        return "bg-blue-100 text-blue-800"
      case "purple":
        return "bg-purple-100 text-purple-800"
      case "orange":
        return "bg-orange-100 text-orange-800"
      case "teal":
        return "bg-teal-100 text-teal-800"
      case "pink":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Impact Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Our Volunteer Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the incredible difference our volunteers are making in communities across Delhi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-${stat.color}-100 group-hover:bg-${stat.color}-200 transition-colors duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      <AnimatedCounter end={stat.value} duration={2000} />
                    </div>
                    <div className="text-muted-foreground font-medium mb-2">{stat.title}</div>
                    <Badge className="bg-green-100 text-green-800 text-xs">{stat.change} this year</Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find the perfect way to contribute your skills and passion to building peaceful communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <Card
                  key={role.id}
                  className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    role.featured
                      ? "border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-teal-50/30"
                      : "hover:border-emerald-200"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${role.color}-100 group-hover:bg-${role.color}-200 transition-colors duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 text-${role.color}-600`} />
                      </div>
                      {role.featured && <Badge className="bg-emerald-600 hover:bg-emerald-700">Featured</Badge>}
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors duration-300">
                      {role.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{role.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Time Commitment:</span>
                        <Badge variant="outline">{role.commitment}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Training Required:</span>
                        <Badge variant="outline">{role.training}</Badge>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Expected Impact:</span>
                        <p className="text-emerald-700 font-medium mt-1">{role.impact}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the benefits and rewards of being part of our peace-building community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
                How to Get Started
              </h2>
              <p className="text-muted-foreground text-lg">
                Follow these simple steps to begin your volunteer journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description: "Fill out our volunteer application form with your interests and availability",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Interview & Matching",
                  description: "We'll schedule a brief interview to match you with the perfect role",
                  icon: HandHeart,
                },
                {
                  step: "3",
                  title: "Training Program",
                  description: "Complete our comprehensive training program for your chosen role",
                  icon: GraduationCap,
                },
                {
                  step: "4",
                  title: "Start Making Impact",
                  description: "Begin your volunteer work and start making a difference in your community",
                  icon: Star,
                },
              ].map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/diverse-smiles.png')] bg-cover bg-center opacity-10" />
            <CardContent className="relative p-8 md:p-12 text-center">
              <HandHeart className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of dedicated volunteers and help build a more peaceful world, one conversation at a
                time. Your voice and actions can create lasting change.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Apply to Volunteer
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-700 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Attend Info Session
                </Button>
              </div>
              <p className="text-emerald-100 text-sm mt-6">
                Questions? Contact our volunteer coordinator at volunteer@voiceforpeace.org
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
