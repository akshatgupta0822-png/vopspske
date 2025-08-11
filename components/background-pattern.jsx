export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/20"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-amber-100/20 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-40 h-40 bg-teal-100/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-28 h-28 bg-green-100/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "6s" }}
      ></div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
    </div>
  )
}
