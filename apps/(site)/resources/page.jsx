import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import SectionReveal from "@/components/section-reveal"
import Link from "next/link"
import {
  Video,
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Users,
  Heart,
  Lightbulb,
  Play,
  Star,
} from "lucide-react"

const resourceCategories = [
  {
    title: "Peace Education Guides",
    description: "Comprehensive materials for teaching conflict resolution and peace-building skills",
    icon: GraduationCap,
    color: "blue",
    resources: [
      {
        title: "Conflict Resolution for Beginners",
        type: "PDF Guide",
        description: "A step-by-step guide to understanding and resolving conflicts peacefully",
        downloadUrl: "#",
        featured: true,
      },
      {
        title: "Active Listening Techniques",
        type: "Interactive Workbook",
        description: "Practical exercises to develop better listening skills",
        downloadUrl: "#",
        featured: false,
      },
      {
        title: "Peer Mediation Training Manual",
        type: "Training Material",
        description: "Complete curriculum for training student mediators",
        downloadUrl: "#",
        featured: false,
      },
    ],
  },
  {
    title: "Community Building Tools",
    description: "Resources for strengthening community bonds and fostering collaboration",
    icon: Users,
    color: "green",
    resources: [
      {
        title: "Community Garden Starter Kit",
        type: "Implementation Guide",
        description: "Everything you need to start a community garden project",
        downloadUrl: "#",
        featured: true,
      },
      {
        title: "Neighborhood Dialogue Facilitation",
        type: "Facilitator Guide",
        description: "Tools for organizing and leading community conversations",
        downloadUrl: "#",
        featured: false,
      },
      {
        title: "Cultural Exchange Planning Template",
        type: "Planning Template",
        description: "Framework for organizing intercultural events",
        downloadUrl: "#",
        featured: false,
      },
    ],
  },
  {
    title: "Mindfulness & Wellness",
    description: "Resources for inner peace and emotional well-being",
    icon: Heart,
    color: "purple",
    resources: [
      {
        title: "Mindfulness for Peace",
        type: "Meditation Guide",
        description: "Guided meditations and mindfulness practices for inner peace",
        downloadUrl: "#",
        featured: true,
      },
      {
        title: "Stress Management Techniques",
        type: "Wellness Guide",
        description: "Practical strategies for managing stress and anxiety",
        downloadUrl: "#",
        featured: false,
      },
      {
        title: "Emotional Intelligence Workbook",
        type: "Self-Assessment",
        description: "Tools for developing emotional awareness and regulation",
        downloadUrl: "#",
        featured: false,
      },
    ],
  },
]

const videoResources = [
  {
    title: "Introduction to Nonviolent Communication",
    duration: "15:30",
    thumbnail: "/students-mediating.png",
    description: "Learn the basics of compassionate communication",
    views: "2.3K",
  },
  {
    title: "Building Empathy in Communities",
    duration: "22:45",
    thumbnail: "/cultural-harmony.png",
    description: "Strategies for fostering understanding across differences",
    views: "1.8K",
  },
  {
    title: "Youth Leadership in Peace Building",
    duration: "18:20",
    thumbnail: "/peaceful-hands.png",
    description: "Empowering young people to become peace leaders",
    views: "3.1K",
  },
]

export default function ResourcesPage() {
  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-blue-50/20"></div>
      <div className="container mx-auto px-4 relative">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 backdrop-blur-sm px-4 py-2 text-sm text-green-700 mb-6 hover:bg-green-200/80 transition-all duration-300 hover:scale-102">
              <Lightbulb className="w-4 h-4 animate-pulse" />
              <span className="font-medium">Learning Resources</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent hover:scale-102 transition-transform duration-300">
              Educational Resources
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Free tools, guides, and materials to help you build peace in your community and personal life.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Video Section */}
        <SectionReveal delay={100}>
          <Card className="mb-16 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <ScrollRevealImage
                  src="/meditation-circle.png"
                  alt="Featured video thumbnail"
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 hover:bg-red-600 text-white">Featured Video</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  Peace Building Masterclass
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300">
                  A comprehensive introduction to peace building principles, featuring real-world examples from our
                  community work in India.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>Duration: 45:30</span>
                  <span>•</span>
                  <span>5.2K views</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5</span>
                  </div>
                </div>
                <Button className="group-hover:scale-105 transition-all duration-300 w-fit">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </CardContent>
            </div>
          </Card>
        </SectionReveal>

        {/* Resource Categories */}
        {resourceCategories.map((category, categoryIndex) => (
          <SectionReveal key={categoryIndex} delay={200 + categoryIndex * 100}>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card
                    key={resourceIndex}
                    className={`h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-102 group ${resource.featured ? `bg-gradient-to-br from-${category.color}-50 to-${category.color}-100/50` : ""}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-gray-800 transition-colors duration-300">
                            {resource.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge
                              variant="outline"
                              className={`text-xs group-hover:bg-${category.color}-50 transition-colors duration-300`}
                            >
                              {resource.type}
                            </Badge>
                            {resource.featured && (
                              <Badge
                                className={`text-xs bg-${category.color}-500 hover:bg-${category.color}-600 text-white`}
                              >
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div
                          className={`w-10 h-10 rounded-lg bg-${category.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <FileText className={`w-5 h-5 text-${category.color}-600`} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-gray-600 transition-colors duration-300">
                        {resource.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`w-full group-hover:bg-${category.color}-50 group-hover:border-${category.color}-300 transition-all duration-300`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}

        {/* Video Resources */}
        <SectionReveal delay={500}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Video Library</h2>
                <p className="text-muted-foreground">Educational videos and tutorials on peace building</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoResources.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-102 group"
                >
                  <div className="relative overflow-hidden">
                    <ScrollRevealImage
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="w-5 h-5 text-red-600 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-red-700 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 group-hover:text-gray-600 transition-colors duration-300">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video.views} views</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-red-50 transition-colors duration-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Call to Action */}
        <SectionReveal delay={600}>
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Custom Resources?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We can create customized training materials and resources for your organization or community. Contact us
                to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  <Link href="/contact">Request Custom Resources</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-emerald-50 hover:border-emerald-300"
                >
                  <Link href="/training">Book Training Session</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </div>
  )
}
