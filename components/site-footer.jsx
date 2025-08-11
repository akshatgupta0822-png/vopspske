import Link from "next/link"
import { Globe, Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-gradient-to-br from-neutral-50 to-emerald-50/30 transition-all duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-semibold mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">VP</span>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Voice for Peace</div>
                <div className="text-xs text-emerald-600 font-medium">Building Bridges</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              A united movement for dialogue, dignity, and shared futures across communities in India and beyond.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 mb-6">
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com/",
                  label: "Facebook",
                  color: "hover:bg-blue-50 hover:text-blue-600",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/voiceforpeace",
                  label: "Twitter",
                  color: "hover:bg-sky-50 hover:text-sky-600",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/voiceforpeace",
                  label: "Instagram",
                  color: "hover:bg-pink-50 hover:text-pink-600",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/",
                  label: "YouTube",
                  color: "hover:bg-red-50 hover:text-red-600",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/voiceforpeace",
                  label: "LinkedIn",
                  color: "hover:bg-blue-50 hover:text-blue-700",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-[1.05] hover:shadow-sm ${social.color}`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-medium text-gray-700">In collaboration with:</p>
              <p className="font-medium text-emerald-700">Sagar Public School, Katara Extension</p>
              <p>Akshat &amp; Akshay</p>
              <p className="mt-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium text-xs">
                  Vision Web Challenge 2025
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4 text-gray-900">Explore</div>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/initiatives", label: "Our Initiatives" },
                { href: "/stories", label: "Community Stories" },
                { href: "/events", label: "Upcoming Events" },
                { href: "/news", label: "Latest News" },
                { href: "/blog", label: "Peace Blog" },
                { href: "/resources", label: "Learning Resources" },
                { href: "/dashboard", label: "Impact Dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4 text-gray-900">Get Involved</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/#initiatives"
                >
                  Volunteer With Us
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/events"
                >
                  Join an Event
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/stories"
                >
                  Share Your Story
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/chat"
                >
                  Chat with Us
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/reviews"
                >
                  Leave a Review
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4 text-gray-900">Our Chapters</div>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline flex items-center gap-2"
                  href="/about#chapters"
                >
                  <MapPin className="w-3 h-3" />
                  Delhi Chapter
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline flex items-center gap-2"
                  href="/about#chapters"
                >
                  <MapPin className="w-3 h-3" />
                  Mumbai Chapter
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline flex items-center gap-2"
                  href="/about#chapters"
                >
                  <MapPin className="w-3 h-3" />
                  Bhopal Chapter
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 hover:underline"
                  href="/about#chapters"
                >
                  View All Chapters →
                </Link>
              </li>
            </ul>

            <div className="text-sm text-muted-foreground space-y-2">
              <div className="font-medium text-gray-700">Contact Info</div>
              <div className="space-y-1">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:hello@voiceforpeace.org"
                    className="hover:text-emerald-600 transition-colors duration-200"
                  >
                    hello@voiceforpeace.org
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+919876543210" className="hover:text-emerald-600 transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Bhopal, Madhya Pradesh, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-100/50 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} Voice for Peace. Built with ❤️ by the community.</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                Accessible Design
              </span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>

          {/* UN Inspiration */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs shadow-sm hover:shadow-md transition-all duration-300">
              <Globe className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span className="text-muted-foreground">Inspired by</span>
              <a
                href="https://www.un.org/peacebuilding/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium transition-colors duration-200"
              >
                UN Peacebuilding
              </a>
              <span className="text-muted-foreground">and</span>
              <a
                href="https://sdgs.un.org/goals/goal16"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium transition-colors duration-200"
              >
                SDG 16
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
