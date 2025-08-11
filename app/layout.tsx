import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AccessibilityToolbar from "@/components/accessibility-toolbar"
import ChatbotPopup from "@/components/chatbot-popup"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Voice for Peace - Building Bridges Through Dialogue",
  description:
    "Join our movement for peace through community dialogue, mediation, and understanding. Stories, actions, and initiatives for a more peaceful world.",
  keywords: "peace, dialogue, community, mediation, conflict resolution, India, social harmony",
  authors: [{ name: "Voice for Peace Team" }],
  openGraph: {
    title: "Voice for Peace - Building Bridges Through Dialogue",
    description: "Join our movement for peace through community dialogue, mediation, and understanding.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice for Peace - Building Bridges Through Dialogue",
    description: "Join our movement for peace through community dialogue, mediation, and understanding.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-[70] focus:z-[70]"
        >
          Skip to main content
        </a>

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1" role="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>

        <AccessibilityToolbar />
        <ChatbotPopup />

        {/* Screen reader announcements */}
        <div id="accessibility-announcements" className="sr-only" aria-live="polite" aria-atomic="true"></div>
      </body>
    </html>
  )
}
