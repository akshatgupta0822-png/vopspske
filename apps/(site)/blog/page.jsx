import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import SectionReveal from "@/components/section-reveal"
import { Calendar, Clock, User, ArrowRight, BookOpen, Heart, MessageSquare, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Active Listening: A Foundation for Peace",
    excerpt:
      "Discover how the simple act of truly listening can transform conflicts into opportunities for understanding and connection.",
    category: "Peace Skills",
    author: "Dr. Meera Singh",
    date: "2025-01-12",
    readTime: "8 min read",
    image: "/meditation-circle.png",
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: "Teaching Children Conflict Resolution: Lessons from Sagar Public School",
    excerpt:
      "How we're empowering young minds with the tools to resolve disputes peacefully and build stronger communities.",
    category: "Education",
    author: "Priya Sharma",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "/students-mediating.png",
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    title: "From Neighbors to Friends: The Power of Community Gardens",
    excerpt:
      "Exploring how shared spaces and common goals can bridge divides and create lasting bonds between diverse communities.",
    category: "Community",
    author: "Rahul Gupta",
    date: "2025-01-08",
    readTime: "5 min read",
    image: "/community-garden-people.png",
    likes: 156,
    comments: 24,
  },
  {
    id: 4,
    title: "Mindfulness and Inner Peace: Ancient Wisdom for Modern Conflicts",
    excerpt:
      "How traditional Indian practices of meditation and self-reflection can help us find peace within ourselves and our relationships.",
    category: "Mindfulness",
    author: "Ananya Patel",
    date: "2025-01-05",
    readTime: "7 min read",
    image: "/peaceful-hands.png",
    likes: 203,
    comments: 31,
  },
  {
    id: 5,
    title: "Music as a Universal Language of Peace",
    excerpt: "The transformative power of music and arts in bringing communities together and healing divisions.",
    category: "Arts & Culture",
    author: "Kavya Reddy",
    date: "2025-01-03",
    readTime: "4 min read",
    image: "/acoustic-community-night.png",
    likes: 78,
    comments: 9,
  },
  {
    id: 6,
    title: "Building Bridges: Interfaith Dialogue in Diverse Communities",
    excerpt:
      "Stories and strategies for fostering understanding and cooperation across religious and cultural boundaries.",
    category: "Interfaith",
    author: "Arjun Kumar",
    date: "2025-01-01",
    readTime: "9 min read",
    image: "/cultural-harmony.png",
    likes: 142,
    comments: 27,
  },
]

const categories = ["All", "Peace Skills", "Education", "Community", "Mindfulness", "Arts & Culture", "Interfaith"]

export default function BlogPage() {
  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20"></div>
      <div className="container mx-auto px-4 relative">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100/80 backdrop-blur-sm px-4 py-2 text-sm text-purple-700 mb-6 hover:bg-purple-200/80 transition-all duration-300 hover:scale-102">
              <BookOpen className="w-4 h-4 animate-pulse" />
              <span className="font-medium">Insights & Stories</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent hover:scale-102 transition-transform duration-300">
              Peace Blog
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Thoughtful reflections, practical guides, and inspiring stories from our community of peacemakers.
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "bg-transparent hover:bg-purple-50 hover:border-purple-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured Post */}
        <SectionReveal delay={150}>
          <Card className="mb-12 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <ScrollRevealImage
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 hover:bg-purple-600 text-white">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="group-hover:bg-purple-50 transition-colors duration-300">
                    {blogPosts[0].category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {blogPosts[0].likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {blogPosts[0].comments}
                      </div>
                    </div>
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, i) => (
            <SectionReveal key={post.id} delay={200 + i * 100}>
              <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-102 group">
                <div className="relative overflow-hidden">
                  <ScrollRevealImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-white group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 group-hover:text-gray-600 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                        <MessageSquare className="w-3 h-3" />
                        {post.comments}
                      </div>
                      <div className="flex items-center gap-1 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                        <Share2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 group-hover:bg-purple-50 transition-colors duration-300 justify-between"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
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
              className="bg-transparent hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Load More Posts
            </Button>
          </div>
        </SectionReveal>

        {/* Newsletter Signup */}
        <SectionReveal delay={900}>
          <Card className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to receive thoughtful insights, practical peace-building tips, and inspiring stories delivered
                to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
