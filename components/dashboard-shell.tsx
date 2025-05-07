import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { GraduationCap, Building2 } from "lucide-react"
import Link from "next/link"

interface DashboardShellProps {
  userType: "graduate" | "company"
  children: React.ReactNode
}

export function DashboardShell({ userType, children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {userType === "graduate" ? (
                <GraduationCap className="h-6 w-6 text-blue-600" />
              ) : (
                <Building2 className="h-6 w-6 text-blue-600" />
              )}
              <span className="text-xl font-bold text-blue-600">SkillUp</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav userType={userType} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px] py-6">
          <MainNav userType={userType} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden py-6">{children}</main>
      </div>
    </div>
  )
}
