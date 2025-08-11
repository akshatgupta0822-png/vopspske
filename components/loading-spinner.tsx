export default function LoadingSpinner({
  size = "md",
  className = "",
}: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative">
        <div className="w-full h-full border-4 border-emerald-200 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  )
}
