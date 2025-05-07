import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Filter,
  Plus,
  FileText,
  Users,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Star,
  StarHalf,
  Building,
  GraduationCap,
  FileCheck,
  ArrowUpRight,
  Briefcase,
  PenTool,
  Code,
  Database,
  Server,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TryBeforeYouHire() {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Product Page",
      status: "Open",
      applicants: 8,
      deadline: "May 25, 2023",
      duration: "2 weeks",
      skills: ["React", "CSS", "API Integration"],
      description: "Build a responsive product page with filtering, sorting, and cart functionality.",
    },
    {
      id: 2,
      title: "User Authentication System",
      status: "Open",
      applicants: 5,
      deadline: "May 30, 2023",
      duration: "3 weeks",
      skills: ["Node.js", "Express", "JWT", "MongoDB"],
      description: "Implement a secure user authentication system with registration, login, and password reset.",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      status: "Closed",
      applicants: 12,
      deadline: "May 15, 2023",
      duration: "4 weeks",
      skills: ["React", "D3.js", "REST API", "CSS"],
      description: "Create an interactive dashboard to visualize and analyze data from multiple sources.",
    },
  ]

  // Mock data for active projects
  const activeProjects = [
    {
      id: 1,
      title: "Content Management System",
      progress: 65,
      deadline: "June 10, 2023",
      startDate: "May 15, 2023",
      assignedTo: [
        { name: "Sarah Williams", image: "/placeholder.svg?height=32&width=32", initials: "SW" },
        { name: "Michael Chen", image: "/placeholder.svg?height=32&width=32", initials: "MC" },
      ],
      tasks: [
        { name: "Database Schema", status: "completed" },
        { name: "Backend API", status: "in-progress" },
        { name: "Admin Dashboard", status: "in-progress" },
        { name: "User Interface", status: "pending" },
      ],
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      progress: 30,
      deadline: "June 20, 2023",
      startDate: "May 20, 2023",
      assignedTo: [
        { name: "Jessica Taylor", image: "/placeholder.svg?height=32&width=32", initials: "JT" },
        { name: "David Kim", image: "/placeholder.svg?height=32&width=32", initials: "DK" },
      ],
      tasks: [
        { name: "API Research", status: "completed" },
        { name: "Backend Integration", status: "in-progress" },
        { name: "Frontend Implementation", status: "pending" },
        { name: "Testing & Security", status: "pending" },
      ],
    },
  ]

  // Mock data for completed projects
  const completedProjects = [
    {
      id: 1,
      title: "Social Media Dashboard",
      completionDate: "April 15, 2023",
      duration: "3 weeks",
      assignedTo: [{ name: "Sarah Williams", image: "/placeholder.svg?height=32&width=32", initials: "SW" }],
      skills: ["React", "Redux", "CSS"],
      feedback: "Excellent work! The dashboard is intuitive and well-designed.",
      rating: 4.8,
      hired: true,
    },
    {
      id: 2,
      title: "Inventory Management System",
      completionDate: "March 10, 2023",
      duration: "4 weeks",
      assignedTo: [
        { name: "Michael Chen", image: "/placeholder.svg?height=32&width=32", initials: "MC" },
        { name: "Jessica Taylor", image: "/placeholder.svg?height=32&width=32", initials: "JT" },
      ],
      skills: ["Node.js", "Express", "MongoDB"],
      feedback: "Good implementation of the backend. Some UI improvements could be made.",
      rating: 4.2,
      hired: false,
    },
  ]

  // Mock data for applicants
  const applicants = [
    {
      id: 1,
      name: "Sarah Williams",
      position: "Frontend Developer",
      image: "/placeholder.svg?height=40&width=40",
      initials: "SW",
      skills: ["JavaScript", "React", "CSS", "HTML"],
      experience: "3 years",
      education: "B.S. Computer Science",
      projectsCompleted: 5,
      rating: 4.8,
      coverLetter:
        "I'm excited about this project because it aligns perfectly with my experience in building responsive e-commerce interfaces...",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Full Stack Developer",
      image: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      experience: "2 years",
      education: "B.S. Software Engineering",
      projectsCompleted: 3,
      rating: 4.5,
      coverLetter:
        "Having worked on similar authentication systems in the past, I believe I can deliver a secure and user-friendly solution...",
    },
    {
      id: 3,
      name: "Jessica Taylor",
      position: "UI/UX Developer",
      image: "/placeholder.svg?height=40&width=40",
      initials: "JT",
      skills: ["React", "CSS", "Figma", "UI/UX"],
      experience: "4 years",
      education: "B.A. Design",
      projectsCompleted: 7,
      rating: 4.9,
      coverLetter:
        "I specialize in creating intuitive user interfaces and would love to apply my skills to your product page project...",
    },
  ]

  return (
    <DashboardShell userType="company">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">"Try Before You Hire" Platform</h1>
      </div>

      <Tabs defaultValue="projects" className="mt-6">
        <TabsList>
          <TabsTrigger value="projects">Manage Projects</TabsTrigger>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Project
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>Manage your "Try Before You Hire" projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <h3 className="text-lg font-medium">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                        <Badge
                          variant={project.status === "Open" ? "default" : "secondary"}
                          className={
                            project.status === "Open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{project.applicants} Applicants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline: {project.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Duration: {project.duration}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {project.status === "Open" ? (
                          <Button variant="outline" size="sm">
                            Close
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            Reopen
                          </Button>
                        )}
                      </div>
                      {project.status === "Open" && (
                        <Button size="sm">
                          View Applicants
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Projects
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Applicants</CardTitle>
              <CardDescription>Review and select candidates for your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">E-commerce Product Page</h3>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Applicants</SelectItem>
                    <SelectItem value="new">New Applicants</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {applicants.map((applicant) => (
                  <div key={applicant.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={applicant.image || "/placeholder.svg"} alt={applicant.name} />
                          <AvatarFallback>{applicant.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="font-medium">{applicant.name}</h4>
                            <p className="text-sm text-muted-foreground">{applicant.position}</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {applicant.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="bg-blue-50">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-3.5 w-3.5" />
                              <span>{applicant.experience}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-3.5 w-3.5" />
                              <span>{applicant.education}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>{applicant.projectsCompleted} Projects</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array(Math.floor(applicant.rating))
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                ))}
                              {applicant.rating % 1 !== 0 && (
                                <StarHalf className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              )}
                              <span>{applicant.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-md bg-gray-50 p-3 dark:bg-gray-800">
                        <h5 className="text-sm font-medium">Cover Letter</h5>
                        <p className="mt-1 text-sm text-muted-foreground">{applicant.coverLetter}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t p-4">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reject
                        </Button>
                        <Button size="sm">Shortlist</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Applicants
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Monitor ongoing "Try Before You Hire" projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeProjects.map((project) => (
                  <div key={project.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-medium">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {project.assignedTo.map((person, index) => (
                              <Avatar key={index} className="border-2 border-background">
                                <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                                <AvatarFallback>{person.initials}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{project.assignedTo.length} Assigned</span>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Started: {project.startDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {project.deadline}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Overall Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium">Task Breakdown</h4>
                        <div className="space-y-2">
                          {project.tasks.map((task, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg border p-2">
                              <div className="flex items-center gap-2">
                                {task.status === "completed" ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                ) : task.status === "in-progress" ? (
                                  <Clock className="h-4 w-4 text-blue-600" />
                                ) : (
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                )}
                                <span>{task.name}</span>
                              </div>
                              <Badge
                                variant={
                                  task.status === "completed"
                                    ? "outline"
                                    : task.status === "in-progress"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={
                                  task.status === "completed"
                                    ? "bg-green-50 text-green-700"
                                    : task.status === "in-progress"
                                      ? "bg-blue-50 text-blue-700"
                                      : "bg-gray-50 text-gray-700"
                                }
                              >
                                {task.status.replace("-", " ")}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t p-4">
                      <Button variant="outline" size="sm">
                        Message Team
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Review Progress</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
              <CardDescription>Overview of all active project timelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {activeProjects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.progress}% Complete</span>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground">{project.startDate}</span>
                          <span className="text-xs font-medium">Start</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <Clock className="h-3 w-3" />
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground">Current</span>
                          <span className="text-xs font-medium">{project.progress}%</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                            <Calendar className="h-3 w-3" />
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground">{project.deadline}</span>
                          <span className="text-xs font-medium">Due</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Projects</CardTitle>
              <CardDescription>Review completed projects and their outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {completedProjects.map((project) => (
                  <div key={project.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <h3 className="text-lg font-medium">{project.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {project.assignedTo.map((person, index) => (
                                <Avatar key={index} className="border-2 border-background">
                                  <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                                  <AvatarFallback>{person.initials}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {project.assignedTo.length} Contributors
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {Array(Math.floor(project.rating))
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            {project.rating % 1 !== 0 && (
                              <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            )}
                            <span className="ml-1 text-sm font-medium">{project.rating}</span>
                          </div>
                          {project.hired && <Badge className="bg-green-100 text-green-700">Hired</Badge>}
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Completed: {project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Duration: {project.duration}</span>
                        </div>
                      </div>

                      <div className="mt-4 rounded-md bg-blue-50 p-3 dark:bg-blue-950">
                        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Feedback</h4>
                        <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">{project.feedback}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t p-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <div className="flex gap-2">
                        {!project.hired && <Button size="sm">Hire Talent</Button>}
                        <Button variant="outline" size="sm">
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Completed Projects
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Talent Conversion</CardTitle>
              <CardDescription>Track how many project contributors you've hired</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div>
                      <h3 className="font-medium">Hire Rate</h3>
                      <p className="text-sm text-muted-foreground">Percentage of project contributors hired</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">35%</div>
                      <p className="text-sm text-muted-foreground">7 out of 20 contributors</p>
                    </div>
                  </div>
                  <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full bg-green-600" style={{ width: "35%" }}></div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <p className="text-sm text-muted-foreground">Total Projects</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">20</div>
                    <p className="text-sm text-muted-foreground">Contributors</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">7</div>
                    <p className="text-sm text-muted-foreground">Hires Made</p>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Recent Hires</h3>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Williams" />
                          <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Sarah Williams</h4>
                          <p className="text-sm text-muted-foreground">Frontend Developer</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Hired on May 1, 2023</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Chen" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Hired on April 15, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">+32 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hire Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Performance</CardTitle>
                <CardDescription>Completion rates and quality metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>On-Time Completion Rate</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Average Project Rating</span>
                      <span className="font-medium">4.6/5</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Project Success Rate</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">Performance Insights</h3>
                    <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Projects with clear requirements have 95% success rate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Frontend projects complete 15% faster than backend projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Projects with scope changes have 25% lower completion rates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Distribution</CardTitle>
                <CardDescription>Most common skills across your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-blue-600" />
                        <span>React</span>
                      </div>
                      <span>32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-blue-600" />
                        <span>JavaScript</span>
                      </div>
                      <span>28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-green-600" />
                        <span>Node.js</span>
                      </div>
                      <span>18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-purple-600" />
                        <span>MongoDB</span>
                      </div>
                      <span>12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PenTool className="h-4 w-4 text-rose-600" />
                        <span>UI/UX Design</span>
                      </div>
                      <span>10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Talent Acquisition Metrics</CardTitle>
              <CardDescription>Performance of your "Try Before You Hire" program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium">Average Time to Hire</h3>
                  </div>
                  <div className="text-2xl font-bold">21 days</div>
                  <p className="text-sm text-muted-foreground">From project start to offer acceptance</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>40% faster than traditional hiring</span>
                  </div>
                </div>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium">Candidate Quality</h3>
                  </div>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction with hired candidates</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>15% higher than traditional hiring</span>
                  </div>
                </div>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-purple-600" />
                    <h3 className="font-medium">Retention Rate</h3>
                  </div>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-sm text-muted-foreground">Hired candidates still employed after 6 months</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>25% higher than traditional hiring</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <h3 className="font-medium text-green-800 dark:text-green-300">Program ROI</h3>
                <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                  Your "Try Before You Hire" program has saved an estimated $45,000 in recruitment costs and reduced bad
                  hires by 35% compared to traditional hiring methods.
                </p>
                <div className="mt-3 flex justify-end">
                  <Button className="bg-green-600 hover:bg-green-700">View Detailed Report</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
