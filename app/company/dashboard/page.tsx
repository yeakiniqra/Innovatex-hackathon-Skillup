import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Users,
  FileCheck,
  Search,
  Filter,
  GraduationCap,
  Code,
  Database,
  Server,
  LineChart,
  ArrowUpRight,
} from "lucide-react"

export default function CompanyDashboard() {
  // Mock data for talent overview
  const talentStats = [
    {
      title: "Available Graduates",
      value: 1240,
      icon: <GraduationCap className="h-4 w-4 text-muted-foreground" />,
      change: "+12%",
    },
    {
      title: "Active Projects",
      value: 24,
      icon: <FileCheck className="h-4 w-4 text-muted-foreground" />,
      change: "+3",
    },
    { title: "Talent Hired", value: 38, icon: <Users className="h-4 w-4 text-muted-foreground" />, change: "+5" },
    {
      title: "Skill Gap Index",
      value: "72/100",
      icon: <BarChart className="h-4 w-4 text-muted-foreground" />,
      change: "+4",
    },
  ]

  // Mock data for top skills in demand
  const topSkills = [
    { name: "JavaScript", demand: 85, supply: 65 },
    { name: "React", demand: 80, supply: 55 },
    { name: "Node.js", demand: 75, supply: 45 },
    { name: "Python", demand: 70, supply: 60 },
    { name: "AWS", demand: 65, supply: 40 },
  ]

  // Mock data for recent hires
  const recentHires = [
    { name: "Alex Johnson", role: "Frontend Developer", skills: ["React", "JavaScript", "CSS"], date: "May 1, 2023" },
    {
      name: "Maria Garcia",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      date: "Apr 15, 2023",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "PostgreSQL"],
      date: "Apr 10, 2023",
    },
  ]

  // Mock data for recommended talent
  const recommendedTalent = [
    {
      name: "Sarah Williams",
      match: 95,
      skills: ["JavaScript", "React", "Node.js"],
      projects: 6,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      match: 90,
      skills: ["Python", "Django", "AWS"],
      projects: 4,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jessica Taylor",
      match: 88,
      skills: ["React", "TypeScript", "GraphQL"],
      projects: 5,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <DashboardShell userType="company">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Company Dashboard</h1>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="talent">Talent Insights</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {talentStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Top Skills in Demand</CardTitle>
                <CardDescription>Comparison of demand vs. available talent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Demand: {skill.demand}% / Supply: {skill.supply}%
                      </div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: `${skill.supply}%` }} />
                      <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.demand}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {skill.demand > skill.supply ? (
                        <span className="text-amber-600">Gap: {skill.demand - skill.supply}% shortage</span>
                      ) : (
                        <span className="text-green-600">Surplus: {skill.supply - skill.demand}% available</span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Hires</CardTitle>
                <CardDescription>Graduates recently hired through the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentHires.map((hire, index) => (
                    <div key={index} className="flex items-start justify-between rounded-lg border p-4">
                      <div>
                        <h3 className="font-medium">{hire.name}</h3>
                        <p className="text-sm text-muted-foreground">{hire.role}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {hire.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="bg-blue-50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">{hire.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Hires
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Talent</CardTitle>
              <CardDescription>Graduates that match your company's requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {recommendedTalent.map((talent, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={talent.image || "/placeholder.svg"}
                        alt={talent.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{talent.name}</h3>
                        <div className="mt-1 flex items-center gap-1">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {talent.match}% Match
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Skills:</span> {talent.skills.join(", ")}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Projects:</span> {talent.projects} completed
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View All Recommendations</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="talent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Talent Pool Overview</CardTitle>
              <CardDescription>Analysis of available graduates by skill category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-medium">Frontend Development</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>JavaScript</span>
                        </div>
                        <span>320 graduates</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>React</span>
                        </div>
                        <span>280 graduates</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>CSS/SCSS</span>
                        </div>
                        <span>350 graduates</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>TypeScript</span>
                        </div>
                        <span>210 graduates</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Backend Development</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-green-600" />
                          <span>Node.js</span>
                        </div>
                        <span>240 graduates</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-green-600" />
                          <span>Python</span>
                        </div>
                        <span>260 graduates</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-green-600" />
                          <span>Java</span>
                        </div>
                        <span>180 graduates</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-green-600" />
                          <span>PHP</span>
                        </div>
                        <span>150 graduates</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Database & DevOps</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-purple-600" />
                          <span>SQL</span>
                        </div>
                        <span>290 graduates</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-purple-600" />
                          <span>MongoDB</span>
                        </div>
                        <span>220 graduates</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-purple-600" />
                          <span>AWS</span>
                        </div>
                        <span>180 graduates</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-purple-600" />
                          <span>Docker</span>
                        </div>
                        <span>160 graduates</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Search Talent Pool</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Diversity Metrics</CardTitle>
                <CardDescription>Breakdown of talent pool diversity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Gender Distribution</span>
                    </div>
                    <div className="flex h-4 w-full overflow-hidden rounded-full">
                      <div className="h-full bg-blue-500" style={{ width: "48%" }}></div>
                      <div className="h-full bg-pink-500" style={{ width: "45%" }}></div>
                      <div className="h-full bg-purple-500" style={{ width: "7%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span>Male (48%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                        <span>Female (45%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span>Non-binary (7%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Geographic Distribution</span>
                    </div>
                    <div className="flex h-4 w-full overflow-hidden rounded-full">
                      <div className="h-full bg-green-500" style={{ width: "35%" }}></div>
                      <div className="h-full bg-yellow-500" style={{ width: "25%" }}></div>
                      <div className="h-full bg-red-500" style={{ width: "20%" }}></div>
                      <div className="h-full bg-indigo-500" style={{ width: "20%" }}></div>
                    </div>
                    <div className="flex flex-wrap justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>Urban (35%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span>Suburban (25%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span>Rural (20%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                        <span>Remote (20%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Talent Acquisition Metrics</CardTitle>
                <CardDescription>Performance of your talent acquisition efforts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Average Time to Hire</div>
                      <div className="text-sm text-muted-foreground">From first contact to offer acceptance</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">18 days</div>
                      <div className="flex items-center text-sm text-green-600">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        30% faster than industry average
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Offer Acceptance Rate</div>
                      <div className="text-sm text-muted-foreground">Percentage of offers accepted</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">85%</div>
                      <div className="flex items-center text-sm text-green-600">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        15% higher than last quarter
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Retention Rate</div>
                      <div className="text-sm text-muted-foreground">Graduates still employed after 6 months</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">92%</div>
                      <div className="flex items-center text-sm text-green-600">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        8% higher than industry average
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>"Try Before You Hire" Projects</CardTitle>
              <CardDescription>Short-term projects to evaluate graduate performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                  <Button>Create New Project</Button>
                </div>

                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <h3 className="font-medium">Frontend Component Library</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <Badge variant="outline" className="bg-blue-50">
                          React
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          TypeScript
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          UI/UX
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">4 Applicants</div>
                      <div className="text-sm text-muted-foreground">Posted 3 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <h3 className="font-medium">API Integration for Payment Gateway</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <Badge variant="outline" className="bg-blue-50">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Express
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          API
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">6 Applicants</div>
                      <div className="text-sm text-muted-foreground">Posted 5 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <h3 className="font-medium">Database Schema Optimization</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <Badge variant="outline" className="bg-blue-50">
                          SQL
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          PostgreSQL
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Performance
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">3 Applicants</div>
                      <div className="text-sm text-muted-foreground">Posted 2 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-medium">Mobile App UI Design</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <Badge variant="outline" className="bg-blue-50">
                          UI/UX
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Figma
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Mobile
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">8 Applicants</div>
                      <div className="text-sm text-muted-foreground">Posted 1 week ago</div>
                    </div>
                  </div>
                </div>
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
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Projects currently in progress with graduates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">E-commerce Checkout Flow</h3>
                      <p className="text-sm text-muted-foreground">Assigned to: David Lee</p>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Started: Apr 28, 2023</span>
                    <span className="text-muted-foreground">Due: May 15, 2023</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">User Authentication System</h3>
                      <p className="text-sm text-muted-foreground">Assigned to: Sarah Williams</p>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Started: May 2, 2023</span>
                    <span className="text-muted-foreground">Due: May 20, 2023</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Data Visualization Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Assigned to: Michael Chen</p>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Started: Apr 20, 2023</span>
                    <span className="text-muted-foreground">Due: May 10, 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Talent Recommendations</CardTitle>
              <CardDescription>Graduates that match your company's requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recommendedTalent.map((talent, index) => (
                  <div key={index} className="flex items-start justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={talent.image || "/placeholder.svg"}
                        alt={talent.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{talent.name}</h3>
                        <div className="mt-1">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {talent.match}% Match
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Skills:</span> {talent.skills.join(", ")}
                        </div>
                        <div className="mt-1 text-sm">
                          <span className="font-medium">Projects:</span> {talent.projects} completed
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm">View Profile</Button>
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Adjust Matching Criteria</Button>
              <Button>View All Matches</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Intelligence</CardTitle>
              <CardDescription>Analysis of your hiring needs vs. available talent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
                  <h3 className="font-medium text-amber-800 dark:text-amber-300">Critical Skill Gaps</h3>
                  <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                    These skills have high demand in your company but low availability in the talent pool
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>DevOps</span>
                      <span className="text-sm">35% gap</span>
                    </div>
                    <Progress value={35} className="h-2 bg-amber-200 [&>div]:bg-amber-600" />

                    <div className="flex items-center justify-between">
                      <span>Cloud Architecture</span>
                      <span className="text-sm">30% gap</span>
                    </div>
                    <Progress value={30} className="h-2 bg-amber-200 [&>div]:bg-amber-600" />

                    <div className="flex items-center justify-between">
                      <span>Mobile Development</span>
                      <span className="text-sm">25% gap</span>
                    </div>
                    <Progress value={25} className="h-2 bg-amber-200 [&>div]:bg-amber-600" />
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                  <h3 className="font-medium text-green-800 dark:text-green-300">Well-Supplied Skills</h3>
                  <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                    These skills have good availability in the talent pool relative to your needs
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>JavaScript</span>
                      <span className="text-sm">15% surplus</span>
                    </div>
                    <Progress value={85} className="h-2 bg-green-200 [&>div]:bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span>HTML/CSS</span>
                      <span className="text-sm">20% surplus</span>
                    </div>
                    <Progress value={90} className="h-2 bg-green-200 [&>div]:bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span>SQL</span>
                      <span className="text-sm">10% surplus</span>
                    </div>
                    <Progress value={80} className="h-2 bg-green-200 [&>div]:bg-green-600" />
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Recommendations</h3>
                  <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-400">
                    <li className="flex items-start gap-2">
                      <LineChart className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Consider creating DevOps training programs for existing talent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <LineChart className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Partner with cloud certification programs to build talent pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <LineChart className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Leverage surplus JavaScript talent for cross-training opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
