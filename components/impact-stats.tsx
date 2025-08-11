import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Globe, Award, Mic, BookOpen } from "lucide-react"
import AnimatedCounter from "./animated-counter"

const stats = [
  {
    icon: Mic,
    number: 1200,
    label: "Voices Amplified",
    description: "Community members actively participating in peace dialogues",
    suffix: "+",
  },
  {
    icon: Users,
    number: 28,
    label: "Active Chapters",
    description: "Local chapters across India raising voices for peace",
    suffix: "",
  },
  {
    icon: Heart,
    number: 850,
    label: "Conflicts Resolved",
    description: "Peaceful resolutions through mediation and dialogue",
    suffix: "+",
  },
  {
    icon: BookOpen,
    number: 45,
    label: "Peace Workshops",
    description: "Educational sessions empowering communities to speak up",
    suffix: "",
  },
  {
    icon: Globe,
    number: 12,
    label: "Partner Schools",
    description: "Educational institutions amplifying student voices",
    suffix: "",
  },
  {
    icon: Award,
    number: 95,
    label: "Success Rate",
    description: "Effective peaceful outcomes in community interventions",
    suffix: "%",
  },
]

export default function ImpactStats() {
  return (
    <div className="text-center">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default text-gradient">
          Voices Making Impact
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300 text-shadow">
          Every voice matters in building a more peaceful world. Here's how our community is making a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, i) => (
          <Card
            key={i}
            className="premium-card hover:shadow-2xl transition-all duration-500 shadow-lg hover-lift hover:scale-105 group cursor-pointer border-emerald-100/30 interactive-card"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <CardContent className="p-4 sm:p-6 text-center relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md animate-pulse-glow">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:animate-pulse" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-700 mb-1 sm:mb-2 group-hover:text-emerald-800 transition-colors duration-300">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2000 + i * 200} />
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {stat.description}
              </p>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
