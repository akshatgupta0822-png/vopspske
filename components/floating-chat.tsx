"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send, Mic } from "lucide-react"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message submission here
      console.log("Message:", message)
      setMessage("")
    }
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
      {isOpen && (
        <Card className="mb-4 w-72 sm:w-80 shadow-2xl border-emerald-100 animate-fade-in-up">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Voice for Peace</h3>
                  <p className="text-xs text-emerald-600">How can we help amplify your voice?</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 hover:bg-emerald-50 transition-colors duration-300"
              >
                <X className="h-4 w-4 text-emerald-600" />
              </Button>
            </div>

            <div className="space-y-3 mb-4 max-h-32 overflow-y-auto">
              <div className="bg-emerald-50 p-3 rounded-lg">
                <p className="text-sm text-emerald-800">
                  Welcome! Share your thoughts on peace-building or ask about our initiatives.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your voice..."
                className="flex-1 px-3 py-2 text-sm border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="h-5 h-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        <span className="sr-only">Open chat to share your voice</span>
      </Button>
    </div>
  )
}
