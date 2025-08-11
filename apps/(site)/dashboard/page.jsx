"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  Heart,
  Award,
  Clock,
  MapPin,
  Activity,
  BarChart3,
  PieChartIcon as PieIcon,
} from "lucide-react"
import Link from "next/link"
import SectionReveal from "@/components/section-reveal"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts"

const stats = [
  { label: "Active Members", value: "1,247", change: "+12%", icon: Users, color: "text-emerald-600" },
  { label: "Events This Month", value: "8", change: "+3", icon: Calendar, color: "text-blue-600" },
  { label: "Reviews", value: "156", change: "+24", icon: MessageSquare, color: "text-purple-600" },
  { label: "Impact Score", value: "94%", change: "+5%", icon: TrendingUp, color: "text-orange-600" },
]

const recentActivities = [
  {
    id: 1,
    type: "event",
    title: "Peace Circle Workshop",
    location: "Sagar Public School, Katara Extension",
    time: "2 hours ago",
    participants: 24,
  },
  {
    id: 2,
    type: "review",
    title: "New 5-star review received",
    location: "Youth Leadership Program",
    time: "4 hours ago",
    participants: null,
  },
  {
    id: 3,
    type: "milestone",
    title: "1000+ Mediations Completed",
    location: "Global Network",
    time: "1 day ago",
    participants: null,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Community Dialogue Session",
    date: "Dec 15, 2025",
    time: "10:00 AM",
    location: "Sagar Public School",
    registered: 18,
    capacity: 25,
  },
  {
    id: 2,
    title: "Youth Mediation Training",
    date: "Dec 18, 2025",
    time: "2:00 PM",
    location: "Community Center, Katara Extension",
    registered: 12,
    capacity: 20,
  },
]

// Chart data
const monthlyData = [
  { month: "Jan", participants: 120, events: 2 },
  { month: "Feb", participants: 160, events: 3 },
  { month: "Mar", participants: 220, events: 4 },
  { month: "Apr", participants: 190, events: 3 },
  { month: "May", participants: 260, events: 5 },
  { month: "Jun", participants: 300, events: 6 },
  { month: "Jul", participants: 280, events: 4 },
  { month: "Aug", participants: 320, events: 6 },
  { month: "Sep", participants: 340, events: 7 },
  { month: "Oct", participants: 360, events: 7 },
  { month: "Nov", participants: 310, events: 6 },
  { month: "Dec", participants: 380, events: 8 },
]

const impactData = [
  { month: "Jan", impact: 86 },
  { month: "Feb", impact: 87 },
  { month: "Mar", impact: 89 },
  { month: "Apr", impact: 90 },
  { month: "May", impact: 92 },
  { month: "Jun", impact: 93 },
  { month: "Jul", impact: 92 },
  { month: "Aug", impact: 93 },
  { month: "Sep", impact: 94 },
  { month: "Oct", impact: 94 },
  { month: "Nov", impact: 93 },
  { month: "Dec", impact: 95 },
]

// Pie: initiative distribution (example mix)
const initiativeDistribution = [
  { key: "mediation", label: "Mediation", value: 32 },
  { key: "youth", label: "Youth Leadership", value: 28 },
  { key: "education", label: "Peace Education", value: 18 },
  { key: "community", label: "Community Care", value: 14 },
  { key: "arts", label: "Arts & Culture", value: 8 },
]

const COLORS = {
  participants: "hsl(var(--chart-1))",
  events: "hsl(var(--chart-2))",
  impact: "hsl(var(--chart-3))",
  mediation: "hsl(var(--chart-1))",
  youth: "hsl(var(--chart-2))",
  education: "hsl(var(--chart-3))",
  community: "hsl(var(--chart-4))",
  arts: "hsl(var(--chart-5))",
}

function BasicTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border bg-background px-2.5 py-1.5 text-xs shadow-sm">
      {label && <div className="font-medium mb-0.5">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="inline-block size-2 rounded-sm"
            style={{ backgroundColor: p.color || p.fill }}
            aria-hidden="true"
          />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium">{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="py-8 md:py-12 min-h-screen bg-gradient-to-br from-emerald-50/30 to-teal-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-2 heading-accent">
              Community Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Track our collective impact and upcoming initiatives across India
            </p>
          </div>
        </SectionReveal>

        {/* Stats Grid */}
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm hover-lift"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      <p className="text-sm text-emerald-600 font-medium mt-1">{stat.change}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <SectionReveal className="lg:col-span-2">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <BarChart3 className="w-5 h-5" />
                  Participation & Events (Monthly)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} barSize={10} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<BasicTooltip />} />
                      <Legend />
                      <Bar dataKey="participants" name="Participants" fill={COLORS.participants} radius={[6, 6, 0, 0]}>
                        <LabelList dataKey="participants" position="top" className="fill-foreground" />
                      </Bar>
                      <Bar dataKey="events" name="Events" fill={COLORS.events} radius={[6, 6, 0, 0]}>
                        <LabelList dataKey="events" position="top" className="fill-foreground" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>

          <SectionReveal>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Activity className="w-5 h-5" />
                  Impact Score Trend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={impactData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip content={<BasicTooltip />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="impact"
                        name="Impact Score"
                        stroke={COLORS.impact}
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>

        {/* Charts Row 2: Pie */}
        <SectionReveal>
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm mb-8 hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                <PieIcon className="w-5 h-5" />
                Initiative Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<BasicTooltip />} />
                    <Legend />
                    <Pie
                      data={initiativeDistribution}
                      dataKey="value"
                      nameKey="label"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      paddingAngle={2}
                      stroke="hsl(var(--border))"
                      strokeWidth={1}
                    >
                      {initiativeDistribution.map((item) => (
                        <Cell key={item.key} fill={COLORS[item.key]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <SectionReveal className="lg:col-span-2">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Clock className="w-5 h-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-emerald-50/50 to-teal-50/30 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-emerald-100/50"
                    >
                      <div className="p-2 rounded-lg bg-white shadow-sm">
                        {activity.type === "event" && <Calendar className="w-4 h-4 text-emerald-600" />}
                        {activity.type === "review" && <MessageSquare className="w-4 h-4 text-purple-600" />}
                        {activity.type === "milestone" && <Award className="w-4 h-4 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                          {activity.participants && (
                            <Badge variant="outline" className="text-xs">
                              {activity.participants} participants
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </SectionReveal>

          {/* Upcoming Events */}
          <SectionReveal>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm mb-6 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="p-4 rounded-lg border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          {event.date} at {event.time}
                        </p>
                        <p className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant="outline" className="text-xs">
                          {event.registered}/{event.capacity} registered
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs hover:bg-emerald-50 transition-all duration-200 bg-transparent btn-press"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 btn-press"
                >
                  <Link href="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Heart className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-emerald-50 transition-all duration-200 bg-transparent btn-press"
                  >
                    <Link href="/reviews">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Leave a Review
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-emerald-50 transition-all duration-200 bg-transparent btn-press"
                  >
                    <Link href="/stories">
                      <Activity className="w-4 h-4 mr-2" />
                      Share Your Story
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-emerald-50 transition-all duration-200 bg-transparent btn-press"
                  >
                    <Link href="/chat">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </div>
    </div>
  )
}
