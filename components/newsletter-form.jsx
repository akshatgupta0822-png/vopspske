"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterForm({ placeholder = "you@example.com" }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      toast({ title: "Please enter a valid email." })
      return
    }
    setLoading(true)
    // Simulate request
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setEmail("")
    toast({ title: "Subscribed!", description: "Thanks for joining our newsletter." })
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
      />
      <Button type="submit" disabled={loading} className="hover:shadow-md transition-all duration-200">
        {loading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
