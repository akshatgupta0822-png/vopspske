import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Play, Users, Star, Search, Filter, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  const featuredResources = [
    {
      id: 1,
      title: "Complete Guide to Peer Mediation",
      description:
        "A comprehensive 50-page guide covering everything from basic principles to advanced techniques for peer mediation in schools and communities.",
      type: "Guide",
      format: "PDF",
      pages: 50,
      downloads: 1247,
      rating: 4.8,
      category: "Mediation",
      image: "/images/students-mediating.png",
      featured: true,
    },
    {
      id: 2,
      title: "Conflict Resolution Toolkit",
      description:
        "Essential templates, worksheets, and checklists for mediators and community leaders to facilitate peaceful dialogue.",
      type: "Toolkit",
      format: "ZIP",
      pages: 25,
      downloads: 892,
      rating: 4.7,
      category: "Tools",
      image: "/images/peaceful-hands.png",
      featured: true,
    },
    {
      id: 3,
      title: "Building Peace in Schools Video Series",
      description:
        "A 6-part video series featuring real examples of successful peace-building initiatives in Indian schools.",
      type: "Video Series",
      format: "MP4",
      pages: 6,
      downloads: 634,
      rating: 4.9,
      category: "Education",
      image: "/images/cultural-harmony.png",
      featured: true,
    },
  ]

  const resourceCategories = [
    {
      name: "Mediation Guides",
      count: 12,
      resources: [
        {
          title: "Introduction to Community Mediation",
          type: "PDF Guide",
          downloads: 456,
          rating: 4.6,
        },
        {
          title: "Advanced Mediation Techniques",
          type: "PDF Guide",
          downloads: 234,
          rating: 4.8,
        },
        {
          title: "Cultural Sensitivity in Mediation",
          type: "PDF Guide",
          downloads: 189,
          rating: 4.7,
        },
      ],
    },
    {
      name: "Training Materials",
      count: 8,
      resources: [
        {
          title: "Facilitator Training Manual",
          type: "PDF Manual",
          downloads: 567,
          rating: 4.9,
        },
        {
          title: "Workshop Planning Templates",
          type: "Template Pack",
          downloads: 345,
          rating: 4.5,
        },
        {
          title: "Assessment Tools for Mediators",
          type: "Toolkit",
          downloads: 278,
          rating: 4.6,
        },
      ],
    },
    {
      name: "Community Resources",
      count: 15,
      resources: [
        {
          title: "Starting a Peace Circle",
          type: "How-to Guide",
          downloads: 789,
          rating: 4.8,
        },
        {
          title: "Event Planning Checklist",
          type: "Checklist",
          downloads: 456,
          rating: 4.4,
        },
        {
          title: "Community Outreach Templates",
          type: "Template Pack",
          downloads: 234,
          rating: 4.7,
        },
      ],
    },
    {
      name: "Research & Reports",
      count: 6,
      resources: [
        {
          title: "Impact of Peer Mediation in Schools",
          type: "Research Report",
          downloads: 123,
          rating: 4.9,
        },
        {
          title: "Community Peace-building Survey Results",
          type: "Data Report",
          downloads: 89,
          rating: 4.6,
        },
        {
          title: "Best Practices in Conflict Resolution",
          type: "White Paper",
          downloads: 156,
          rating: 4.8,
        },
      ],
    },
  ]

  const webinars = [
    {
      id: 1,
      title: "Effective Communication in Conflict Resolution",
      presenter: "Dr. Rajesh Kumar",
      date: "2024-02-15",
      duration: "60 minutes",
      attendees: 234,
      status: "upcoming",
      description: "Learn practical techniques for maintaining calm and productive dialogue during heated conflicts.",
    },
    {
      id: 2,
      title: "Building Inclusive Communities Through Peace Circles",
      presenter: "Priya Sharma",
      date: "2024-01-28",
      duration: "45 minutes",
      attendees: 189,
      status: "recorded",
      description: "Discover how peace circles can bring diverse community members together for meaningful dialogue.",
    },
    {
      id: 3,
      title: "Youth Leadership in Peace-building",
      presenter: "Anita Verma",
      date: "2024-01-15",
      duration: "50 minutes",
      attendees: 156,
      status: "recorded",
      description: "Empowering young people to become effective peace ambassadors in their schools and communities.",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mediation":
        return "bg-emerald-100 text-emerald-800"
      case "Tools":
        return "bg-blue-100 text-blue-800"
      case "Education":
        return "bg-purple-100 text-purple-800"
      case "Community":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "recorded":
        return "bg-green-100 text-green-800"
      case "live":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Featured Resources */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Featured Resources
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our most popular and comprehensive resources for peace-building and conflict resolution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={resource.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-teal-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">Featured</Badge>
                  <Badge className={`absolute top-4 right-4 ${getCategoryColor(resource.category)}`}>
                    {resource.category}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Badge variant="outline">{resource.format}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-700 transition-colors duration-300">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{resource.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <span>
                      {resource.pages} {resource.type === "Video Series" ? "videos" : "pages"}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Resource Library</h2>
              <p className="text-muted-foreground">Browse our comprehensive collection of peace-building materials</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-emerald-50 hover:border-emerald-300 bg-transparent"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-emerald-50 hover:border-emerald-300 bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            {resourceCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.name.toLowerCase().split(" ")[0]} className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.count} resources available</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.resources.map((resource, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CardContent className="p-4">
                            <h4 className="font-medium text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                              {resource.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500" />
                                <span>{resource.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Download className="w-4 h-4" />
                                <span>{resource.downloads}</span>
                              </div>
                              <Button
                                size="sm"
                                className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                              >
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Webinars & Training */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Webinars & Training
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our live sessions or access recorded training materials from expert facilitators
            </p>
          </div>

          <div className="grid gap-6">
            {webinars.map((webinar, index) => (
              <Card
                key={webinar.id}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getStatusColor(webinar.status)}>
                          {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{webinar.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {webinar.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{webinar.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {webinar.presenter}</span>
                          <span>{new Date(webinar.date).toLocaleDateString()}</span>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{webinar.attendees} attendees</span>
                          </div>
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                          {webinar.status === "upcoming" ? "Register" : "Watch Recording"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-8 md:p-12">
              <BookOpen className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need Something Specific?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Can't find the resource you're looking for? Let us know what you need and we'll work to create it for
                our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  Request Resource
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Contribute Content
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                All resources are created by our community of experts and practitioners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
