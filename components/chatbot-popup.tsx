"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, Minimize2, Maximize2, Heart, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

const ChatbotPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you learn about peace-building and our community initiatives. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    // Show popup after 3 seconds on homepage
    const timer = setTimeout(() => {
      if (window.location.pathname === "/") {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const quickReplies = [
    { text: "Get Involved", action: () => window.open("/get-involved", "_blank"), icon: Heart },
    { text: "View Events", action: () => window.open("/events", "_blank"), icon: Calendar },
    { text: "Learn More", action: () => window.open("/about", "_blank"), icon: BookOpen },
  ]

  const botResponses = [
    "That's wonderful! Our Voice for Peace movement focuses on creating dialogue and understanding in communities across India.",
    "We have many ways to get involved! You can join our events, participate in mediation training, or start a peace initiative in your school.",
    "Our initiatives include community gardens, youth leadership programs, cultural events, and conflict resolution workshops.",
    "Peace-building starts with small actions - listening to others, showing empathy, and creating spaces for dialogue.",
    "We work closely with schools like Sagar Public School in Katara Extension to train young peacemakers.",
    "Would you like to know more about our upcoming events or how to start a peace circle in your community?",
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleQuickReply = (reply: any) => {
    const userMessage = {
      id: messages.length + 1,
      text: reply.text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    reply.action()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[55] transition-all duration-300">
      {!isExpanded ? (
        // Notification popup
        <Card className="w-80 shadow-2xl border-emerald-200 animate-in slide-in-from-bottom-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-emerald-700">Peace Assistant</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                      Online
                    </Badge>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsVisible(false)}
                className="h-6 w-6 p-0 hover:bg-emerald-50"
                aria-label="Close chat"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-4">
              Hi! I'm here to help you learn about peace-building and our community initiatives. How can I assist you
              today?
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setIsExpanded(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-xs"
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                Chat Now
              </Button>
              <Button size="sm" variant="outline" onClick={() => setIsVisible(false)} className="text-xs">
                Later
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        // Expanded chat interface
        <Card
          className={`shadow-2xl border-emerald-200 transition-all duration-300 ${
            isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
          }`}
        >
          <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-teal-50 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-emerald-700">Voice for Peace Assistant</CardTitle>
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                    Online
                  </Badge>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-6 w-6 p-0 hover:bg-emerald-50"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsExpanded(false)
                    setIsMinimized(false)
                  }}
                  className="h-6 w-6 p-0 hover:bg-emerald-50"
                  aria-label="Close chat"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="flex-1 p-0 overflow-hidden">
                <div className="h-80 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick replies */}
                <div className="px-4 pb-2">
                  <div className="flex gap-2 flex-wrap">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs hover:bg-emerald-50 hover:border-emerald-300"
                      >
                        <reply.icon className="w-3 h-3 mr-1" />
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>

              {/* Input area */}
              <div className="border-t p-3 bg-gray-50/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about peace initiatives..."
                    className="flex-1 px-3 py-2 text-sm border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                </div>
                <div className="mt-2 text-center">
                  <Link
                    href="/chat"
                    className="text-xs text-emerald-600 hover:text-emerald-700 underline"
                    onClick={() => setIsVisible(false)}
                  >
                    Open full chat page
                  </Link>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  )
}

export default ChatbotPopup
