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
    image: "/images/community-garden-people.png",
  },
  {
    title: "Youth Mediators Lead at SPS",
    excerpt: "Students at Sagar Public School reduce conflicts by listening first.",
    tag: "Youth",
    href: "#",
    image: "/images/students-mediating.png",
  },
  {
    title: "Music Night for Peace in MP",
    excerpt: "Bhopal artists and families gather for songs and stories of hope.",
    tag: "Arts",
    href: "#",
    image: "/images/acoustic-community-night.png",
  },
  {
    title: "Building Bridges Through Dialogue",
    excerpt: "How community circles transformed a divided neighborhood into a united community.",
    tag: "Dialogue",
    href: "#",
    image: "/images/peaceful-hands.png",
  },
  {
    title: "Cultural Harmony Festival",
    excerpt: "Celebrating diversity and unity through arts, music, and shared stories.",
    tag: "Culture",
    href: "#",
    image: "/images/cultural-harmony.png",
  },
  {
    title: "Meditation for Inner Peace",
    excerpt: "Finding calm and clarity through mindfulness practices in our community.",
    tag: "Mindfulness",
    href: "#",
    image: "/images/meditation-circle.png",
  },
]

export default function StoriesPage() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent">Stories of Peace</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Lived experiences from our Indian community — small actions, big impact. Real stories of transformation,
              hope, and unity.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {stories.map((story, i) => (
            <SectionReveal key={i} delay={i * 120}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift hover:scale-102 group">
                <div className="relative overflow-hidden">
                  <ScrollRevealImage
                    src={story.image}
                    alt={`Story: ${story.title}`}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-all duration-500"
                    intensity={0.3}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-white group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {story.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 group-hover:text-gray-600 transition-colors duration-300">
                    {story.excerpt}
                  </p>
                  <Link
                    className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline inline-block transition-colors duration-300 btn-press"
                    href={story.href}
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        {/* Call to Action */}
        <SectionReveal delay={800}>
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have a story of peace, transformation, or community building? We'd love to hear from you and share it with
              our community.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Submit Your Story
              </button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
