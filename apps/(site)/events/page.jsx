import { CalendarClock, MapPin } from "lucide-react"
import SectionReveal from "@/components/section-reveal"

const events = [
  {
    title: "Peace Circle: Listening Workshop",
    date: "Sep 14, 2025",
    time: "10:00 AM — 12:30 PM",
    location: "Sagar Public School, Katara Extension, Bhopal",
  },
  {
    title: "Youth Mediation Training",
    date: "Oct 3, 2025",
    time: "1:00 PM — 4:00 PM",
    location: "Community Center, Arera Colony, Bhopal",
  },
  {
    title: "Neighborhood Cleanup & Potluck",
    date: "Nov 9, 2025",
    time: "9:00 AM — 1:00 PM",
    location: "Shahpura Lake, Bhopal",
  },
]

function Page() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h1 className="text-3xl md:text-4xl font-semibold heading-accent">Events</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Join gatherings that foster connection, learning, and action across Indian communities.
          </p>
        </SectionReveal>

        <div className="mt-10 space-y-4">
          {events.map((e, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className="border rounded-lg p-4 md:p-6 bg-white hover-lift">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{e.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <CalendarClock className="w-4 h-4" />
                      <span>{e.date}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{e.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{e.location}</span>
                    </div>
                  </div>
                  <a
                    className="inline-flex text-emerald-700 hover:underline text-sm btn-press"
                    href="#"
                    aria-label="Register for event"
                  >
                    Register
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
