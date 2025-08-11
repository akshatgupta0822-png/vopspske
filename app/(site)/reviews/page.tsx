"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Search, ThumbsUp, MessageSquare, Users, GraduationCap, Heart, Award } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Student, Class 12",
    school: "Sagar Public School, Katara Extension",
    rating: 5,
    date: "2024-01-15",
    category: "Student",
    review:
      "Voice for Peace has completely transformed how we handle conflicts in our school. The peer mediation program taught me skills I use every day. I've helped resolve over 15 conflicts between classmates, and it feels amazing to be a peacemaker.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    school: "Delhi Public School, Dwarka",
    rating: 5,
    date: "2024-01-10",
    category: "Educator",
    review:
      "Implementing Voice for Peace programs in our school has reduced disciplinary issues by 60%. The students are more empathetic, and the overall school environment has become more positive and inclusive. Highly recommend to all educational institutions.",
    helpful: 31,
    verified: true,
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Parent",
    school: "Mother of 2 students",
    rating: 5,
    date: "2024-01-08",
    category: "Parent",
    review:
      "My children have become more understanding and patient after participating in Voice for Peace activities. They now resolve sibling conflicts peacefully and show more empathy towards others. This program is building better human beings.",
    helpful: 18,
    verified: true,
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "Youth Volunteer",
    school: "Community Leader, Bhopal",
    rating: 5,
    date: "2024-01-05",
    category: "Volunteer",
    review:
      "Being part of Voice for Peace has given me purpose and direction. I've organized 8 community dialogue sessions and seen neighbors who hadn't spoken in years come together. The training and support from the team is exceptional.",
    helpful: 22,
    verified: true,
  },
  {
    id: 5,
    name: "Mrs. Sunita Gupta",
    role: "Teacher",
    school: "Government Senior Secondary School",
    rating: 4,
    date: "2024-01-03",
    category: "Educator",
    review:
      "The peace education curriculum is well-designed and age-appropriate. Students are more engaged in discussions about conflict resolution. Would love to see more resources for rural schools like ours.",
    helpful: 15,
    verified: true,
  },
  {
    id: 6,
    name: "Rohit Mehta",
    role: "College Student",
    school: "Delhi University",
    rating: 5,
    date: "2023-12-28",
    category: "Student",
    review:
      "Started as a high school participant and now I'm a mentor. Voice for Peace shaped my career choice - I'm studying social work because of the impact I've seen. The community is like a family.",
    helpful: 27,
    verified: true,
  },
  {
    id: 7,
    name: "Dr. Meera Joshi",
    role: "Child Psychologist",
    school: "Independent Consultant",
    rating: 5,
    date: "2023-12-25",
    category: "Professional",
    review:
      "From a psychological perspective, Voice for Peace programs develop crucial emotional intelligence and social skills in children. The methodologies are evidence-based and the results are measurable.",
    helpful: 33,
    verified: true,
  },
  {
    id: 8,
    name: "Kavya Reddy",
    role: "Student Leader",
    school: "Kendriya Vidyalaya",
    rating: 5,
    date: "2023-12-20",
    category: "Student",
    review:
      "Leading our school's peace club has been the most rewarding experience. We've created a buddy system for new students and organized cultural harmony events. Every student deserves to feel safe and valued.",
    helpful: 19,
    verified: true,
  },
]

const categories = ["All", "Student", "Educator", "Parent", "Volunteer", "Professional"]
const sortOptions = ["Newest", "Oldest", "Highest Rating", "Most Helpful"]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Newest")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReviews = reviews
    .filter((review) => {
      const matchesCategory = selectedCategory === "All" || review.category === selectedCategory
      const matchesSearch =
        review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.school.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "Highest Rating":
          return b.rating - a.rating
        case "Most Helpful":
          return b.helpful - a.helpful
        default: // Newest
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((review) => review.rating === rating).length,
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Student":
        return <GraduationCap className="w-4 h-4" />
      case "Educator":
        return <Users className="w-4 h-4" />
      case "Parent":
        return <Heart className="w-4 h-4" />
      case "Volunteer":
        return <Award className="w-4 h-4" />
      case "Professional":
        return <Star className="w-4 h-4" />
      default:
        return <MessageSquare className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 to-teal-50/20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Community Reviews
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from students, educators, parents, and community members about their experience with Voice for Peace
            initiatives.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= Math.round(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{reviews.length}</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{reviews.filter((r) => r.verified).length}</div>
              <div className="text-sm text-muted-foreground">Verified Reviews</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Recommend Us</div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Distribution */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-600" />
              Rating Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(ratingDistribution[index] / reviews.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{ratingDistribution[index]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <p className="text-xs text-muted-foreground">{review.school}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {getCategoryIcon(review.category)}
                      <span className="ml-1">{review.category}</span>
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {new Date(review.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.helpful}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have you participated in Voice for Peace programs? We'd love to hear about your experience and how it has
              impacted your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Write a Review
              </Button>
              <Button variant="outline" className="hover:bg-emerald-50 hover:border-emerald-300 bg-transparent">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
