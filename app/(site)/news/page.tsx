import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Newspaper } from "lucide-react"

export default function NewsPage() {
  const featuredNews = {
    id: 1,
    title: "Sagar Public School Students Lead Peace Initiative Across Delhi",
    excerpt:
      "Students from Sagar Public School, Katara Extension, have successfully launched a peer mediation program that's now being adopted by 15 other schools across Delhi.",
    content:
      "In a remarkable display of youth leadership, students from Sagar Public School have created a comprehensive peer mediation program that addresses conflicts through dialogue and understanding...",
    author: "Priya Sharma",
    date: "2024-01-28",
    readTime: "5 min read",
    category: "Youth Leadership",
    image: "/images/students-mediating.png",
    tags: ["Education", "Youth", "Delhi", "Mediation"],
  }

  const recentNews = [
    {
      id: 2,
      title: "Community Garden Project Brings Neighbors Together in Katara Extension",
      excerpt:
        "The new community garden has become a symbol of unity, with families from different backgrounds working side by side to grow both plants and relationships.",
      author: "Rajesh Kumar",
      date: "2024-01-25",
      readTime: "3 min read",
      category: "Community",
      image: "/images/community-garden-people.png",
      tags: ["Community", "Environment", "Unity"],
    },
    {
      id: 3,
      title: "Cultural Harmony Festival Celebrates India's Diversity",
      excerpt:
        "Over 500 community members gathered to celebrate the rich tapestry of Indian culture through music, dance, and storytelling from different regions.",
      author: "Anita Verma",
      date: "2024-01-22",
      readTime: "4 min read",
      category: "Culture",
      image: "/images/cultural-harmony.png",
      tags: ["Culture", "Festival", "Diversity"],
    },
    {
      id: 4,
      title: "New Conflict Resolution Training Program Launches",
      excerpt:
        "Professional mediators are now offering free training sessions to community members, teaching essential skills for peaceful conflict resolution.",
      author: "Dr. Suresh Patel",
      date: "2024-01-20",
      readTime: "6 min read",
      category: "Training",
      image: "/images/peaceful-hands.png",
      tags: ["Training", "Skills", "Mediation"],
    },
    {
      id: 5,
      title: "Monthly Peace Circles Show Growing Community Engagement",
      excerpt:
        "Attendance at monthly peace circles has doubled over the past six months, with participants reporting improved relationships and communication skills.",
      author: "Maya Singh",
      date: "2024-01-18",
      readTime: "4 min read",
      category: "Community",
      image: "/images/meditation-circle.png",
      tags: ["Community", "Growth", "Engagement"],
    },
    {
      id: 6,
      title: "Local Business Leaders Join Peace-Building Initiative",
      excerpt:
        "Prominent business leaders from the area have pledged support for community peace programs, offering resources and mentorship opportunities.",
      author: "Vikram Gupta",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Partnership",
      image: "/images/diverse-smiles.png",
      tags: ["Business", "Partnership", "Support"],
    },
  ]

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Community", count: 8, active: false },
    { name: "Youth Leadership", count: 6, active: false },
    { name: "Culture", count: 4, active: false },
    { name: "Training", count: 3, active: false },
    { name: "Partnership", count: 3, active: false },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Community":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
      case "Youth Leadership":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Culture":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Training":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "Partnership":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Featured Article */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Story</h2>
            <p className="text-muted-foreground">Highlighting the most impactful story from our community</p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">Featured</Badge>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getCategoryColor(featuredNews.category)}>{featuredNews.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {featuredNews.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{featuredNews.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>By {featuredNews.author}</span>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105 group">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  category.active
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "hover:bg-emerald-50 hover:border-emerald-300"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Recent Updates</h2>
            <p className="text-muted-foreground">Latest news and developments from our peace-building community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article, index) => (
              <Card
                key={article.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString()}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 group p-0"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-8 md:p-12">
              <Newspaper className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest news and stories delivered to your inbox. Join our community of informed peacemakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
