import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Peace Circle",
      description:
        "Join us for a monthly gathering where community members share stories, discuss challenges, and build connections through dialogue.",
      date: "2024-02-15",
      time: "6:00 PM - 8:00 PM",
      location: "Sagar Public School, Katara Extension",
      category: "Community",
      attendees: 45,
      image: "/images/meditation-circle.png",
      featured: true,
    },
    {
      id: 2,
      title: "Youth Leadership Workshop",
      description:
        "Empowering young voices through conflict resolution training, leadership skills, and peer mediation techniques.",
      date: "2024-02-20",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, New Delhi",
      category: "Workshop",
      attendees: 30,
      image: "/images/students-mediating.png",
      featured: false,
    },
    {
      id: 3,
      title: "Cultural Harmony Festival",
      description:
        "Celebrating diversity through music, art, and storytelling. A day of unity showcasing India's rich cultural tapestry.",
      date: "2024-03-01",
      time: "2:00 PM - 9:00 PM",
      location: "Central Park, Katara Extension",
      category: "Festival",
      attendees: 200,
      image: "/images/cultural-harmony.png",
      featured: true,
    },
    {
      id: 4,
      title: "Mindful Communication Training",
      description:
        "Learn the art of compassionate listening and non-violent communication in personal and professional relationships.",
      date: "2024-03-10",
      time: "9:00 AM - 1:00 PM",
      location: "Online & In-Person",
      category: "Training",
      attendees: 60,
      image: "/images/peaceful-hands.png",
      featured: false,
    },
    {
      id: 5,
      title: "Peace Garden Planting Day",
      description:
        "Come together to plant and nurture our community peace garden. A hands-on way to grow connections and green spaces.",
      date: "2024-03-15",
      time: "8:00 AM - 12:00 PM",
      location: "Community Garden, Katara Extension",
      category: "Community",
      attendees: 80,
      image: "/images/community-garden-people.png",
      featured: false,
    },
    {
      id: 6,
      title: "Storytelling for Social Change",
      description:
        "An evening of powerful stories from community members who have transformed conflict into connection and healing.",
      date: "2024-03-25",
      time: "7:00 PM - 9:30 PM",
      location: "Sagar Public School Auditorium",
      category: "Storytelling",
      attendees: 120,
      image: "/images/acoustic-community-night.png",
      featured: true,
    },
  ]

  const pastEvents = [
    {
      title: "Annual Peace Summit 2023",
      date: "2023-12-10",
      attendees: 300,
      impact: "Launched 5 new community initiatives",
    },
    {
      title: "Diwali Unity Celebration",
      date: "2023-11-12",
      attendees: 250,
      impact: "Brought together 15 different communities",
    },
    {
      title: "Gandhi Jayanti Peace Walk",
      date: "2023-10-02",
      attendees: 500,
      impact: "Raised awareness across 10 neighborhoods",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Community":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
      case "Workshop":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Festival":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Training":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "Storytelling":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mark your calendar and join us for these transformative community experiences
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  event.featured
                    ? "border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-teal-50/30"
                    : "hover:border-emerald-200"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`grid ${event.featured ? "lg:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
                  <div className={`${event.featured ? "lg:order-1" : "md:col-span-1"} relative overflow-hidden`}>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {event.featured && (
                      <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">
                        Featured Event
                      </Badge>
                    )}
                  </div>

                  <div className={`${event.featured ? "lg:order-2" : "md:col-span-2"} p-6`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-emerald-700 transition-colors duration-300">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>{event.location}</span>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                          Register Now
                        </Button>
                        <Button
                          variant="outline"
                          className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Impact */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Our Impact Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every event creates ripples of positive change in our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-emerald-700 transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                  <CardDescription>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-emerald-600">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold text-2xl">{event.attendees}</span>
                      <span className="text-muted-foreground">participants</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">{event.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/peaceful-hands.png')] bg-cover bg-center opacity-10" />
            <CardContent className="relative p-8 md:p-12 text-center">
              <Globe className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of peacemakers. Whether you want to attend events, volunteer, or host your own
                gathering, there's a place for your voice in our movement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-700 transition-all duration-300 hover:scale-105 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
