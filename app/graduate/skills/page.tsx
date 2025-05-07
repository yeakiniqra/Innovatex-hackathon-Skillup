import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Code,
  FileCheck,
  PieChart,
  BarChart3,
  Target,
  TrendingUp,
  Trophy,
  Zap,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function SkillsValidation() {
  // Mock data for skills
  const skills = {
    technical: [
      { name: "JavaScript", level: 75, industry: 85, trend: "up", trending: true },
      { name: "React", level: 60, industry: 80, trend: "up", trending: true },
      { name: "Node.js", level: 45, industry: 70, trend: "stable", trending: false },
      { name: "Python", level: 80, industry: 75, trend: "up", trending: true },
      { name: "SQL", level: 65, industry: 75, trend: "stable", trending: false },
      { name: "Git", level: 70, industry: 65, trend: "stable", trending: false },
      { name: "CSS/SCSS", level: 82, industry: 70, trend: "stable", trending: false },
      { name: "TypeScript", level: 55, industry: 75, trend: "up", trending: true },
    ],
    soft: [
      { name: "Communication", level: 85, industry: 80, trend: "stable", trending: false },
      { name: "Problem Solving", level: 75, industry: 85, trend: "up", trending: true },
      { name: "Teamwork", level: 90, industry: 85, trend: "stable", trending: false },
      { name: "Time Management", level: 70, industry: 80, trend: "up", trending: true },
      { name: "Adaptability", level: 80, industry: 75, trend: "stable", trending: false },
    ],
  }

  // Mock data for assessment opportunities
  const assessments = [
    {
      id: 1,
      title: "JavaScript Advanced Concepts",
      difficulty: "Intermediate",
      duration: "45 minutes",
      questions: 30,
      description: "Test your knowledge of closures, prototypes, and async programming.",
      icon: Code,
    },
    {
      id: 2,
      title: "React Component Architecture",
      difficulty: "Advanced",
      duration: "60 minutes",
      questions: 25,
      description: "Demonstrate your understanding of React component design patterns and state management.",
      icon: FileCheck,
    },
    {
      id: 3,
      title: "SQL Query Optimization",
      difficulty: "Intermediate",
      duration: "40 minutes",
      questions: 20,
      description: "Show your ability to write efficient SQL queries and understand database indexing.",
      icon: BarChart3,
    },
    {
      id: 4,
      title: "Problem Solving & Algorithms",
      difficulty: "Advanced",
      duration: "90 minutes",
      questions: 15,
      description: "Solve complex programming problems and demonstrate algorithm knowledge.",
      icon: Target,
    },
  ]

  // Mock data for skill badges and certifications
  const certifications = [
    {
      id: 1,
      name: "JavaScript Fundamentals",
      issuer: "SkillUp Academy",
      date: "March 15, 2023",
      icon: Award,
      validated: true,
    },
    {
      id: 2,
      name: "React Developer",
      issuer: "SkillUp Academy",
      date: "April 22, 2023",
      icon: Trophy,
      validated: true,
    },
    {
      id: 3,
      name: "Database Design",
      issuer: "SkillUp Academy",
      date: "May 10, 2023",
      icon: Award,
      validated: true,
    },
  ]

  // Mock data for skill improvement plan
  const improvementPlan = [
    {
      skill: "Node.js",
      gap: 25,
      recommendations: [
        { type: "course", name: "Node.js API Development", duration: "4 weeks" },
        { type: "project", name: "Build a RESTful API", duration: "2 weeks" },
        { type: "assessment", name: "Node.js Proficiency Test", duration: "1 hour" },
      ],
    },
    {
      skill: "TypeScript",
      gap: 20,
      recommendations: [
        { type: "course", name: "TypeScript Fundamentals", duration: "3 weeks" },
        { type: "project", name: "Convert JS Project to TS", duration: "1 week" },
        { type: "assessment", name: "TypeScript Basics Quiz", duration: "45 min" },
      ],
    },
  ]

  return (
    <DashboardShell userType="graduate">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Skills Validation Center</h1>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Skills Overview</TabsTrigger>
          <TabsTrigger value="assessments">Skill Assessments</TabsTrigger>
          <TabsTrigger value="certifications">Badges & Certifications</TabsTrigger>
          <TabsTrigger value="improvement">Improvement Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skills Validated</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16/24</div>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Industry Match</CardTitle>
                <Target className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+5% from last assessment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Badges</CardTitle>
                <Award className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Trending Skills</CardTitle>
                <TrendingUp className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Skills in high demand</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Your technical skills compared to industry benchmarks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.technical.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        {skill.trending && (
                          <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {skill.level}% / {skill.industry}%
                      </div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: `${skill.level}%` }} />
                      <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.industry}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {skill.level < skill.industry ? (
                        <span className="text-amber-600">
                          {skill.industry - skill.level}% gap to industry benchmark
                        </span>
                      ) : (
                        <span className="text-green-600">{skill.level - skill.industry}% above industry benchmark</span>
                      )}
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
                    <span>Industry benchmark</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>Your soft skills compared to industry benchmarks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.soft.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        {skill.trending && (
                          <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {skill.level}% / {skill.industry}%
                      </div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-green-100">
                      <div className="h-full bg-green-600" style={{ width: `${skill.level}%` }} />
                      <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.industry}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {skill.level < skill.industry ? (
                        <span className="text-amber-600">
                          {skill.industry - skill.level}% gap to industry benchmark
                        </span>
                      ) : (
                        <span className="text-green-600">{skill.level - skill.industry}% above industry benchmark</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600" />
                    <span>Your current level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span>Industry benchmark</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Skills Radar</CardTitle>
              <CardDescription>Comprehensive view of your skill distribution</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                {/* This would typically be a radar/spider chart - using a placeholder visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full rounded-full border border-dashed border-gray-300 p-4">
                    <div className="h-full w-full rounded-full border border-dashed border-gray-300 p-4">
                      <div className="h-full w-full rounded-full border border-dashed border-gray-300 p-4">
                        <div className="h-full w-full rounded-full border border-dashed border-gray-300 p-4">
                          <div className="h-full w-full rounded-full border border-dashed border-gray-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skill points - positioned at various angles */}
                  <div className="absolute left-1/2 top-[15%] -translate-x-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">JavaScript</span>
                    </div>
                  </div>
                  <div className="absolute right-[15%] top-[30%] transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">React</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[30%] right-[15%] transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">Node.js</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">Python</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[30%] left-[15%] transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">SQL</span>
                    </div>
                  </div>
                  <div className="absolute left-[15%] top-[30%] transform">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span className="mt-1 text-xs">Communication</span>
                    </div>
                  </div>
                </div>

                {/* Center label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white p-4 text-center shadow-sm">
                  <div className="font-medium">Skills Profile</div>
                  <div className="text-sm text-muted-foreground">78% Match</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-100 text-blue-700">Technical</Badge>
                <Badge className="bg-green-100 text-green-700">Soft Skills</Badge>
                <Badge className="bg-rose-100 text-rose-700">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Trending
                </Badge>
                <Badge className="bg-amber-100 text-amber-700">
                  <AlertCircle className="mr-1 h-3 w-3" />
                  Gap Areas
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Detailed Skills Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Skill Assessments</CardTitle>
              <CardDescription>Take these assessments to validate your skills and earn badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {assessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className="flex flex-col rounded-lg border p-4 transition-all hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <assessment.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{assessment.title}</h3>
                          <p className="text-sm text-muted-foreground">{assessment.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-blue-50">
                          {assessment.difficulty}
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          {assessment.duration}
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          {assessment.questions} Questions
                        </Badge>
                      </div>

                      <Button className="w-full">Start Assessment</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Assessment Results</CardTitle>
              <CardDescription>Your performance in recently completed skill assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">JavaScript Fundamentals</h3>
                        <p className="text-sm text-muted-foreground">Completed on May 5, 2023</p>
                      </div>
                    </div>
                    <Badge className="w-fit bg-green-100 text-green-700">85% Score</Badge>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance</span>
                      <span>85/100</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">28/30</div>
                        <div className="text-xs text-muted-foreground">Questions</div>
                      </div>
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">42 min</div>
                        <div className="text-xs text-muted-foreground">Time Taken</div>
                      </div>
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">92%</div>
                        <div className="text-xs text-muted-foreground">Percentile</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">React Component Design</h3>
                        <p className="text-sm text-muted-foreground">Completed on April 22, 2023</p>
                      </div>
                    </div>
                    <Badge className="w-fit bg-green-100 text-green-700">78% Score</Badge>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance</span>
                      <span>78/100</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">23/30</div>
                        <div className="text-xs text-muted-foreground">Questions</div>
                      </div>
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">55 min</div>
                        <div className="text-xs text-muted-foreground">Time Taken</div>
                      </div>
                      <div className="rounded-md bg-blue-50 p-2">
                        <div className="font-medium">85%</div>
                        <div className="text-xs text-muted-foreground">Percentile</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Assessment History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Badges & Certifications</CardTitle>
              <CardDescription>Skills you've validated through assessments and projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex flex-col items-center rounded-lg border p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <cert.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mt-4 text-center font-medium">{cert.name}</h3>
                    <p className="text-center text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-center text-xs text-muted-foreground">{cert.date}</p>
                    <div className="mt-4 flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                      <CheckCircle className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <PieChart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-center font-medium">Earn New Badge</h3>
                  <p className="text-center text-sm text-muted-foreground">Complete assessments to earn more badges</p>
                  <Button variant="outline" className="mt-4">
                    View Available Badges
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Certifications</CardTitle>
              <CardDescription>Professional certifications to enhance your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <Code className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Front-End Web Developer Certification</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive certification covering HTML, CSS, JavaScript and React
                        </p>
                      </div>
                    </div>
                    <Button>Start Process</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <FileCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Data Science Fundamentals</h3>
                        <p className="text-sm text-muted-foreground">
                          Learn Python, statistics, data analysis, and visualization
                        </p>
                      </div>
                    </div>
                    <Button>Start Process</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                        <ClipboardCheck className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Agile Project Management</h3>
                        <p className="text-sm text-muted-foreground">Master Scrum, Kanban, and Agile methodologies</p>
                      </div>
                    </div>
                    <Button>Start Process</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Available Certifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="improvement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Areas where your skills need improvement to meet industry standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {improvementPlan.map((item) => (
                  <div key={item.skill} className="rounded-lg border p-4">
                    <h3 className="font-medium">{item.skill}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Current gap to industry benchmark</span>
                        <span className="font-medium text-amber-600">{item.gap}%</span>
                      </div>
                      <Progress value={100 - item.gap} className="h-2" />
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Recommended Improvement Path</h4>
                      <div className="mt-2 space-y-2">
                        {item.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start gap-2 rounded-md bg-blue-50 p-3">
                            {rec.type === "course" && <BookOpen className="mt-0.5 h-4 w-4 text-blue-600" />}
                            {rec.type === "project" && <Code className="mt-0.5 h-4 w-4 text-green-600" />}
                            {rec.type === "assessment" && <ClipboardCheck className="mt-0.5 h-4 w-4 text-purple-600" />}
                            <div>
                              <div className="font-medium">{rec.name}</div>
                              <div className="text-xs text-muted-foreground">Estimated time: {rec.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button>Start Improvement Plan</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Learning Paths</CardTitle>
              <CardDescription>Custom learning recommendations based on your skill profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="flex items-center gap-2 font-medium text-blue-800 dark:text-blue-300">
                    <Zap className="h-5 w-5" />
                    Full Stack Development Track
                  </h3>
                  <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                    Based on your current skills in JavaScript, React, and Node.js
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-md bg-white p-3 shadow-sm dark:bg-blue-900">
                      <div className="font-medium">Advanced React Patterns</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Master context, hooks, and component composition
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs">
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300"
                        >
                          4 weeks
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300"
                        >
                          Intermediate
                        </Badge>
                      </div>
                    </div>

                    <div className="rounded-md bg-white p-3 shadow-sm dark:bg-blue-900">
                      <div className="font-medium">Node.js API Development</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Build robust APIs with Express and MongoDB
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs">
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300"
                        >
                          6 weeks
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300"
                        >
                          Intermediate
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <Button className="bg-blue-600 hover:bg-blue-700">View Complete Path</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                  <h3 className="flex items-center gap-2 font-medium text-purple-800 dark:text-purple-300">
                    <Zap className="h-5 w-5" />
                    Data Science Fundamentals
                  </h3>
                  <p className="mt-1 text-sm text-purple-700 dark:text-purple-400">
                    Leveraging your Python skills to move into data science
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-md bg-white p-3 shadow-sm dark:bg-purple-900">
                      <div className="font-medium">Python for Data Analysis</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Learn pandas, NumPy, and data manipulation techniques
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs">
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
                        >
                          5 weeks
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
                        >
                          Beginner
                        </Badge>
                      </div>
                    </div>

                    <div className="rounded-md bg-white p-3 shadow-sm dark:bg-purple-900">
                      <div className="font-medium">Data Visualization</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Create impactful visualizations with matplotlib and seaborn
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs">
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
                        >
                          4 weeks
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
                        >
                          Intermediate
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700">View Complete Path</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explore All Learning Paths
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
