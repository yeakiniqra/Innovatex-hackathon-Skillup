import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  CloudCog,
  Shield,
  Smartphone,
  Brain,
  Download,
  Clock,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SkillGapIntelligence() {
  // Mock data for skill gaps
  const skillGaps = [
    { name: "Cloud Architecture", demand: 85, supply: 45, trend: "up", critical: true },
    { name: "DevOps", demand: 80, supply: 50, trend: "up", critical: true },
    { name: "Cybersecurity", demand: 90, supply: 60, trend: "up", critical: true },
    { name: "AI/Machine Learning", demand: 75, supply: 40, trend: "up", critical: true },
    { name: "Mobile Development", demand: 70, supply: 55, trend: "stable", critical: false },
    { name: "Data Science", demand: 80, supply: 65, trend: "up", critical: false },
    { name: "UI/UX Design", demand: 65, supply: 60, trend: "stable", critical: false },
    { name: "Blockchain", demand: 60, supply: 30, trend: "up", critical: false },
  ]

  // Mock data for well-supplied skills
  const wellSuppliedSkills = [
    { name: "JavaScript", demand: 75, supply: 85, trend: "stable" },
    { name: "HTML/CSS", demand: 70, supply: 90, trend: "stable" },
    { name: "React", demand: 80, supply: 85, trend: "stable" },
    { name: "SQL", demand: 65, supply: 75, trend: "stable" },
    { name: "Python", demand: 70, supply: 75, trend: "stable" },
  ]

  // Mock data for industry trends
  const industryTrends = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", growth: 15, popularity: 85 },
        { name: "Vue.js", growth: 25, popularity: 65 },
        { name: "Angular", growth: -5, popularity: 60 },
        { name: "TypeScript", growth: 30, popularity: 75 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", growth: 20, popularity: 80 },
        { name: "Python", growth: 15, popularity: 75 },
        { name: "Java", growth: -10, popularity: 65 },
        { name: "Go", growth: 35, popularity: 60 },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", growth: 25, popularity: 85 },
        { name: "Docker", growth: 30, popularity: 80 },
        { name: "Kubernetes", growth: 40, popularity: 75 },
        { name: "Terraform", growth: 45, popularity: 65 },
      ],
    },
  ]

  // Mock data for talent pool
  const talentPool = [
    { skill: "JavaScript", available: 320, required: 280, surplus: 40 },
    { skill: "React", available: 280, required: 260, surplus: 20 },
    { skill: "Node.js", available: 240, required: 260, surplus: -20 },
    { skill: "Python", available: 260, required: 240, surplus: 20 },
    { skill: "AWS", available: 180, required: 240, surplus: -60 },
    { skill: "DevOps", available: 150, required: 220, surplus: -70 },
    { skill: "Cybersecurity", available: 120, required: 200, surplus: -80 },
    { skill: "AI/ML", available: 100, required: 180, surplus: -80 },
  ]

  // Mock data for recommendations
  const recommendations = [
    {
      id: 1,
      title: "Upskill Current Team in Cloud Architecture",
      description:
        "Develop an internal training program focused on AWS and Azure certifications to address the critical skill gap.",
      impact: "High",
      timeframe: "3-6 months",
      cost: "Medium",
      type: "Training",
    },
    {
      id: 2,
      title: "Partner with Cybersecurity Bootcamps",
      description:
        "Establish partnerships with cybersecurity bootcamps to create a talent pipeline for this critical skill area.",
      impact: "High",
      timeframe: "1-3 months",
      cost: "Low",
      type: "Partnership",
    },
    {
      id: 3,
      title: "Create AI/ML Mentorship Program",
      description:
        "Pair junior developers with AI/ML experts for knowledge transfer and skill development within your organization.",
      impact: "Medium",
      timeframe: "2-4 months",
      cost: "Low",
      type: "Mentorship",
    },
    {
      id: 4,
      title: "Develop DevOps Certification Program",
      description: "Sponsor employees to obtain DevOps certifications to address this critical skill gap.",
      impact: "High",
      timeframe: "3-6 months",
      cost: "Medium",
      type: "Certification",
    },
  ]

  return (
    <DashboardShell userType="company">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Skill Gap Intelligence</h1>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Gap Overview</TabsTrigger>
          <TabsTrigger value="trends">Industry Trends</TabsTrigger>
          <TabsTrigger value="talent">Talent Pool</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Critical Skill Gaps</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">+1 from last quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Gap Size</CardTitle>
                <BarChart3 className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32%</div>
                <p className="text-xs text-muted-foreground">-3% from last quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Well-Supplied Skills</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">No change from last quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Trending Skills</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">+2 from last quarter</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Critical Skill Gaps</CardTitle>
              <CardDescription>Areas with high demand but low talent availability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillGaps
                .filter((skill) => skill.critical)
                .map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        {skill.trend === "up" && (
                          <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Gap: {skill.demand - skill.supply}%</div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-amber-100">
                      <div className="h-full bg-amber-600" style={{ width: `${skill.supply}%` }} />
                      <div className="absolute top-0 h-full w-px bg-red-500" style={{ left: `${skill.demand}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-amber-600" />
                        <span>Supply: {skill.supply}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span>Demand: {skill.demand}%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Well-Supplied Skills</CardTitle>
                <CardDescription>Areas where talent supply meets or exceeds demand</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {wellSuppliedSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Surplus: {skill.supply - skill.demand}%</div>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-green-100">
                      <div className="h-full bg-green-600" style={{ width: `${skill.supply}%` }} />
                      <div className="absolute top-0 h-full w-px bg-blue-500" style={{ left: `${skill.demand}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-600" />
                        <span>Supply: {skill.supply}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span>Demand: {skill.demand}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Gap Insights</CardTitle>
                <CardDescription>Key findings and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
                    <h3 className="font-medium text-amber-800 dark:text-amber-300">Critical Areas</h3>
                    <ul className="mt-2 space-y-2 text-sm text-amber-700 dark:text-amber-400">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Cloud Architecture has the largest skill gap at 40%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>AI/ML talent is in high demand but short supply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Cybersecurity skills are critical and trending upward</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                    <h3 className="font-medium text-green-800 dark:text-green-300">Opportunities</h3>
                    <ul className="mt-2 space-y-2 text-sm text-green-700 dark:text-green-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Leverage surplus JavaScript and React talent for cross-training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>HTML/CSS skills can be paired with UI/UX training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Python talent can be upskilled for Data Science roles</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">Recommendations</h3>
                    <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-400">
                      <li className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Implement targeted training programs for critical skill gaps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Partner with educational institutions for talent pipeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Consider remote talent to expand your hiring pool</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Forecast</CardTitle>
              <CardDescription>Projected changes in skill gaps over the next 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative h-[300px] w-full rounded-lg border p-4">
                  {/* This would typically be a line chart - using a placeholder visualization */}
                  <div className="absolute inset-x-0 bottom-0 h-[200px]">
                    <div className="relative h-full w-full">
                      {/* Cloud Architecture line */}
                      <div
                        className="absolute bottom-0 left-0 h-[120px] w-full border-t-2 border-red-500"
                        style={{
                          clipPath: "polygon(0 100%, 25% 70%, 50% 60%, 75% 40%, 100% 30%, 100% 100%, 0 100%)",
                        }}
                      >
                        <div className="absolute -top-2 right-0 h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="absolute -top-8 right-0 rounded-md bg-red-100 px-2 py-1 text-xs text-red-700">
                          45% gap
                        </div>
                      </div>

                      {/* DevOps line */}
                      <div
                        className="absolute bottom-0 left-0 h-[120px] w-full border-t-2 border-amber-500"
                        style={{
                          clipPath: "polygon(0 100%, 25% 75%, 50% 65%, 75% 55%, 100% 45%, 100% 100%, 0 100%)",
                        }}
                      >
                        <div className="absolute -top-2 right-0 h-2 w-2 rounded-full bg-amber-500"></div>
                        <div className="absolute -top-8 right-0 rounded-md bg-amber-100 px-2 py-1 text-xs text-amber-700">
                          35% gap
                        </div>
                      </div>

                      {/* JavaScript line */}
                      <div
                        className="absolute bottom-0 left-0 h-[120px] w-full border-t-2 border-green-500"
                        style={{
                          clipPath: "polygon(0 100%, 25% 40%, 50% 35%, 75% 30%, 100% 20%, 100% 100%, 0 100%)",
                        }}
                      >
                        <div className="absolute -top-2 right-0 h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="absolute -top-8 right-0 rounded-md bg-green-100 px-2 py-1 text-xs text-green-700">
                          -10% gap
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart labels */}
                  <div className="absolute bottom-4 left-0 flex w-full justify-between px-4 text-xs text-muted-foreground">
                    <span>Now</span>
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>

                  {/* Legend */}
                  <div className="absolute right-4 top-4 space-y-2 rounded-md bg-white p-2 text-xs shadow-sm dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span>Cloud Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span>DevOps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>JavaScript</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Forecast Insights</h3>
                  <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-400">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Cloud Architecture gap projected to increase by 5% over the next 12 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>DevOps skill gap expected to decrease slightly as training programs take effect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>JavaScript surplus expected to increase as more graduates enter the market</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Forecast Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fastest Growing Skills</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Kubernetes</div>
                <p className="text-xs text-muted-foreground">+40% growth year-over-year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Most In-Demand</CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Cybersecurity</div>
                <p className="text-xs text-muted-foreground">90% demand vs 60% supply</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Declining Skills</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">jQuery</div>
                <p className="text-xs text-muted-foreground">-15% growth year-over-year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Emerging Skills</CardTitle>
                <Lightbulb className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Web3</div>
                <p className="text-xs text-muted-foreground">+120% growth from low base</p>
              </CardContent>
            </Card>
          </div>

          {industryTrends.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>Trends and growth rates in {category.category.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.growth > 20 && (
                            <Badge className="bg-green-100 text-green-700">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Hot
                            </Badge>
                          )}
                          {skill.growth < 0 && (
                            <Badge variant="outline" className="bg-red-100 text-red-700">
                              <TrendingDown className="mr-1 h-3 w-3" />
                              Declining
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {skill.growth > 0 ? "+" : ""}
                          {skill.growth}% YoY
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-full space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Industry Popularity</span>
                            <span>{skill.popularity}%</span>
                          </div>
                          <Progress value={skill.popularity} className="h-2" />
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                          {skill.growth > 0 ? (
                            <TrendingUp
                              className={`h-5 w-5 ${skill.growth > 20 ? "text-green-600" : "text-blue-600"}`}
                            />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Emerging Technologies</CardTitle>
              <CardDescription>New technologies gaining traction in the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Generative AI</h3>
                      <p className="text-sm text-muted-foreground">+180% growth</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Adoption Rate</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Skills include prompt engineering, LLM fine-tuning, and AI application development.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Web3 & Blockchain</h3>
                      <p className="text-sm text-muted-foreground">+120% growth</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Adoption Rate</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Skills include smart contract development, decentralized app development, and tokenomics.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CloudCog className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Edge Computing</h3>
                      <p className="text-sm text-muted-foreground">+90% growth</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Adoption Rate</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Skills include distributed systems, IoT development, and real-time data processing.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <h3 className="font-medium text-blue-800 dark:text-blue-300">Industry Insight</h3>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                  Companies that invest early in emerging technology skills gain a competitive advantage. Our data shows
                  that early adopters of AI skills are seeing 23% higher productivity and 18% faster time-to-market for
                  new products.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Technology Trends Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="talent" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-medium">Talent Pool Analysis</h2>
              <p className="text-sm text-muted-foreground">
                Compare your skill requirements with available talent in the market
              </p>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="surplus">Surplus Skills</SelectItem>
                <SelectItem value="deficit">Deficit Skills</SelectItem>
                <SelectItem value="balanced">Balanced Skills</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Talent Supply vs. Demand</CardTitle>
              <CardDescription>Analysis of available talent compared to your requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {talentPool.map((skill) => (
                  <div key={skill.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{skill.skill}</div>
                      <div className="text-sm text-muted-foreground">
                        {skill.surplus > 0 ? (
                          <span className="text-green-600">+{skill.surplus} surplus</span>
                        ) : (
                          <span className="text-red-600">{skill.surplus} deficit</span>
                        )}
                      </div>
                    </div>
                    <div className="relative h-8 w-full overflow-hidden rounded-md bg-gray-100">
                      <div
                        className={`absolute inset-y-0 left-0 ${skill.surplus > 0 ? "bg-green-500" : "bg-amber-500"}`}
                        style={{ width: `${(skill.available / Math.max(skill.available, skill.required)) * 100}%` }}
                      ></div>
                      <div
                        className="absolute inset-y-0 border-l-2 border-blue-600"
                        style={{ left: `${(skill.required / Math.max(skill.available, skill.required)) * 100}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-between px-3 text-xs">
                        <span className="font-medium text-white">Available: {skill.available}</span>
                        <span className="font-medium">Required: {skill.required}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Talent Pool Insights</h3>
                  <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-400">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>
                        Cybersecurity and AI/ML have the largest talent deficits, with 80 fewer qualified candidates
                        than required
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>
                        JavaScript and React have healthy talent surpluses that can be leveraged for cross-training
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>
                        Consider remote hiring for DevOps and Cloud roles to access a wider talent pool beyond your
                        local market
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Talent Demographics</CardTitle>
                <CardDescription>Breakdown of available talent by experience and location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium">Experience Level</h3>
                    <div className="h-4 w-full overflow-hidden rounded-full">
                      <div className="flex h-full">
                        <div className="h-full bg-blue-300" style={{ width: "35%" }}></div>
                        <div className="h-full bg-blue-500" style={{ width: "40%" }}></div>
                        <div className="h-full bg-blue-700" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                        <span>Junior (35%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span>Mid-level (40%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                        <span>Senior (25%)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Location</h3>
                    <div className="h-4 w-full overflow-hidden rounded-full">
                      <div className="flex h-full">
                        <div className="h-full bg-green-300" style={{ width: "45%" }}></div>
                        <div className="h-full bg-green-500" style={{ width: "30%" }}></div>
                        <div className="h-full bg-green-700" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-300"></div>
                        <span>Local (45%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>Remote - Domestic (30%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-700"></div>
                        <span>Remote - Global (25%)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Education</h3>
                    <div className="h-4 w-full overflow-hidden rounded-full">
                      <div className="flex h-full">
                        <div className="h-full bg-purple-300" style={{ width: "55%" }}></div>
                        <div className="h-full bg-purple-500" style={{ width: "25%" }}></div>
                        <div className="h-full bg-purple-700" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-300"></div>
                        <span>Traditional Degree (55%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span>Bootcamp (25%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-700"></div>
                        <span>Self-taught (20%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Talent Acquisition Strategies</CardTitle>
                <CardDescription>Recommended approaches based on talent analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Educational Partnerships</h3>
                        <p className="text-sm text-muted-foreground">
                          Partner with universities and bootcamps for talent pipeline
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge className="bg-green-100 text-green-700">High Impact</Badge>
                      <Badge variant="outline">Medium Effort</Badge>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Remote Talent Strategy</h3>
                        <p className="text-sm text-muted-foreground">
                          Expand hiring to remote locations for critical skills
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge className="bg-green-100 text-green-700">High Impact</Badge>
                      <Badge variant="outline">Low Effort</Badge>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Briefcase className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Internal Mobility Program</h3>
                        <p className="text-sm text-muted-foreground">
                          Cross-train existing employees in high-demand skills
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge className="bg-amber-100 text-amber-700">Medium Impact</Badge>
                      <Badge variant="outline">Medium Effort</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Recommendations</CardTitle>
              <CardDescription>Actionable strategies to address your skill gaps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-medium">{rec.title}</h3>
                        <Badge
                          className={
                            rec.impact === "High"
                              ? "bg-green-100 text-green-700"
                              : rec.impact === "Medium"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-blue-100 text-blue-700"
                          }
                        >
                          {rec.impact} Impact
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{rec.description}</p>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{rec.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                          <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{rec.type}</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                          <span>Cost: {rec.cost}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end border-t p-4">
                      <Button>Implement Strategy</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Training & Development</CardTitle>
                <CardDescription>Upskill your existing workforce</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <CloudCog className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cloud Certification Program</h3>
                        <p className="text-sm text-muted-foreground">
                          AWS and Azure certification tracks for your development team
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Duration:</span> 3 months
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cybersecurity Bootcamp</h3>
                        <p className="text-sm text-muted-foreground">
                          Intensive training in security principles and practices
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Duration:</span> 2 months
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <Brain className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">AI/ML Foundations</h3>
                        <p className="text-sm text-muted-foreground">
                          Introduction to machine learning concepts and tools
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Duration:</span> 4 months
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recruitment Strategies</CardTitle>
                <CardDescription>Attract talent for critical skill gaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <GraduationCap className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">University Partnership Program</h3>
                        <p className="text-sm text-muted-foreground">
                          Establish relationships with top computer science programs
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge className="bg-green-100 text-green-700">High ROI</Badge>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Global Talent Acquisition</h3>
                        <p className="text-sm text-muted-foreground">Remote hiring strategy for specialized roles</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge className="bg-green-100 text-green-700">High ROI</Badge>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Smartphone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Try Before You Hire Program</h3>
                        <p className="text-sm text-muted-foreground">Evaluate candidates through real-world projects</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge className="bg-amber-100 text-amber-700">Medium ROI</Badge>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Roadmap</CardTitle>
              <CardDescription>Phased approach to addressing skill gaps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-medium">Phase 1: Immediate Actions (0-3 months)</h3>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-between">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Skill Gap
                          <br />
                          Assessment
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Critical Hiring
                          <br />
                          Plan
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Training
                          <br />
                          Program
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Phase 2: Medium-Term Strategy (3-6 months)</h3>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-between">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Educational
                          <br />
                          Partnerships
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <span className="text-sm font-medium">5</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Internal
                          <br />
                          Mobility
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <span className="text-sm font-medium">6</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Certification
                          <br />
                          Program
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Phase 3: Long-Term Transformation (6-12 months)</h3>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-between">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <span className="text-sm font-medium">7</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Global Talent
                          <br />
                          Strategy
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <span className="text-sm font-medium">8</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Advanced
                          <br />
                          Training
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <span className="text-sm font-medium">9</span>
                        </div>
                        <span className="mt-2 text-xs text-center">
                          Continuous
                          <br />
                          Assessment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <h3 className="font-medium text-blue-800 dark:text-blue-300">Implementation Support</h3>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                  Our team can provide guidance and support for implementing these recommendations. We offer workshops,
                  templates, and consulting services to help you address your skill gaps effectively.
                </p>
                <div className="mt-3 flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">Request Support</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Complete Roadmap
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
