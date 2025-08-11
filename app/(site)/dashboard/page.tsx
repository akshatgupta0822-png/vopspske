import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedCounter from "@/components/animated-counter"
import {
  Users,
  Heart,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
} from "lucide-react"

export default function DashboardPage() {
  const keyMetrics = [
    {
      title: "Active Volunteers",
      value: 156,
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "emerald",
    },
    {
      title: "Lives Impacted",
      value: 1247,
      change: "+18%",
      trend: "up",
      icon: Heart,
      color: "pink",
    },
    {
      title: "Successful Mediations",
      value: 89,
      change: "+25%",
      trend: "up",
      icon: CheckCircle,
      color: "blue",
    },
    {
      title: "Community Events",
      value: 34,
      change: "+8%",
      trend: "up",
      icon: Calendar,
      color: "purple",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "mediation",
      title: "Neighborhood Dispute Resolution",
      location: "Katara Extension, Block A",
      date: "2024-01-28",
      status: "completed",
      participants: 4,
      outcome: "Successful resolution reached",
    },
    {
      id: 2,
      type: "workshop",
      title: "Youth Leadership Training",
      location: "Sagar Public School",
      date: "2024-01-26",
      status: "completed",
      participants: 25,
      outcome: "High engagement, positive feedback",
    },
    {
      id: 3,
      type: "event",
      title: "Community Peace Circle",
      location: "Community Center",
      date: "2024-01-24",
      status: "completed",
      participants: 45,
      outcome: "Strong community participation",
    },
    {
      id: 4,
      type: "training",
      title: "Mediator Certification Program",
      location: "Online & In-Person",
      date: "2024-01-22",
      status: "ongoing",
      participants: 18,
      outcome: "Week 3 of 6-week program",
    },
  ]

  const upcomingGoals = [
    {
      title: "Train 50 New Mediators",
      progress: 68,
      target: 50,
      current: 34,
      deadline: "March 2024",
    },
    {
      title: "Establish 5 New Chapters",
      progress: 40,
      target: 5,
      current: 2,
      deadline: "June 2024",
    },
    {
      title: "Reach 2000 Community Members",
      progress: 62,
      target: 2000,
      current: 1247,
      deadline: "December 2024",
    },
    {
      title: "Host 100 Peace Events",
      progress: 34,
      target: 100,
      current: 34,
      deadline: "December 2024",
    },
  ]

  const chapterData = [
    { name: "Katara Extension", volunteers: 28, events: 12, impact: 156 },
    { name: "Rohini Sector 15", volunteers: 22, events: 8, impact: 134 },
    { name: "Dwarka Sector 10", volunteers: 19, events: 6, impact: 98 },
    { name: "Janakpuri West", volunteers: 16, events: 5, impact: 87 },
    { name: "Pitampura", volunteers: 14, events: 4, impact: 76 },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "mediation":
        return CheckCircle
      case "workshop":
        return Users
      case "event":
        return Calendar
      case "training":
        return Award
      default:
        return Activity
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "mediation":
        return "bg-emerald-100 text-emerald-800"
      case "workshop":
        return "bg-blue-100 text-blue-800"
      case "event":
        return "bg-purple-100 text-purple-800"
      case "training":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "ongoing":
        return "bg-yellow-100 text-yellow-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">
      {/* Key Metrics */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              Impact Overview
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key metrics showing our community's growth and positive impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${metric.color}-100 group-hover:bg-${metric.color}-200 transition-colors duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 text-${metric.color}-600`} />
                      </div>
                      <Badge className={`bg-green-100 text-green-800`}>{metric.change}</Badge>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      <AnimatedCounter end={metric.value} duration={2000} />
                    </div>
                    <div className="text-muted-foreground font-medium">{metric.title}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Tabs */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="activities">Recent Activities</TabsTrigger>
              <TabsTrigger value="goals">Goals & Progress</TabsTrigger>
              <TabsTrigger value="chapters">Chapter Performance</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="space-y-6">
              <div className="grid gap-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-600" />
                      Recent Community Activities
                    </CardTitle>
                    <CardDescription>Latest mediations, workshops, and events across our chapters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => {
                        const IconComponent = getActivityIcon(activity.type)
                        return (
                          <div
                            key={activity.id}
                            className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${getActivityColor(activity.type)}`}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                                <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <div className="flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {activity.location}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {activity.participants} participants
                                  </span>
                                  <span>{new Date(activity.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <div className="text-sm text-emerald-700 mt-1">{activity.outcome}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    2024 Goals & Progress
                  </CardTitle>
                  <CardDescription>Track our progress towards key community objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingGoals.map((goal, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{goal.title}</h4>
                          <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                            Due: {goal.deadline}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-1">
                            <Progress value={goal.progress} className="h-2" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <AnimatedCounter end={goal.current} duration={1500} /> of {goal.target} completed
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chapters" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    Chapter Performance
                  </CardTitle>
                  <CardDescription>Performance metrics across our community chapters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chapterData.map((chapter, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{chapter.name}</h4>
                          <Badge className="bg-emerald-100 text-emerald-800">Rank #{index + 1}</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-emerald-600">
                              <AnimatedCounter end={chapter.volunteers} duration={1500} />
                            </div>
                            <div className="text-xs text-muted-foreground">Volunteers</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">
                              <AnimatedCounter end={chapter.events} duration={1500} />
                            </div>
                            <div className="text-xs text-muted-foreground">Events</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600">
                              <AnimatedCounter end={chapter.impact} duration={1500} />
                            </div>
                            <div className="text-xs text-muted-foreground">Lives Impacted</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-emerald-600" />
                      Activity Distribution
                    </CardTitle>
                    <CardDescription>Breakdown of community activities by type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Mediations</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Workshops</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                          <span className="text-sm font-medium">30%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Events</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Training</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                          <span className="text-sm font-medium">5%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      Growth Trends
                    </CardTitle>
                    <CardDescription>Monthly growth in key metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600 mb-1">
                          <AnimatedCounter end={23} duration={1500} />%
                        </div>
                        <div className="text-sm text-muted-foreground">Volunteer Growth</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          <AnimatedCounter end={18} duration={1500} />%
                        </div>
                        <div className="text-sm text-muted-foreground">Community Reach</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          <AnimatedCounter end={31} duration={1500} />%
                        </div>
                        <div className="text-sm text-muted-foreground">Event Participation</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/diverse-smiles.png')] bg-cover bg-center opacity-10" />
            <CardContent className="relative p-8 md:p-12 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Contribute to These Numbers?</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Every volunteer, every mediation, every event adds to our collective impact. Join us and help these
                numbers grow while making a real difference in your community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Become a Volunteer
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-700 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Attend an Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
