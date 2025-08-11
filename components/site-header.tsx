"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Mic } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Stories", href: "/stories" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Reviews", href: "/reviews" },
  { name: "Quiz", href: "/quiz" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Chat", href: "/chat" },
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm transition-all duration-300">
      <div className="container flex h-14 sm:h-16 md:h-18 items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Logo - Responsive sizing */}
        <Link
          href="/"
          className="flex items-center space-x-1.5 sm:space-x-2 group flex-shrink-0"
          aria-label="Voice for Peace - Home"
        >
          <div className="relative">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Mic
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:animate-pulse"
                aria-hidden="true"
              />
            </div>
            <div
              className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm"
              aria-hidden="true"
            ></div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-emerald-800 group-hover:to-teal-700 transition-all duration-300">
              Voice for Peace
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-emerald-600/80 tracking-wide uppercase group-hover:text-emerald-700 transition-colors duration-300 hidden sm:block">
              Building Bridges
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Show more items */}
        <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
          {navigation.slice(0, 10).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 hover:scale-105 hover:shadow-sm ${
                isActive(item.href)
                  ? "bg-emerald-100 text-emerald-800 shadow-sm"
                  : "hover:bg-emerald-50/70 hover:text-emerald-800 text-gray-700"
              }`}
              aria-label={`Navigate to ${item.name}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <span className="relative z-10 transition-all duration-300">{item.name}</span>
              <span
                className={`absolute left-2 lg:left-3 right-2 lg:right-3 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-300 origin-center ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Responsive sizing */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-3">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-medium group text-xs lg:text-sm px-3 lg:px-4 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <Link href="/get-involved" aria-label="Get involved with Voice for Peace">
              <Heart className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 group-hover:animate-pulse" aria-hidden="true" />
              <span className="hidden lg:inline">Get Involved</span>
              <span className="lg:hidden">Join</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu - Enhanced Animation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-emerald-50 transition-all duration-300 hover:scale-110 group border border-emerald-200/50 hover:border-emerald-300 w-8 h-8 sm:w-9 sm:h-9 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <div
                  className={`absolute transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1"}`}
                >
                  <div
                    className={`w-4 h-0.5 bg-emerald-600 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-100"}`}
                  ></div>
                </div>
                <div className={`absolute transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
                  <div className="w-4 h-0.5 bg-emerald-600"></div>
                </div>
                <div
                  className={`absolute transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-1"}`}
                >
                  <div
                    className={`w-4 h-0.5 bg-emerald-600 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-100"}`}
                  ></div>
                </div>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            id="mobile-menu"
            side="top"
            className="w-full h-screen bg-white/98 backdrop-blur-md border-emerald-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top duration-500"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-emerald-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-700">Voice for Peace</div>
                    <div className="text-xs text-emerald-600">Building Bridges</div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4" role="navigation" aria-label="Mobile navigation links">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 text-base font-medium transition-all duration-300 py-4 px-4 rounded-xl hover:scale-105 hover:shadow-sm group animate-in slide-in-from-top focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                        isActive(item.href)
                          ? "bg-emerald-100 text-emerald-800 shadow-sm"
                          : "hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animationDuration: "400ms",
                        animationFillMode: "both",
                      }}
                      aria-label={`Navigate to ${item.name}`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-300 group-hover:scale-125 ${
                          isActive(item.href) ? "bg-emerald-600" : "bg-emerald-400 group-hover:bg-emerald-600"
                        }`}
                        aria-hidden="true"
                      ></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-4 border-t border-emerald-100 bg-emerald-50/50">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/get-involved" aria-label="Get involved with Voice for Peace">
                    <Heart className="w-4 h-4 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
