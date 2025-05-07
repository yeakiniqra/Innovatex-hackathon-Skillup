import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  ArrowUpRight,
  Building,
  FileCheck,
  Code,
  Server,
  Database,
  Star,
  StarHalf,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function MicroProjects() {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Product Page",
      company: "ShopTech Inc.",
      duration: "2 weeks",
      difficulty: "Intermediate",
      skills: ["React", "CSS", "API Integration"],
      teamSize: "1-2",
      description: "Build a responsive product page with filtering, sorting, and cart functionality.",
    },
    {
      id: 2,
      title: "User Authentication System",
      company: "SecureAuth Co.",
      duration: "3 weeks",
      difficulty: "Advanced",
      skills: ["Node.js", "Express", "JWT", "MongoDB"],
      teamSize: "2-3",
      description: "Implement a secure user authentication system with registration, login, and password reset.",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      company: "DataViz Solutions",
      duration: "4 weeks",
      difficulty: "Advanced",
      skills: ["React", "D3.js", "REST API", "CSS"],
      teamSize: "2-4",
      description: "Create an interactive dashboard to visualize and analyze data from multiple sources.",
    },
    {
      id: 4,
      title: "Mobile-First Landing Page",
      company: "MobileFirst Design",
      duration: "2 weeks",
      difficulty: "Beginner",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      teamSize: "1",
      description: "Design and implement a mobile-first landing page for a new product launch.",
    },
  ]

  // Mock data for active projects
  const activeProjects = [
    {
      id: 1,
      title: "Content Management System",
      company: "ContentHub Inc.",
      progress: 65,
      deadline: "May 20, 2023",
      team: ["Sarah J.", "Michael L."],
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
      company: "FinTech Solutions",
      progress: 30,
      deadline: "June 5, 2023",
      team: ["You", "Alex K."],
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
      company: "SocialConnect",
      completionDate: "April 15, 2023",
      skills: ["React", "Redux", "CSS"],
      feedback: "Excellent work! The dashboard is intuitive and well-designed.",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Inventory Management System",
      company: "InventoryPro",
      completionDate: "March 10, 2023",
      skills: ["Node.js", "Express", "MongoDB"],
      feedback: "Good implementation of the backend. Some UI improvements could be made.",
      rating: 4.2,
    },
  ]

  return (
    <DashboardShell userType="graduate">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Micro-Projects Hub</h1>
      </div>

      <Tabs defaultValue="browse" className="mt-6">
        <TabsList>
          <TabsTrigger value="browse">Browse Projects</TabsTrigger>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge
                      variant={
                        project.difficulty === "Beginner"
                          ? "outline"
                          : project.difficulty === "Intermediate"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Apply for Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {activeProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Building className="h-3 w-3" />
                      {project.company}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Due: {project.deadline}
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Team: {project.team.join(", ")}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Task Breakdown</h3>
                  <div className="space-y-2">
                    {project.tasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-2">
                        <div className="flex items-center gap-2">
                          {task.status === "completed" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
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
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Team Chat</Button>
                <Button>Update Progress</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Building className="h-3 w-3" />
                      {project.company}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <FileCheck className="h-4 w-4" />
                      Completed: {project.completionDate}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array(Math.floor(project.rating))
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      {project.rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                      <span className="ml-1 text-sm font-medium">{project.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Feedback</h3>
                  <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">{project.feedback}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Project</Button>
                <Button>Add to Portfolio</Button>
              </CardFooter>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Project Completion Statistics</CardTitle>
              <CardDescription>Your performance across completed projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-3xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-3xl font-bold text-green-600">4.5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <div className="text-3xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-muted-foreground">Skills Validated</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-medium">Skills Breakdown</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Frontend</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>React</span>
                        <span>3 projects</span>
                      </div>
                      <Progress value={75} className="h-2" />

                      <div className="flex items-center justify-between text-sm">
                        <span>CSS</span>
                        <span>2 projects</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Backend</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Node.js</span>
                        <span>2 projects</span>
                      </div>
                      <Progress value={50} className="h-2" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Express</span>
                        <span>1 project</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Database</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>MongoDB</span>
                        <span>2 projects</span>
                      </div>
                      <Progress value={50} className="h-2" />

                      <div className="flex items-center justify-between text-sm">
                        <span>SQL</span>
                        <span>1 project</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
