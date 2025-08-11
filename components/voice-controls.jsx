"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

export default function VoiceControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [speechSynthesis, setSpeechSynthesis] = useState(null)
  const [currentUtterance, setCurrentUtterance] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis)
    }
  }, [])

  const readPageContent = () => {
    if (!speechSynthesis) return

    if (isPlaying && currentUtterance) {
      speechSynthesis.cancel()
      setIsPlaying(false)
      setCurrentUtterance(null)
      return
    }

    // Get main content text
    const mainContent = document.querySelector("main")
    if (!mainContent) return

    const textContent = mainContent.innerText
    const utterance = new SpeechSynthesisUtterance(textContent)

    utterance.rate = 0.8
    utterance.pitch = 1
    utterance.volume = isMuted ? 0 : 1

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => {
      setIsPlaying(false)
      setCurrentUtterance(null)
    }
    utterance.onerror = () => {
      setIsPlaying(false)
      setCurrentUtterance(null)
    }

    setCurrentUtterance(utterance)
    speechSynthesis.speak(utterance)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (currentUtterance) {
      currentUtterance.volume = !isMuted ? 0 : 1
    }
  }

  if (!speechSynthesis) return null

  return (
    <div className="fixed top-20 right-4 z-50 bg-white border rounded-lg shadow-lg p-2 flex gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={readPageContent}
        className="transition-all duration-200 hover:shadow-md bg-transparent"
        aria-label={isPlaying ? "Stop reading page" : "Read page aloud"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={toggleMute}
        className="transition-all duration-200 hover:shadow-md bg-transparent"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>
    </div>
  )
}
