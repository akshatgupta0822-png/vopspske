import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import SectionReveal from "@/components/section-reveal"
import Link from "next/link"

const stories = [
  {
    title: "Neighbors to Friends in Bhopal",
    excerpt: "How a vacant lot in Katara Extension became food, friendship, and shared purpose.",
    tag: "Community",
    href: "#",
    image: "/community-garden-people.png",
  },
  {
    title: "Youth Mediators Lead at SPS",
    excerpt: "Students at Sagar Public School reduce conflicts by listening first.",
    tag: "Youth",
    href: "#",
    image: "/students-mediating.png",
  },
  {
    title: "Music Night for Peace in MP",
    excerpt: "Bhopal artists and families gather for songs and stories of hope.",
    tag: "Arts",
    href: "#",
    image: "/acoustic-community-night.png",
  },
]

export default function Page() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h1 className="text-3xl md:text-4xl font-semibold heading-accent">Stories</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Lived experiences from our Indian community — small actions, big impact.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {stories.map((s, i) => (
            <SectionReveal key={i} delay={i * 120}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-lift">
                <ScrollRevealImage
                  src={s.image || "/placeholder.svg?height=240&width=400&query=story-image"}
                  alt="Story cover"
                  className="w-full h-44 object-cover"
                  intensity={0.3}
                />
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {s.tag}
                  </Badge>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.excerpt}</p>
                  <Link className="text-sm text-emerald-700 hover:underline inline-block mt-3 btn-press" href={s.href}>
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
