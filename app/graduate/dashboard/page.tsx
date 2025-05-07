import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BookOpen,
  Code,
  Database,
  FileText,
  Layers,
  MessageSquare,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export default function GraduateDashboard() {
  // Mock data for skills
  const skills = [
    { name: "JavaScript", level: 75, required: 85 },
    { name: "React", level: 60, required: 80 },
    { name: "Node.js", level: 45, required: 70 },
    { name: "Python", level: 80, required: 75 },
    { name: "SQL", level: 65, required: 75 },
  ]

  // Mock data for achievements
  const achievements = [
    { name: "First Project Completed", icon: <FileText className="h-4 w-4" />, date: "Mar 15, 2023" },
    { name: "JavaScript Proficiency", icon: <Code className="h-4 w-4" />, date: "Apr 2, 2023" },
    { name: "Team Collaboration Star", icon: <MessageSquare className="h-4 w-4" />, date: "May 10, 2023" },
    { name: "Database Design Expert", icon: <Database className="h-4 w-4" />, date: "Jun 22, 2023" },
  ]

  // Mock data for learning roadmap
  const roadmap = [
    { name: "Advanced JavaScript", status: "completed", icon: <CheckCircle2 className="h-4 w-4 text-green-500" /> },
    { name: "React Fundamentals", status: "completed", icon: <CheckCircle2 className="h-4 w-4 text-green-500" /> },
    { name: "State Management", status: "in-progress", icon: <TrendingUp className="h-4 w-4 text-blue-500" /> },
    { name: "Backend Development", status: "upcoming", icon: <Layers className="h-4 w-4 text-gray-500" /> },
    { name: "DevOps Basics", status: "upcoming", icon: <Layers className="h-4 w-4 text-gray-500" /> },
  ]

  return (
    <DashboardShell userType="graduate">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Profile & Skills Dashboard</h1>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skills Completed</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12/20</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Earnings</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$350</div>
                <p className="text-xs text-muted-foreground">+$120 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Skills Gap Overview</CardTitle>
                <CardDescription>Your current skills vs. industry requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.slice(0, 3).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {skill.level}% / {skill.required}%
                      </div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: `${skill.level}%` }} />
                      <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.required}%` }} />
                    </div>
                  </div>
                ))}
                <div className="text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>Your current level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span>Industry requirement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Learning Roadmap</CardTitle>
                <CardDescription>Personalized path based on your career goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmap.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.icon}
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground capitalize">{item.status.replace("-", " ")}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
              <CardDescription>Your current skills compared to industry requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {skill.level}% / {skill.required}%
                    </div>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full bg-blue-600" style={{ width: `${skill.level}%` }} />
                    <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.required}%` }} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {skill.level < skill.required ? (
                      <span className="text-amber-600">You need to improve this skill to meet industry standards</span>
                    ) : (
                      <span className="text-green-600">You meet or exceed industry standards</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <h3 className="font-semibold">Recommended Next Steps</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>Complete Node.js Fundamentals course</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-600" />
                    <span>Practice React with 2 more micro-projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Take the JavaScript advanced assessment</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Learning Roadmap</CardTitle>
              <CardDescription>Based on your career goal: Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-semibold">Phase 1: Foundations</h3>
                  <div className="ml-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">JavaScript Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Completed on March 10, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">HTML & CSS Mastery</div>
                        <div className="text-sm text-muted-foreground">Completed on February 15, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Git & GitHub</div>
                        <div className="text-sm text-muted-foreground">Completed on April 5, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Phase 2: Frontend Development</h3>
                  <div className="ml-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">React Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Completed on May 20, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="mt-0.5 h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">State Management (Redux)</div>
                        <div className="text-sm text-muted-foreground">In progress - 60% complete</div>
                        <Progress value={60} className="mt-2 h-2 w-full" />
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">Frontend Testing</div>
                        <div className="text-sm text-muted-foreground">Upcoming - Scheduled for next month</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Phase 3: Backend Development</h3>
                  <div className="ml-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Layers className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">Node.js & Express</div>
                        <div className="text-sm text-muted-foreground">Upcoming - Starts in 2 months</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">Database Design & SQL</div>
                        <div className="text-sm text-muted-foreground">Upcoming - Starts in 3 months</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">API Development</div>
                        <div className="text-sm text-muted-foreground">Upcoming - Starts in 4 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Badges</CardTitle>
              <CardDescription>Recognition for your accomplishments on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center rounded-lg border p-4 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      {achievement.icon}
                    </div>
                    <h3 className="mt-3 font-medium">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-semibold">Recent Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">
                    <Award className="h-4 w-4" />
                    <span>Problem Solver</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Fast Learner</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    <MessageSquare className="h-4 w-4" />
                    <span>Team Player</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                    <Code className="h-4 w-4" />
                    <span>Code Ninja</span>
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
