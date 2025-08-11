import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Heart, MessageCircle, Pen } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Finding My Voice: A Journey from Conflict to Connection",
    excerpt:
      "How a simple conversation changed my perspective on conflict resolution and taught me the power of truly listening to others.",
    content:
      "It was during a heated neighborhood dispute that I first realized the transformative power of peaceful dialogue...",
    author: {
      name: "Meera Patel",
      avatar: "/images/diverse-smiles.png",
      bio: "Community mediator and peace advocate",
    },
    date: "2024-01-28",
    readTime: "8 min read",
    category: "Personal Stories",
    image: "/images/meditation-circle.png",
    tags: ["Personal Growth", "Mediation", "Community"],
    likes: 47,
    comments: 12,
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "The Art of Active Listening in Conflict Resolution",
      excerpt:
        "Discover practical techniques for truly hearing what others are saying, even in the midst of disagreement.",
      author: {
        name: "Dr. Rajesh Kumar",
        avatar: "/images/peaceful-hands.png",
        bio: "Conflict resolution specialist",
      },
      date: "2024-01-25",
      readTime: "6 min read",
      category: "Techniques",
      image: "/images/students-mediating.png",
      tags: ["Listening", "Communication", "Skills"],
      likes: 32,
      comments: 8,
    },
    {
      id: 3,
      title: "Building Bridges: Lessons from Our Community Garden",
      excerpt: "How working together in soil taught us about growing relationships and nurturing understanding.",
      author: {
        name: "Priya Sharma",
        avatar: "/images/community-garden-people.png",
        bio: "Community organizer and gardening enthusiast",
      },
      date: "2024-01-22",
      readTime: "5 min read",
      category: "Community Stories",
      image: "/images/community-garden-people.png",
      tags: ["Community", "Collaboration", "Growth"],
      likes: 28,
      comments: 15,
    },
    {
      id: 4,
      title: "Teaching Peace: Integrating Conflict Resolution in Schools",
      excerpt: "A teacher's perspective on bringing peace education into the classroom and empowering young minds.",
      author: {
        name: "Anita Verma",
        avatar: "/images/cultural-harmony.png",
        bio: "Educator and peace curriculum developer",
      },
      date: "2024-01-20",
      readTime: "7 min read",
      category: "Education",
      image: "/images/students-mediating.png",
      tags: ["Education", "Youth", "Curriculum"],
      likes: 41,
      comments: 19,
    },
    {
      id: 5,
      title: "Cultural Celebrations as Peacebuilding Tools",
      excerpt:
        "How festivals and cultural events can break down barriers and build lasting connections between communities.",
      author: {
        name: "Vikram Gupta",
        avatar: "/images/acoustic-community-night.png",
        bio: "Cultural event coordinator",
      },
      date: "2024-01-18",
      readTime: "4 min read",
      category: "Culture & Peace",
      image: "/images/cultural-harmony.png",
      tags: ["Culture", "Festivals", "Unity"],
      likes: 35,
      comments: 11,
    },
    {
      id: 6,
      title: "The Ripple Effect: How Small Acts Create Big Changes",
      excerpt: "Exploring how individual actions in our community have created waves of positive transformation.",
      author: {
        name: "Maya Singh",
        avatar: "/images/diverse-smiles.png",
        bio: "Social impact researcher",
      },
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Impact Stories",
      image: "/images/diverse-smiles.png",
      tags: ["Impact", "Change", "Community"],
      likes: 52,
      comments: 23,
    },
    {
      id: 7,
      title: "Mindfulness in Mediation: Being Present for Peace",
      excerpt: "How incorporating mindfulness practices can enhance the effectiveness of conflict resolution sessions.",
      author: {
        name: "Dr. Suresh Patel",
        avatar: "/images/meditation-circle.png",
        bio: "Mindfulness coach and mediator",
      },
      date: "2024-01-12",
      readTime: "5 min read",
      category: "Mindfulness",
      image: "/images/meditation-circle.png",
      tags: ["Mindfulness", "Meditation", "Practice"],
      likes: 29,
      comments: 7,
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Personal Stories", count: 8, active: false },
    { name: "Techniques", count: 6, active: false },
    { name: "Community Stories", count: 5, active: false },
    { name: "Education", count: 3, active: false },
    { name: "Culture & Peace", count: 2, active: false },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Personal Stories":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
      case "Techniques":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Community Stories":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Education":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "Culture & Peace":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      case "Mindfulness":
        return "bg-teal-100 text-teal-800 hover:bg-teal-200"
      case "Impact Stories":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Featured Post */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Story</h2>
            <p className="text-muted-foreground">A powerful story that's resonating with our community</p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">Featured</Badge>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>{featuredPost.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                      />
                      <AvatarFallback>
                        {featuredPost.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.author.bio}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                    Read Full Story
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

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Recent Posts</h2>
            <p className="text-muted-foreground">Latest insights and stories from our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback className="text-xs">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{post.author.bio}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0"
                    >
                      Read More
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
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Write for Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-8 md:p-12">
              <Pen className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Share Your Story</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Have a story about peace, conflict resolution, or community building? We'd love to feature your voice on
                our blog and inspire others with your journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  Submit Your Story
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Writing Guidelines
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                All submissions are reviewed by our editorial team. We celebrate diverse voices and perspectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
