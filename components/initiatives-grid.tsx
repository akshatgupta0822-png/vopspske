import { Card, CardContent } from "@/components/ui/card"
import { HeartHandshake, BookOpenText, Music, Leaf, Users, Mic } from "lucide-react"
import SectionReveal from "@/components/section-reveal"

const items = [
  {
    icon: Mic,
    title: "Voice Amplification",
    desc: "Empowering communities to raise their voices for justice and peaceful change.",
  },
  {
    icon: HeartHandshake,
    title: "Conflict Mediation",
    desc: "Training circles to resolve disputes with empathy and accountability through dialogue.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    desc: "Equipping young people with skills to lead with care and raise their voices for peace.",
  },
  {
    icon: BookOpenText,
    title: "Peace Education",
    desc: "Workshops and resources to practice nonviolent communication and peaceful voices.",
  },
  {
    icon: Music,
    title: "Arts & Culture",
    desc: "Music, poetry, and storytelling that amplify diverse voices and bring people together.",
  },
  {
    icon: Leaf,
    title: "Community Care",
    desc: "Mutual aid and neighborly action where every voice matters for daily dignity.",
  },
]

export default function InitiativesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
      {items.map((it, i) => (
        <SectionReveal key={i} delay={i * 120}>
          <Card
            role="listitem"
            className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-lg border-0 bg-white group hover-lift cursor-pointer hover:scale-105 border-emerald-100/30"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <CardContent className="p-4 sm:p-6 relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-emerald-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <it.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 group-hover:text-emerald-700"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-emerald-800 transition-colors duration-300">
                {it.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {it.desc}
              </p>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </CardContent>
          </Card>
        </SectionReveal>
      ))}
    </div>
  )
}
