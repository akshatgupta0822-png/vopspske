"use client"

import Button from "@/components/ui/button"
import Megaphone from "lucide-react"

// No tracks anymore — we removed Community Reflection, Hopeful Message, Youth Poem
const tracks = []

export default function AudioVoices() {
  // If there are no tracks, render a friendly placeholder (no <audio> tag to avoid errors)
  if (tracks.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Community Voices</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Audio stories will appear here soon. In the meantime, explore our initiatives and stories.
            </p>
            <div className="mt-4 flex gap-2">
              <Button asChild className="hover:shadow-md transition-all duration-200">
                <a href="/stories">Read stories</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
              >
                <a href="/initiatives">See initiatives</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // (Unreachable right now; kept for future if you add tracks back)
  return null
}
