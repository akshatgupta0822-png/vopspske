"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")
      setForm({ name: "", email: "", subject: "", message: "" })
      toast({ title: "Message sent!", description: "Thanks for reaching out. We'll reply soon." })
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="grid gap-3" onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-3">
        <Input
          name="name"
          placeholder="Full name"
          required
          value={form.name}
          onChange={onChange}
          aria-label="Full name"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={onChange}
          aria-label="Email"
        />
      </div>
      <Input
        name="subject"
        placeholder="Subject"
        required
        value={form.subject}
        onChange={onChange}
        aria-label="Subject"
      />
      <Textarea
        name="message"
        placeholder="Your message"
        required
        value={form.message}
        onChange={onChange}
        aria-label="Message"
        rows={6}
      />
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={loading} className="hover:shadow-md transition-all duration-200">
          {loading ? "Sending..." : "Send message"}
        </Button>
        <span className="text-xs text-muted-foreground">We typically reply within 2–3 business days.</span>
      </div>
    </form>
  )
}
