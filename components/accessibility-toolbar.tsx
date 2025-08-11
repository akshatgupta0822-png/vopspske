"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Contrast, Minus, X, Volume2, VolumeX, Eye, Type, MousePointer } from "lucide-react"

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [fontSize, setFontSize] = React.useState(16)
  const [highContrast, setHighContrast] = React.useState(false)
  const [screenReader, setScreenReader] = React.useState(false)
  const [soundEnabled, setSoundEnabled] = React.useState(true)
  const [largePointer, setLargePointer] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  const adjustFontSize = (change: number) => {
    const newSize = Math.max(10, Math.min(24, fontSize + change))
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast", !highContrast)
    if (!highContrast) {
      document.documentElement.style.setProperty("--background", "0 0% 0%")
      document.documentElement.style.setProperty("--foreground", "0 0% 100%")
    } else {
      document.documentElement.style.removeProperty("--background")
      document.documentElement.style.removeProperty("--foreground")
    }
  }

  const toggleScreenReader = () => {
    setScreenReader(!screenReader)
    if (!screenReader) {
      // Add screen reader announcements
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "polite")
      announcement.setAttribute("aria-atomic", "true")
      announcement.className = "sr-only"
      announcement.id = "accessibility-announcements"
      document.body.appendChild(announcement)
    } else {
      const announcement = document.getElementById("accessibility-announcements")
      if (announcement) {
        document.body.removeChild(announcement)
      }
    }
  }

  const toggleLargePointer = () => {
    setLargePointer(!largePointer)
    document.documentElement.classList.toggle("large-pointer", !largePointer)
    if (!largePointer) {
      document.documentElement.style.cursor =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M2 2l8 26 6-8 8-6z' fill='%23000'/%3E%3C/svg%3E\") 2 2, auto"
    } else {
      document.documentElement.style.cursor = "auto"
    }
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion)
    document.documentElement.classList.toggle("reduce-motion", !reducedMotion)
    if (!reducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms")
      document.documentElement.style.setProperty("--transition-duration", "0.01ms")
    } else {
      document.documentElement.style.removeProperty("--animation-duration")
      document.documentElement.style.removeProperty("--transition-duration")
    }
  }

  const speakText = (text: string) => {
    if (soundEnabled && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const announceToScreenReader = (message: string) => {
    if (screenReader) {
      const announcement = document.getElementById("accessibility-announcements")
      if (announcement) {
        announcement.textContent = message
      }
    }
  }

  return (
    <>
      <Button
        className="fixed bottom-24 right-4 z-[60] transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        onClick={() => {
          setIsOpen(!isOpen)
          speakText(isOpen ? "Accessibility menu closed" : "Accessibility menu opened")
          announceToScreenReader(isOpen ? "Accessibility menu closed" : "Accessibility menu opened")
        }}
        aria-label="Open accessibility settings"
        size="icon"
      >
        <Settings className="w-4 h-4" aria-hidden="true" />
      </Button>

      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-44 right-4 z-[60] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-2 border-emerald-200",
            isMinimized ? "w-12" : "w-80",
          )}
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="false"
        >
          <CardContent className={cn("p-4", isMinimized && "p-2")}>
            <div className="flex items-center justify-between mb-4">
              {!isMinimized && (
                <h3 className="font-semibold flex items-center gap-2 text-emerald-700">
                  <Settings className="w-4 h-4" aria-hidden="true" />
                  Accessibility
                </h3>
              )}
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsMinimized(!isMinimized)
                    speakText(isMinimized ? "Accessibility menu expanded" : "Accessibility menu minimized")
                  }}
                  className="h-6 w-6 p-0 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={isMinimized ? "Expand accessibility menu" : "Minimize accessibility menu"}
                >
                  <Minus className="w-3 h-3" aria-hidden="true" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsOpen(false)
                    speakText("Accessibility menu closed")
                  }}
                  className="h-6 w-6 p-0 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="Close accessibility menu"
                >
                  <X className="w-3 h-3" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <div className="space-y-4">
                {/* Font Size */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Font Size</label>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        adjustFontSize(-2)
                        speakText("Font size decreased")
                        announceToScreenReader("Font size decreased")
                      }}
                      className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500"
                      aria-label="Decrease font size"
                    >
                      A-
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        adjustFontSize(2)
                        speakText("Font size increased")
                        announceToScreenReader("Font size increased")
                      }}
                      className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500"
                      aria-label="Increase font size"
                    >
                      A+
                    </Button>
                  </div>
                </div>

                {/* High Contrast */}
                <div>
                  <Button
                    size="sm"
                    variant={highContrast ? "default" : "outline"}
                    onClick={() => {
                      toggleHighContrast()
                      speakText(highContrast ? "High contrast disabled" : "High contrast enabled")
                      announceToScreenReader(highContrast ? "High contrast disabled" : "High contrast enabled")
                    }}
                    className="w-full justify-start transition-all duration-200 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label={highContrast ? "Disable high contrast" : "Enable high contrast"}
                    aria-pressed={highContrast}
                  >
                    <Contrast className="w-4 h-4 mr-2" aria-hidden="true" />
                    High Contrast
                  </Button>
                </div>

              
                <div>
                  
                </div>

                {/* Sound Toggle */}
                <div>
                  <Button
                    size="sm"
                    variant={soundEnabled ? "default" : "outline"}
                    onClick={() => {
                      setSoundEnabled(!soundEnabled)
                      if (soundEnabled) {
                        speakText("Sound disabled")
                      }
                      announceToScreenReader(soundEnabled ? "Sound disabled" : "Sound enabled")
                    }}
                    className="w-full justify-start transition-all duration-200 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
                    aria-pressed={soundEnabled}
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 mr-2" aria-hidden="true" />
                    ) : (
                      <VolumeX className="w-4 h-4 mr-2" aria-hidden="true" />
                    )}
                    Sound {soundEnabled ? "On" : "Off"}
                  </Button>
                </div>

                {/* Large Pointer */}
                <div>
                  <Button
                    size="sm"
                    variant={largePointer ? "default" : "outline"}
                    onClick={() => {
                      toggleLargePointer()
                      speakText(largePointer ? "Large pointer disabled" : "Large pointer enabled")
                      announceToScreenReader(largePointer ? "Large pointer disabled" : "Large pointer enabled")
                    }}
                    className="w-full justify-start transition-all duration-200 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label={largePointer ? "Disable large pointer" : "Enable large pointer"}
                    aria-pressed={largePointer}
                  >
                    <MousePointer className="w-4 h-4 mr-2" aria-hidden="true" />
                    Large Pointer
                  </Button>
                </div>



                <div className="text-xs text-muted-foreground bg-emerald-50 p-3 rounded-lg">
                  <p className="font-medium mb-1">Navigation Tips:</p>
                  <p>• Use Tab to navigate</p>
                  <p>• Press Enter to activate</p>
                  <p>• Screen reader compatible</p>
                  <p>• Voice commands supported</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default AccessibilityToolbar
