import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import SectionReveal from "@/components/section-reveal"
import { Calendar, Clock, User, ArrowRight, Newspaper, TrendingUp } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Voice for Peace Expands to 5 New Cities Across India",
    excerpt:
      "Our peace-building movement reaches new communities in Karnataka, Tamil Nadu, and West Bengal, bringing conflict resolution training to over 2,000 students.",
    category: "Expansion",
    author: "Priya Sharma",
    date: "2025-01-10",
    readTime: "4 min read",
    image: "/cultural-harmony.png",
    featured: true,
  },
  {
    id: 2,
    title: "Sagar Public School Students Win National Peace Ambassador Award",
    excerpt:
      "Three students from our Katara Extension chapter receive recognition for their outstanding peer mediation work and community leadership.",
    category: "Achievement",
    author: "Rahul Gupta",
    date: "2025-01-08",
    readTime: "3 min read",
    image: "/students-mediating.png",
    featured: false,
  },
  {
    id: 3,
    title: "Community Gardens Project Shows Remarkable Results",
    excerpt:
      "After 6 months, our community gardens in Bhopal have not only improved food security but also strengthened neighborhood bonds and reduced local conflicts by 40%.",
    category: "Impact",
    author: "Ananya Patel",
    date: "2025-01-05",
    readTime: "5 min read",
    image: "/community-garden-people.png",
    featured: false,
  },
  {
    id: 4,
    title: "New Partnership with UN Women for Gender-Inclusive Peace Building",
    excerpt:
      "Voice for Peace announces collaboration with UN Women to develop gender-sensitive conflict resolution programs for rural communities.",
    category: "Partnership",
    author: "Dr. Meera Singh",
    date: "2025-01-03",
    readTime: "6 min read",
    image: "/peaceful-hands.png",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Peace Platform Launches for Remote Communities",
    excerpt:
      "Our new online platform brings peace education and mediation services to remote areas, connecting over 50 villages across Madhya Pradesh.",
    category: "Technology",
    author: "Arjun Kumar",
    date: "2024-12-28",
    readTime: "4 min read",
    image: "/meditation-circle.png",
    featured: false,
  },
  {
    id: 6,
    title: "Annual Peace Festival Draws 10,000 Participants",
    excerpt:
      "The largest gathering in Voice for Peace history brings together communities from across India for three days of workshops, cultural exchange, and celebration.",
    category: "Events",
    author: "Kavya Reddy",
    date: "2024-12-25",
    readTime: "7 min read",
    image: "/acoustic-community-night.png",
    featured: false,
  },
]

const categories = ["All", "Expansion", "Achievement", "Impact", "Partnership", "Technology", "Events"]

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
      <div className="container mx-auto px-4 relative">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 backdrop-blur-sm px-4 py-2 text-sm text-blue-700 mb-6 hover:bg-blue-200/80 transition-all duration-300 hover:scale-102">
              <Newspaper className="w-4 h-4 animate-pulse" />
              <span className="font-medium">Latest Updates</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent hover:scale-102 transition-transform duration-300">
              News & Updates
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, achievements, and impact across communities in India and
              beyond.
            </p>
          </div>
        </SectionReveal>

        {/* Category Filter */}
        <SectionReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, i) => (
              <Button
                key={category}
                variant={i === 0 ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 hover:scale-102 ${
                  i === 0
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    : "bg-transparent hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured Article */}
        {featuredArticle && (
          <SectionReveal delay={150}>
            <Card className="mb-12 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <ScrollRevealImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <Badge variant="outline" className="group-hover:bg-blue-50 transition-colors duration-300">
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <Button className="group-hover:scale-105 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </SectionReveal>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, i) => (
            <SectionReveal key={article.id} delay={200 + i * 100}>
              <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-102 group">
                <div className="relative overflow-hidden">
                  <ScrollRevealImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-white group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 group-hover:text-gray-600 transition-colors duration-300">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        {/* Load More */}
        <SectionReveal delay={800}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Load More Articles
            </Button>
          </div>
        </SectionReveal>

        {/* Newsletter Signup */}
        <SectionReveal delay={900}>
          <Card className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, updates, and stories from the Voice for Peace
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </div>
  )
}
