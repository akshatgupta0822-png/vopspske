import { Inter } from "next/font/google"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import VoiceControls from "@/components/voice-controls"
import AccessibilityToolbar from "@/components/accessibility-toolbar"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Voice for Peace | Building Bridges Through Dialogue in India",
  description:
    "Stories, actions, and community — raising a united voice for peace. Join our movement for dialogue, dignity, and shared futures across Indian communities.",
  keywords:
    "peace, community, dialogue, conflict resolution, youth leadership, social justice, accessibility, India, Sagar Public School, Katara Extension, Ahimsa, non-violence",
  authors: [{ name: "Voice for Peace Community" }],
  openGraph: {
    title: "Voice for Peace | Building Bridges in India",
    description: "Building bridges through dialogue and community action across Indian schools and communities",
    type: "website",
  },
}

export default function SiteLayout({ children }) {
  return (
    <div className={`${inter.className} min-h-dvh flex flex-col bg-white transition-all duration-300`}>
      <AccessibilityToolbar />
      <VoiceControls />
      <PageTransition>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </PageTransition>
    </div>
  )
}
