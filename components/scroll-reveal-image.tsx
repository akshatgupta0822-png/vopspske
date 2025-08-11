"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ScrollRevealImageProps {
  src: string
  alt: string
  className?: string
  intensity?: number
}

export default function ScrollRevealImage({ src, alt, className = "", intensity = 0.5 }: ScrollRevealImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading skeleton */}
      {!isLoaded && <div className="absolute inset-0 loading-skeleton rounded-inherit"></div>}

      {/* Enhanced image with multiple hover effects */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={800}
        height={600}
        className={`
          w-full h-full object-cover transition-all duration-700 ease-out will-change-transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          ${isHovered ? "scale-110 brightness-110 contrast-110 saturate-110" : "scale-100"}
          ${isLoaded ? "blur-0" : "blur-sm"}
        `}
        onLoad={() => setIsLoaded(true)}
        priority={src.includes("hero") || src.includes("main")}
      />

      {/* Overlay effects */}
      <div
        className={`
        absolute inset-0 transition-all duration-500
        ${isHovered ? "bg-gradient-to-t from-emerald-900/20 via-transparent to-teal-900/10" : "bg-transparent"}
      `}
      />

      {/* Shimmer effect on hover */}
      <div
        className={`
        absolute inset-0 transition-opacity duration-500
        ${isHovered ? "opacity-100" : "opacity-0"}
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        animate-shimmer
      `}
      />

      {/* Glow effect */}
      <div
        className={`
        absolute -inset-1 rounded-inherit transition-all duration-500 -z-10
        ${isHovered ? "bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-lg opacity-100" : "opacity-0"}
      `}
      />

      {/* Corner accents */}
      <div
        className={`
        absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-400 
        transition-all duration-300
        ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
      `}
      />
      <div
        className={`
        absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-emerald-400 
        transition-all duration-300
        ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
      `}
      />
      <div
        className={`
        absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-emerald-400 
        transition-all duration-300
        ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
      `}
      />
      <div
        className={`
        absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-emerald-400 
        transition-all duration-300
        ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
      `}
      />
    </div>
  )
}
