"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Building2,
  User,
  Briefcase,
  Award,
  CheckCircle,
  Monitor,
  Rocket,
  Search,
  FileCheck,
  BarChart3,
  Handshake,
} from "lucide-react"

interface MainNavProps {
  userType: "graduate" | "company"
}

export function MainNav({ userType }: MainNavProps) {
  const pathname = usePathname()

  const graduateLinks = [
    {
      title: "Dashboard",
      href: "/graduate/dashboard",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Earn While You Learn",
      href: "/graduate/earn",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      title: "Micro-Projects",
      href: "/graduate/projects",
      icon: <Award className="mr-2 h-4 w-4" />,
    },
    {
      title: "Skill Validation",
      href: "/graduate/skills",
      icon: <CheckCircle className="mr-2 h-4 w-4" />,
    },
    {
      title: "Career Launch",
      href: "/graduate/career",
      icon: <Rocket className="mr-2 h-4 w-4" />,
    },
  ]

  const companyLinks = [
    {
      title: "Dashboard",
      href: "/company/dashboard",
      icon: <Building2 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Talent Discovery",
      href: "/company/talent",
      icon: <Search className="mr-2 h-4 w-4" />,
    },
    {
      title: "Try Before You Hire",
      href: "/company/projects",
      icon: <FileCheck className="mr-2 h-4 w-4" />,
    },
    {
      title: "Skill Gap Intelligence",
      href: "/company/intelligence",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Matching System",
      href: "/company/matching",
      icon: <Handshake className="mr-2 h-4 w-4" />,
    },
  ]

  const links = userType === "graduate" ? graduateLinks : companyLinks

  return (
    <nav className="flex flex-col space-y-1 w-full">
      {links.map((link) => (
        <Button
          key={link.href}
          variant={pathname === link.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === link.href ? "bg-blue-100 hover:bg-blue-200" : "")}
          asChild
        >
          <Link href={link.href}>
            {link.icon}
            {link.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
