import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  ArrowUpDown,
  Star,
  StarHalf,
  Code,
  Server,
  Database,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function TalentDiscovery() {
  // Mock data for talent
  const talents = [
    {
      id: 1,
      name: "Sarah Williams",
      location: "New York, NY",
      remote: true,
      education: "B.S. Computer Science, NYU",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      projects: 6,
      rating: 4.8,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      remote: true,
      education: "B.S. Software Engineering, Stanford",
      skills: ["Python", "Django", "AWS", "PostgreSQL"],
      projects: 4,
      rating: 4.5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Jessica Taylor",
      location: "Chicago, IL",
      remote: false,
      education: "B.S. Information Technology, UChicago",
      skills: ["React", "TypeScript", "GraphQL", "UI/UX"],
      projects: 5,
      rating: 4.7,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Austin, TX",
      remote: true,
      education: "B.S. Computer Engineering, UT Austin",
      skills: ["Java", "Spring Boot", "MySQL", "Docker"],
      projects: 3,
      rating: 4.2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <DashboardShell userType="company">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Talent Discovery</h1>
      </div>

      <Tabs defaultValue="search" className="mt-6">
        <TabsList>
          <TabsTrigger value="search">Search Talent</TabsTrigger>
          <TabsTrigger value="saved">Saved Candidates</TabsTrigger>
          <TabsTrigger value="diversity">Diversity Sourcing</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Find Talent</CardTitle>
              <CardDescription>Search for graduates based on skills, projects, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search by skills, name, or location..."
                      className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                        <SelectItem value="recent">Recently Active</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="font-medium">Skills</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-js" />
                        <label
                          htmlFor="skill-js"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          JavaScript
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-react" />
                        <label
                          htmlFor="skill-react"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          React
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-node" />
                        <label
                          htmlFor="skill-node"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Node.js
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-python" />
                        <label
                          htmlFor="skill-python"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Python
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-aws" />
                        <label
                          htmlFor="skill-aws"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          AWS
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Location</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" />
                        <label
                          htmlFor="remote"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remote Only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-ny" />
                        <label
                          htmlFor="location-ny"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          New York
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-sf" />
                        <label
                          htmlFor="location-sf"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          San Francisco
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-chicago" />
                        <label
                          htmlFor="location-chicago"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Chicago
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-austin" />
                        <label
                          htmlFor="location-austin"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Austin
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Experience</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="projects-3plus" />
                        <label
                          htmlFor="projects-3plus"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          3+ Projects
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="projects-5plus" />
                        <label
                          htmlFor="projects-5plus"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          5+ Projects
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-4plus" />
                        <label
                          htmlFor="rating-4plus"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          4+ Rating
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-45plus" />
                        <label
                          htmlFor="rating-45plus"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          4.5+ Rating
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {talents.map((talent) => (
              <Card key={talent.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <img
                      src={talent.image || "/placeholder.svg"}
                      alt={talent.name}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-bold">{talent.name}</h3>
                        <div className="flex items-center gap-1">
                          {Array(Math.floor(talent.rating))
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          {talent.rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                          <span className="ml-1 text-sm font-medium">{talent.rating}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{talent.location}</span>
                        </div>
                        {talent.remote && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Remote
                          </Badge>
                        )}
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span>{talent.education}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          <span>{talent.projects} Projects</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {talent.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 sm:flex-col">
                      <Button className="flex-1">View Profile</Button>
                      <Button variant="outline" className="flex-1">
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saved Candidates</CardTitle>
              <CardDescription>Graduates you've saved for future reference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="search"
                        placeholder="Search saved candidates..."
                        className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <ArrowUpDown className="h-4 w-4" />
                      <span className="sr-only">Sort</span>
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Jessica Taylor"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">Jessica Taylor</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>React, TypeScript, GraphQL</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Remote
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Contact</Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Michael Chen"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">Michael Chen</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Python, Django, AWS</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Remote
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Contact</Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="David Rodriguez"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">David Rodriguez</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Java, Spring Boot, MySQL</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Remote
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Contact</Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Export Saved Candidates
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="diversity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Diversity & Inclusion Sourcing</CardTitle>
              <CardDescription>Tools to help build a diverse and inclusive workforce</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Diversity Sourcing Options</h3>
                  <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                    Select options to prioritize diversity in your talent search
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="underrepresented" />
                      <label
                        htmlFor="underrepresented"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800 dark:text-blue-300"
                      >
                        Prioritize underrepresented groups in tech
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rural" />
                      <label
                        htmlFor="rural"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800 dark:text-blue-300"
                      >
                        Include candidates from rural/non-metropolitan areas
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nontraditional" />
                      <label
                        htmlFor="nontraditional"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800 dark:text-blue-300"
                      >
                        Include candidates with non-traditional backgrounds
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="veterans" />
                      <label
                        htmlFor="veterans"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800 dark:text-blue-300"
                      >
                        Include veterans
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Blind Screening Tools</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tools to reduce unconscious bias in the screening process
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blind-name" />
                        <label
                          htmlFor="blind-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Hide names during initial screening
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blind-photo" />
                        <label
                          htmlFor="blind-photo"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Hide photos during initial screening
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blind-education" />
                        <label
                          htmlFor="blind-education"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Hide education details during initial screening
                        </label>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Enable Blind Screening</Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Inclusive Language Tools</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tools to ensure inclusive language in job descriptions and communications
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gender-neutral" />
                        <label
                          htmlFor="gender-neutral"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Use gender-neutral language
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="inclusive-terms" />
                        <label
                          htmlFor="inclusive-terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Check for inclusive terminology
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="accessibility" />
                        <label
                          htmlFor="accessibility"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Ensure accessibility in communications
                        </label>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Enable Inclusive Language</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Diversity Partnerships</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with organizations focused on diversity in tech
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border p-3 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                        <Code className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="mt-2 font-medium">Women Who Code</h4>
                      <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                        Connect
                      </Button>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <Server className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="mt-2 font-medium">Black in Tech</h4>
                      <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                        Connect
                      </Button>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Database className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="mt-2 font-medium">Techies Without Borders</h4>
                      <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Diversity Sourcing Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
