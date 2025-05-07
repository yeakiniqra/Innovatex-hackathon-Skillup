import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardShell } from "@/components/dashboard-shell"
import {
  BarChart,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  LineChart,
  MapPin,
  Medal,
  MessageSquare,
  Milestone,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react"

export default function CareerPage() {
  return (
    <DashboardShell userType="graduate">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Career Development</h2>
        <div className="flex items-center space-x-2">
          <Link href="/graduate/career/assessment" className="text-sm text-muted-foreground underline">
            Take Assessment
          </Link>
          <Button variant="outline" size="sm">
            Update Profile
          </Button>
        </div>
      </div>
      <Tabs defaultValue="path" className="space-y-4">
        <TabsList>
          <TabsTrigger value="path">Career Path</TabsTrigger>
          <TabsTrigger value="skills">Skill Development</TabsTrigger>
          <TabsTrigger value="market">Job Market</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
        </TabsList>

        {/* Career Path Tab */}
        <TabsContent value="path" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Career Stage</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Junior Developer</div>
                <p className="text-xs text-muted-foreground">1.5 years experience</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Progress to Mid-level</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Career Goals</CardTitle>
                <Compass className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-2 mt-0.5 rounded-full bg-green-500/20 p-1">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Short-term (6 months)</p>
                      <p className="text-xs text-muted-foreground">Master React and Next.js</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-0.5 rounded-full bg-blue-500/20 p-1">
                      <Clock className="h-3 w-3 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mid-term (2 years)</p>
                      <p className="text-xs text-muted-foreground">Become a Full-stack Developer</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-0.5 rounded-full bg-purple-500/20 p-1">
                      <Star className="h-3 w-3 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Long-term (5 years)</p>
                      <p className="text-xs text-muted-foreground">Lead Developer position</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Career Milestones</CardTitle>
                <Milestone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-green-500/20 p-1">
                        <Trophy className="h-3 w-3 text-green-500" />
                      </div>
                      <span className="text-sm">First Professional Project</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Completed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-green-500/20 p-1">
                        <Trophy className="h-3 w-3 text-green-500" />
                      </div>
                      <span className="text-sm">First Team Lead Role</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Completed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-blue-500/20 p-1">
                        <Trophy className="h-3 w-3 text-blue-500" />
                      </div>
                      <span className="text-sm">First Architecture Design</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Career Roadmap</CardTitle>
              <CardDescription>Your personalized career development path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                {/* Past */}
                <div className="relative pl-10 pb-10">
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="mb-2 text-lg font-semibold">Junior Developer</div>
                  <div className="mb-4 text-sm text-muted-foreground">Jan 2023 - Present</div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 font-medium">Key Achievements</div>
                    <ul className="ml-4 list-disc text-sm space-y-1">
                      <li>Mastered HTML, CSS, and JavaScript fundamentals</li>
                      <li>Completed 5 client projects with positive feedback</li>
                      <li>Learned React basics and component architecture</li>
                    </ul>
                  </div>
                </div>

                {/* Current */}
                <div className="relative pl-10 pb-10">
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                    <Clock className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="mb-2 text-lg font-semibold">Mid-level Developer</div>
                  <div className="mb-4 text-sm text-muted-foreground">Expected: Q3 2024</div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 font-medium">Focus Areas</div>
                    <ul className="ml-4 list-disc text-sm space-y-1">
                      <li>Advanced React patterns and state management</li>
                      <li>Backend development with Node.js</li>
                      <li>Database design and optimization</li>
                      <li>Team collaboration and code review skills</li>
                    </ul>
                  </div>
                </div>

                {/* Future */}
                <div className="relative pl-10">
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                    <Star className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="mb-2 text-lg font-semibold">Senior Developer</div>
                  <div className="mb-4 text-sm text-muted-foreground">Target: 2026</div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 font-medium">Required Skills</div>
                    <ul className="ml-4 list-disc text-sm space-y-1">
                      <li>System architecture and design patterns</li>
                      <li>Technical leadership and mentoring</li>
                      <li>Project planning and estimation</li>
                      <li>Cross-functional collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skill Development Tab */}
        <TabsContent value="skills" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Progress</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>React</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>TypeScript</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Node.js</span>
                      <span>42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Database Design</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recommended Skills</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Next.js", reason: "High demand in job market", priority: "High" },
                    { name: "GraphQL", reason: "Complements your React skills", priority: "Medium" },
                    { name: "Docker", reason: "Essential for DevOps practices", priority: "Medium" },
                    { name: "AWS Basics", reason: "Most requested cloud platform", priority: "Low" },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.reason}</p>
                      </div>
                      <Badge
                        variant={
                          skill.priority === "High" ? "default" : skill.priority === "Medium" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {skill.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Learning Resources
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                <Medal className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 Days</div>
                <p className="text-xs text-muted-foreground">Current learning streak</p>
                <div className="mt-4 grid grid-cols-7 gap-1">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="h-8 rounded-sm bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-8 rounded-sm border border-dashed" />
                  ))}
                </div>
                <div className="mt-4 text-center text-sm">
                  <span className="font-medium">Next milestone:</span> 21 days (1 week to go!)
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Skill Development Plan</CardTitle>
              <CardDescription>Personalized learning path based on your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    phase: "Current Focus (Next 3 months)",
                    skills: [
                      { name: "Advanced React", progress: 65, resources: 4 },
                      { name: "TypeScript", progress: 42, resources: 3 },
                      { name: "Next.js", progress: 28, resources: 5 },
                    ],
                  },
                  {
                    phase: "Next Phase (3-6 months)",
                    skills: [
                      { name: "Node.js Fundamentals", progress: 15, resources: 6 },
                      { name: "RESTful API Design", progress: 10, resources: 4 },
                      { name: "Database Design", progress: 5, resources: 3 },
                    ],
                  },
                  {
                    phase: "Future Skills (6-12 months)",
                    skills: [
                      { name: "Cloud Deployment", progress: 0, resources: 5 },
                      { name: "CI/CD Pipelines", progress: 0, resources: 4 },
                      { name: "System Architecture", progress: 0, resources: 3 },
                    ],
                  },
                ].map((phase) => (
                  <div key={phase.phase}>
                    <h3 className="text-lg font-medium mb-3">{phase.phase}</h3>
                    <div className="space-y-4">
                      {phase.skills.map((skill) => (
                        <div key={skill.name} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <Badge variant="outline">{skill.resources} resources</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{skill.progress}%</span>
                          </div>
                          <Progress value={skill.progress} className="h-2" />
                          {skill.progress > 0 ? (
                            <Button className="p-2 h-auto mt-2 text-sm">
                              Continue Learning
                            </Button>
                          ) : (
                            <Button className="p-2 h-auto mt-2 text-sm">
                              Start Learning
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Job Market Tab */}
        <TabsContent value="market" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Fit</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-muted-foreground">Match with current job market demands</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Your skill profile vs. market demand</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <Button className="p-4 h-auto mt-2 text-sm">
                  View detailed analysis
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Salary Insights</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$85,000</div>
                <p className="text-xs text-muted-foreground">Average for your skill level and location</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Entry Level</span>
                    <span>$65,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Your Level</span>
                    <span>$85,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Senior Level</span>
                    <span>$120,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hot Skills</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "React", growth: "+24%", status: "You have this" },
                    { name: "Next.js", growth: "+32%", status: "Learning" },
                    { name: "TypeScript", growth: "+18%", status: "Learning" },
                    { name: "AWS", growth: "+28%", status: "Gap" },
                    { name: "Docker", growth: "+15%", status: "Gap" },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-xs text-green-500">{skill.growth} YoY demand</p>
                      </div>
                      <Badge
                        variant={
                          skill.status === "You have this"
                            ? "default"
                            : skill.status === "Learning"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {skill.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Job Market Insights</CardTitle>
              <CardDescription>Trends and opportunities based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Top Job Titles For Your Profile</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        title: "Frontend Developer",
                        match: 85,
                        salary: "$80-95K",
                        openings: 1240,
                        skills: ["React", "JavaScript", "CSS", "HTML"],
                      },
                      {
                        title: "React Developer",
                        match: 82,
                        salary: "$85-100K",
                        openings: 980,
                        skills: ["React", "Redux", "JavaScript", "TypeScript"],
                      },
                      {
                        title: "Full Stack Developer",
                        match: 68,
                        salary: "$90-110K",
                        openings: 1560,
                        skills: ["React", "Node.js", "MongoDB", "Express"],
                      },
                      {
                        title: "UI Developer",
                        match: 75,
                        salary: "$75-90K",
                        openings: 720,
                        skills: ["React", "CSS", "UI/UX", "Design Systems"],
                      },
                    ].map((job) => (
                      <div key={job.title} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{job.title}</span>
                          <Badge>{job.match}% match</Badge>
                        </div>
                        <div className="text-sm space-y-1 mb-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Salary Range:</span>
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Open Positions:</span>
                            <span>{job.openings.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Regional Opportunities</h3>
                  <div className="space-y-3">
                    {[
                      { region: "San Francisco Bay Area", jobs: 3200, avgSalary: "$110K", remote: "30%" },
                      { region: "New York City", jobs: 2800, avgSalary: "$105K", remote: "35%" },
                      { region: "Austin, TX", jobs: 1500, avgSalary: "$95K", remote: "40%" },
                      { region: "Remote (US-based)", jobs: 4500, avgSalary: "$90K", remote: "100%" },
                    ].map((region) => (
                      <div key={region.region} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{region.region}</p>
                            <p className="text-xs text-muted-foreground">
                              {region.jobs.toLocaleString()} open positions
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{region.avgSalary}</p>
                          <p className="text-xs text-muted-foreground">{region.remote} remote</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mentorship Tab */}
        <TabsContent value="mentorship" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Mentors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", role: "Senior Frontend Developer", sessions: 5 },
                    { name: "Michael Chen", role: "Tech Lead", sessions: 3 },
                  ].map((mentor) => (
                    <div key={mentor.name} className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{mentor.name}</p>
                        <p className="text-xs text-muted-foreground">{mentor.role}</p>
                        <p className="text-xs">{mentor.sessions} sessions completed</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">Find New Mentors</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Code Review Session</span>
                      <Badge variant="outline">Tomorrow</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">With Sarah Johnson</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>2:00 PM - 3:00 PM</span>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Career Planning</span>
                      <Badge variant="outline">Next Week</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">With Michael Chen</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>11:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Schedule New Session
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Peer Network</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Alex Rivera", role: "Frontend Developer", company: "TechCorp" },
                    { name: "Jamie Lee", role: "UX Developer", company: "DesignHub" },
                    { name: "Taylor Wilson", role: "Full Stack Developer", company: "StartupX" },
                  ].map((peer) => (
                    <div key={peer.name} className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">
                        {peer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{peer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {peer.role} at {peer.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Find Peers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Mentorship Opportunities</CardTitle>
              <CardDescription>Connect with industry professionals to accelerate your growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      name: "David Park",
                      role: "Senior Software Engineer",
                      company: "Google",
                      expertise: ["React", "System Design", "Career Growth"],
                      availability: "2 slots this week",
                      match: 92,
                    },
                    {
                      name: "Priya Sharma",
                      role: "Engineering Manager",
                      company: "Microsoft",
                      expertise: ["Leadership", "Frontend", "Interview Prep"],
                      availability: "1 slot this week",
                      match: 85,
                    },
                    {
                      name: "James Wilson",
                      role: "Tech Lead",
                      company: "Stripe",
                      expertise: ["Full Stack", "Performance", "Architecture"],
                      availability: "3 slots this week",
                      match: 78,
                    },
                    {
                      name: "Maria Rodriguez",
                      role: "Principal Engineer",
                      company: "Netflix",
                      expertise: ["UI/UX", "Component Design", "Testing"],
                      availability: "Next week",
                      match: 81,
                    },
                  ].map((mentor) => (
                    <div key={mentor.name} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-medium">{mentor.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {mentor.role} at {mentor.company}
                            </p>
                          </div>
                        </div>
                        <Badge>{mentor.match}% match</Badge>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Expertise:</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {mentor.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{mentor.availability}</span>
                        </div>
                        <Button size="sm" className="w-full">
                          Request Mentorship
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Group Mentorship Programs</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Frontend Masters Circle",
                        members: 12,
                        focus: "Advanced React patterns and performance optimization",
                        schedule: "Weekly, Thursdays 7PM",
                      },
                      {
                        title: "Career Accelerator Group",
                        members: 8,
                        focus: "Interview preparation and career advancement strategies",
                        schedule: "Bi-weekly, Tuesdays 6PM",
                      },
                    ].map((group) => (
                      <div key={group.title} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{group.title}</h4>
                          <Badge variant="outline">{group.members} members</Badge>
                        </div>
                        <p className="text-sm mb-2">{group.focus}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{group.schedule}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Join Group
                        </Button>
                      </div>
                    ))}
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
