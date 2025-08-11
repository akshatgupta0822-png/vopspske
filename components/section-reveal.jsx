"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function SectionReveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = setTimeout(() => setVisible(true), delay)
            observer.unobserve(entry.target)
            return () => clearTimeout(t)
          }
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      data-revealed={visible}
      className={cn(
        "transition-all duration-700 will-change-transform",
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.985]",
        className,
      )}
    >
      {children}
    </div>
  )
}
