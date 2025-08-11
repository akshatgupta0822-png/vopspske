"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Bot, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const botResponses = [
  "Thank you for reaching out! How can I help you learn more about Voice for Peace?",
  "That's a great question! Our community programs focus on dialogue, mediation, and youth leadership.",
  "I'd be happy to connect you with someone from our team who can provide more detailed information.",
  "You can find more information about our initiatives on our website, or I can help you get started right away.",
  "Our next community event is coming up soon. Would you like me to share the details?",
  "Peace-building starts with listening. What aspects of our work interest you most?",
]

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! I'm here to help you learn about Voice for Peace and how you can get involved in building a more peaceful community. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user" as const,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(
      () => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: botResponses[Math.floor(Math.random() * botResponses.length)],
          sender: "bot" as const,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="py-14 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
            aria-label="Go back to homepage"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold">Chat with Us</h1>
          <p className="text-muted-foreground mt-2">
            Get instant answers about our programs, events, and how to get involved.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="border-b bg-emerald-50">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-600" />
              Voice for Peace Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div
              className="h-96 overflow-y-auto p-4 space-y-4"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-emerald-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user" ? "bg-emerald-600 text-white" : "bg-neutral-100 text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-neutral-600" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="bg-neutral-100 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                  aria-label="Type your message"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="hover:shadow-md transition-all duration-200"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                For complex inquiries, please{" "}
                <Link href="/contact" className="text-emerald-700 hover:underline">
                  contact our team directly
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
