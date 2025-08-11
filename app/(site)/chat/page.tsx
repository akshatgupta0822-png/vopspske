"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Heart, MessageCircle, Sparkles, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "quick-action"
}

const quickActions = [
  { label: "Get Involved", href: "/get-involved", icon: Heart },
  { label: "View Events", href: "/events", icon: MessageCircle },
  { label: "Read Stories", href: "/stories", icon: Sparkles },
  { label: "Take Quiz", href: "/quiz", icon: Bot },
]

const botResponses = [
  "Hello! I'm here to help you learn about peace-building and our community initiatives. How can I assist you today?",
  "That's a great question! Our Voice for Peace movement focuses on creating dialogue and understanding in communities across India.",
  "We have many ways to get involved! You can join our events, participate in mediation training, or start a peace initiative in your school.",
  "Our initiatives include community gardens, youth leadership programs, cultural events, and conflict resolution workshops.",
  "Peace-building starts with small actions - listening to others, showing empathy, and creating spaces for dialogue.",
  "We work closely with schools like Sagar Public School in Katara Extension to train young peacemakers.",
  "Would you like to know more about our upcoming events or how to start a peace circle in your community?",
  "Our approach combines traditional Indian values of Ahimsa (non-violence) with modern conflict resolution techniques.",
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Welcome to Voice for Peace! I'm your AI assistant here to help you learn about peace-building, our initiatives, and how you can make a difference in your community. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(
      () => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponses[Math.floor(Math.random() * botResponses.length)],
          sender: "bot",
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
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Peace Chat
              </h1>
              <p className="text-sm text-muted-foreground">AI-powered guidance for peace-building</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our AI assistant to learn about peace initiatives, get involved in our community, and discover
            how you can be a voice for peace in your area.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col shadow-lg border-emerald-100">
              <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Bot className="w-5 h-5" />
                  Voice for Peace Assistant
                  <Badge variant="secondary" className="ml-auto bg-emerald-100 text-emerald-700">
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <Avatar className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600">
                            <AvatarFallback className="bg-transparent">
                              <Bot className="w-4 h-4 text-white" />
                            </AvatarFallback>
                          </Avatar>
                        )}

                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p
                            className={`text-xs mt-2 ${
                              message.sender === "user" ? "text-emerald-100" : "text-gray-500"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>

                        {message.sender === "user" && (
                          <Avatar className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600">
                            <AvatarFallback className="bg-transparent">
                              <User className="w-4 h-4 text-white" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <Avatar className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600">
                          <AvatarFallback className="bg-transparent">
                            <Bot className="w-4 h-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>
              </CardContent>

              {/* Input Area */}
              <div className="border-t p-4 bg-gray-50/50">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about peace initiatives, events, or how to get involved..."
                    className="flex-1 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-lg border-emerald-100">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-700">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action) => (
                  <Button
                    key={action.href}
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 bg-transparent"
                  >
                    <Link href={action.href}>
                      <action.icon className="w-4 h-4 mr-2" />
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-emerald-100">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-700">Need Human Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>help@voiceforpeace.org</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Katara Extension, Bhopal</span>
                </div>
                <Button asChild variant="outline" className="w-full mt-4 hover:bg-emerald-50 bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="shadow-lg border-emerald-100">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-700">Chat Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Ask about our peace initiatives</p>
                  <p>• Learn about upcoming events</p>
                  <p>• Get guidance on conflict resolution</p>
                  <p>• Discover volunteer opportunities</p>
                  <p>• Find resources for educators</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
