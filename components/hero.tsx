import { Button } from "@/components/ui/button"
import ScrollRevealImage from "@/components/scroll-reveal-image"
import Link from "next/link"
import { Megaphone, Users, Heart, Globe, Sparkles, ArrowRight } from "lucide-react"

export default function Hero({
  title = "Raise your voice for peace",
  subtitle = "Stories, actions, and community — a movement for dialogue, dignity, and shared futures.",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 min-h-screen flex items-center"
      role="banner"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/30 blur-3xl animate-pulse floating-element"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/30 blur-3xl animate-pulse floating-element"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/20 blur-2xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        {/* Enhanced stats bar */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-muted-foreground bg-white/90 backdrop-blur-strong rounded-full px-8 py-4 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-500 hover:scale-105 premium-card">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-emerald-600 hover:scale-110 cursor-default">
              <Users className="w-4 h-4 animate-pulse" aria-hidden="true" />
              <span className="font-medium">28+ Chapters</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-emerald-600 hover:scale-110 cursor-default">
              <Heart className="w-4 h-4 animate-pulse" aria-hidden="true" />
              <span className="font-medium">1,200+ Voices</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-emerald-600 hover:scale-110 cursor-default">
              <Globe className="w-4 h-4 animate-pulse" aria-hidden="true" />
              <span className="font-medium">Global Impact</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced announcement badge */}
          <div className="inline-flex items-center gap-3 rounded-full border bg-white/95 backdrop-blur-strong px-6 py-3 text-sm text-muted-foreground shadow-lg mb-8 transition-all duration-500 hover:shadow-xl hover:scale-105 interactive-card border-emerald-200/50">
            <Megaphone className="w-5 h-5 text-emerald-600 animate-pulse" aria-hidden="true" />
            <span className="font-medium">Voices unite for lasting change</span>
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" aria-hidden="true" />
          </div>

          {/* Enhanced main title with better hover */}
          <div className="relative group cursor-default mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight hero-title transition-all duration-700 group-hover:scale-105 will-change-transform">
              {title}
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-4xl mx-auto animate-fade-in-up hover:text-gray-700 transition-colors duration-300 text-shadow">
            {subtitle}
          </p>

          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="btn-enhanced hover:shadow-2xl transition-all duration-500 group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg hover:scale-110 animate-pulse-glow"
            >
              <Link href="/stories" className="flex items-center gap-3">
                <span>Read Stories</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-enhanced hover:shadow-2xl hover:bg-emerald-50 transition-all duration-500 group border-2 border-emerald-200 text-emerald-700 hover:border-emerald-400 bg-white/90 backdrop-blur-sm font-semibold px-8 py-4 text-lg hover:scale-110"
            >
              <Link href="/initiatives" className="flex items-center gap-3">
                <span>See Initiatives</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>

        {/* Enhanced hero image with better hover effects */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl animate-pulse-glow"></div>
            <ScrollRevealImage
              src="/images/peaceful-unity-voices.png"
              alt="Diverse community members raising their voices together for peace, unity, and positive change"
              className="relative rounded-3xl border-4 border-white/80 w-full object-cover max-h-[500px] shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:rotate-1 will-change-transform interactive-card"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating elements around the image */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-float opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-float opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-float opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: "2s" }}
            >
              <Globe className="w-6 h-6 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
