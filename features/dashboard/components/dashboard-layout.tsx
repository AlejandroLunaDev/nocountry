import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050A1A] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      {/* Background glow effects */}
      <div className="absolute top-0 -left-20 w-60 h-60 bg-[#FF2D8A]/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#00D1FF]/20 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
