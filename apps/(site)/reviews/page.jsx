"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, ThumbsUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import SectionReveal from "@/components/section-reveal"

const existingReviews = [
  {
    id: "1",
    name: "Aarav S.",
    rating: 5,
    comment:
      "The mediation workshop at Sagar Public School changed how I resolve conflicts with classmates. Highly recommended!",
    date: "2025-01-15",
    helpful: 12,
    category: "Workshop",
  },
  {
    id: "2",
    name: "Ananya K.",
    rating: 5,
    comment:
      "Our daughter joined the youth leadership program in Bhopal. She’s more confident and a better listener now.",
    date: "2025-01-10",
    helpful: 8,
    category: "Youth Program",
  },
  {
    id: "3",
    name: "Rahul M.",
    rating: 4,
    comment:
      "Loved the community arts night near Shahpura Lake. It brought our colony together. Looking forward to more events!",
    date: "2025-01-05",
    helpful: 15,
    category: "Community Event",
  },
]

export default function Page() {
  const [reviews, setReviews] = useState(existingReviews)
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    category: "General",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newReview.name || !newReview.comment) {
      toast({ title: "Please fill in all fields", variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split("T")[0],
      helpful: 0,
    }

    setReviews([review, ...reviews])
    setNewReview({ name: "", rating: 5, comment: "", category: "General" })
    setIsSubmitting(false)

    toast({ title: "Review submitted!", description: "Thank you for your feedback." })
  }

  const renderStars = (rating, interactive = false, onChange) => {
    return (
      <div
        className="flex gap-1"
        role={interactive ? "radiogroup" : undefined}
        aria-label={interactive ? "Rating" : `Rating: ${rating} out of 5 stars`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform duration-200" : "cursor-default"}`}
            onClick={interactive && onChange ? () => onChange(star) : undefined}
            disabled={!interactive}
            aria-label={interactive ? `Rate ${star} stars` : undefined}
            role={interactive ? "radio" : undefined}
            aria-checked={interactive ? star <= rating : undefined}
          >
            <Star
              className={`w-5 h-5 transition-colors duration-200 ${
                star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 heading-accent">Community Reviews</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your experience with Voice for Peace in Bhopal and beyond.
            </p>
          </div>
        </SectionReveal>

        {/* Submit Review Form */}
        <SectionReveal delay={80}>
          <Card className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Share Your Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      aria-describedby="name-help"
                    />
                    <p id="name-help" className="text-xs text-muted-foreground mt-1">
                      Your name will be displayed with your review
                    </p>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      value={newReview.category}
                      onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="General">General</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Youth Program">Youth Program</option>
                      <option value="Community Event">Community Event</option>
                      <option value="Mediation">Mediation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium mb-2">
                    Your Review
                  </label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your experience with Voice for Peace..."
                    rows={4}
                    required
                    aria-describedby="comment-help"
                  />
                  <p id="comment-help" className="text-xs text-muted-foreground mt-1">
                    Please be respectful and constructive in your feedback
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="transition-all duration-200 hover:shadow-md btn-press"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </SectionReveal>

        {/* Reviews List */}
        <SectionReveal delay={140}>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">What Our Community Says</h2>
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{review.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {review.category}
                        </Badge>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <time className="text-sm text-muted-foreground" dateTime={review.date}>
                      {new Date(review.date).toLocaleDateString()}
                    </time>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{review.comment}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button
                      className="flex items-center gap-1 hover:text-foreground transition-colors duration-200"
                      aria-label={`Mark review as helpful (${review.helpful} people found this helpful)`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={220}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want to share more detailed feedback?</p>
            <Button
              asChild
              variant="outline"
              className="transition-all duration-200 hover:shadow-md bg-transparent btn-press"
            >
              <a href="/contact">Contact Us Directly</a>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
