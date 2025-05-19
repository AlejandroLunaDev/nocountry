"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, LayoutGrid, ListFilter } from "lucide-react"

export function DashboardNavigation() {
  const pathname = usePathname()
  const isIn3DView = pathname === "/"
  const isInGridView = pathname === "/dashboard"
  const isInListView = pathname === "/list-view"

  return (
    <div className="flex gap-3">
      {!isIn3DView && (
        <Link href="/">
          <Button variant="outline" className="border-[#1A2035] text-white hover:bg-[#1A2035]">
            <Cube className="mr-2 h-4 w-4" />
            Vista 3D
          </Button>
        </Link>
      )}

      {!isInGridView && (
        <Link href="/dashboard">
          <Button variant="outline" className="border-[#1A2035] text-white hover:bg-[#1A2035]">
            <LayoutGrid className="mr-2 h-4 w-4" />
            Vista Grid
          </Button>
        </Link>
      )}

      {!isInListView && (
        <Link href="/list-view">
          <Button variant="outline" className="border-[#1A2035] text-white hover:bg-[#1A2035]">
            <ListFilter className="mr-2 h-4 w-4" />
            Vista Lista
          </Button>
        </Link>
      )}
    </div>
  )
}
