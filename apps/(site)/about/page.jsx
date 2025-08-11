import { Card, CardContent } from "@/components/ui/card"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import { Handshake, Globe, Leaf, MapPin, Building2, Users, Sparkles, Heart } from "lucide-react"
import SectionReveal from "@/components/section-reveal"

export default function Page() {
  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-50/20"></div>
      <div className="container mx-auto px-4 relative">
        {/* Enhanced Intro */}
        <SectionReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 backdrop-blur-sm px-4 py-2 text-sm text-emerald-700 mb-6 hover:bg-emerald-200/80 transition-all duration-300 hover:scale-105">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="font-medium">Our Story</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent hover:scale-105 transition-transform duration-300">
              About Voice for Peace
            </h1>
            <p className="text-muted-foreground mt-3 hover:text-gray-700 transition-colors duration-300">
              Voice for Peace is a grassroots collective amplifying stories, actions, and education that build a more
              just and peaceful world. We believe change begins with listening, learning, and acting together.
            </p>
          </div>
        </SectionReveal>

        {/* Enhanced Hero image */}
        <SectionReveal delay={120}>
          <div className="mt-12 mb-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <ScrollRevealImage
                src="/peaceful-hands.png"
                alt="Hands coming together in unity and peace, symbolizing collaboration and shared purpose"
                className="relative w-full max-w-2xl mx-auto h-64 object-cover rounded-xl group-hover:scale-105 transition-all duration-500 shadow-2xl"
                intensity={0.3}
              />
            </div>
          </div>
        </SectionReveal>

        {/* Enhanced Pillars */}
        <SectionReveal delay={160}>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Handshake,
                title: "Community",
                desc: "Building bridges across differences through dialogue and service.",
                color: "from-blue-100 to-indigo-100",
                iconColor: "text-blue-600",
              },
              {
                icon: Globe,
                title: "Global",
                desc: "A network of local chapters collaborating across regions.",
                color: "from-green-100 to-emerald-100",
                iconColor: "text-green-600",
              },
              {
                icon: Leaf,
                title: "Sustainable",
                desc: "Long-term programs rooted in care for people and planet.",
                color: "from-purple-100 to-violet-100",
                iconColor: "text-purple-600",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`hover:shadow-2xl transition-all duration-500 hover-lift hover:scale-105 group cursor-pointer transform-gpu bg-gradient-to-br ${item.color}`}
              >
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.iconColor} group-hover:animate-pulse`} />
                  </div>
                  <h3 className="mt-4 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 group-hover:text-gray-600 transition-colors duration-300">
                    {item.desc}
                  </p>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Enhanced Our Story */}
        <SectionReveal delay={220}>
          <div className="mt-14 grid gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-pulse" />
              <h2 className="text-2xl font-semibold heading-accent hover:scale-105 transition-transform duration-300">
                Our Story
              </h2>
            </div>
            <p className="text-muted-foreground hover:text-gray-700 transition-colors duration-300">
              Started by volunteers, we grew from a small listening circle into a global movement. Today, Voice for
              Peace runs training, storytelling, and community projects in over 20 cities.
            </p>
          </div>
        </SectionReveal>

        {/* Enhanced Theme & UN context */}
        <SectionReveal delay={260}>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 hover:scale-105 group">
            <h3 className="text-xl font-semibold flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-300">
              <Globe className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              Our Global Context
            </h3>
            <p className="text-muted-foreground mt-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              "Voice for Peace" can refer to various entities or movements advocating for peaceful resolutions to
              conflict and promoting peace-building initiatives. The{" "}
              <a
                href="https://www.un.org/peacebuilding/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-blue-700 hover:underline transition-colors duration-300"
              >
                United Nations
              </a>{" "}
              also highlights individuals and groups working for peace around the world—stories that showcase the power
              of art, community engagement, and grassroots activism in fostering peaceful societies. We align with the
              spirit of{" "}
              <a
                href="https://sdgs.un.org/goals/goal16"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-blue-700 hover:underline transition-colors duration-300"
              >
                SDG&nbsp;16: Peace, Justice and Strong Institutions
              </a>{" "}
              while building from local roots in India.
            </p>
          </div>
        </SectionReveal>

        {/* Enhanced Image */}
        <SectionReveal delay={300}>
          <div className="mt-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <ScrollRevealImage
                src="/meditation-circle.png"
                alt="People sitting in a peaceful meditation circle, representing mindfulness and community reflection"
                className="relative w-full max-w-xl mx-auto h-48 object-cover rounded-lg group-hover:scale-105 transition-all duration-500 shadow-2xl"
                intensity={0.4}
              />
            </div>
          </div>
        </SectionReveal>

        {/* Enhanced Chapters in India */}
        <SectionReveal delay={340}>
          <div id="chapters" className="mt-16">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-emerald-600 animate-pulse" />
              <h2 className="text-2xl font-semibold heading-accent hover:scale-105 transition-transform duration-300">
                Chapters in India
              </h2>
            </div>
            <p className="text-muted-foreground mt-2 max-w-3xl hover:text-gray-700 transition-colors duration-300">
              Our chapters connect local schools, neighborhoods, and community leaders to co-create spaces for dialogue
              and action. Here are two flagship city chapters actively hosting circles, trainings, and cultural nights:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Enhanced Delhi */}
              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover-lift group cursor-pointer bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transform-gpu">
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Building2 className="w-5 h-5 text-red-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold group-hover:text-red-700 transition-colors duration-300">
                      Delhi Chapter
                    </h3>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2 group-hover:text-gray-600 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-red-500" />
                    Connaught Place, New Delhi
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground flex items-center gap-2 group-hover:text-gray-600 transition-colors duration-300">
                    <Users className="w-4 h-4 text-red-500" />
                    Student mediators, arts collectives, RWAs
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 group-hover:text-gray-600 transition-colors duration-300">
                    Focus on youth mediation, neighborhood dialogues, and arts for peace in public spaces.
                  </p>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>

              {/* Enhanced Mumbai */}
              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover-lift group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transform-gpu">
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Building2 className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      Mumbai Chapter
                    </h3>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2 group-hover:text-gray-600 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Bandra–Kurla, Mumbai
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground flex items-center gap-2 group-hover:text-gray-600 transition-colors duration-300">
                    <Users className="w-4 h-4 text-blue-500" />
                    College clubs, housing societies, local artists
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 group-hover:text-gray-600 transition-colors duration-300">
                    Focus on community storytelling, coastal cleanups, and inclusive cultural nights.
                  </p>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
