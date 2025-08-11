import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aarav",
    quote:
      "Peer mediation at Sagar Public School taught me to listen deeply and raise my voice constructively. It changed how I handle disagreements with friends.",
    avatar: "/portrait-avatar-man.png",
  },
  {
    name: "Ananya",
    quote:
      "Our community circle in Katara Extension helped neighbors open up and find common ground. Real change starts when we raise our voices together.",
    avatar: "/portrait-avatar-woman.png",
  },
  {
    name: "Rohan",
    quote:
      "Volunteering at Shahpura Lake cleanups brought our colony together—now we plan monthly peace circles where every voice is heard.",
    avatar: "",
  },
  {
    name: "Priya",
    quote:
      "Bringing music and poetry nights to Bhopal reminded me that the arts can heal and amplify voices for peace. We need more of this energy everywhere.",
    avatar: "",
  },
]

export default function Testimonials() {
  return (
    <div className="grid gap-4 sm:gap-6">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className="hover:shadow-xl transition-all duration-500 shadow-lg hover-lift hover:scale-102 group cursor-pointer border-emerald-100/30"
        >
          <CardContent className="p-4 sm:p-6 relative">
            <div className="flex items-start gap-3 sm:gap-4">
              <Avatar className="group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12">
                <AvatarImage src={t.avatar || "/placeholder.svg?height=80&width=80&query=avatar"} alt="Avatar" />
                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm">
                  {t.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs sm:text-sm group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 group-hover:text-emerald-700 transition-colors duration-300 font-medium">
                  — {t.name}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
