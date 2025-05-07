import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Building, MapPin, GraduationCap, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MatchingSystem() {
  // Mock data for matched candidates
  const matchedCandidates = [
    {
      id: 1,
      name: "Sarah Williams",
      location: "New York, NY",
      remote: true,
      education: "B.S. Computer Science, NYU",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      match: 95,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      remote: true,
      education: "B.S. Software Engineering, Stanford",
      skills: ["Python", "Django", "AWS", "PostgreSQL"],
      match: 90,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Jessica Taylor",
      location: "Chicago, IL",
      remote: false,
      education: "B.S. Information Technology, UChicago",
      skills: ["React", "TypeScript", "GraphQL", "UI/UX"],
      match: 88,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Mock data for job positions
  const jobPositions = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "New York, NY",
      remote: true,
      skills: ["JavaScript", "React", "CSS", "TypeScript"],
      candidates: 12,
    },
    {
      id: 2,
      title: "Backend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      remote: true,
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      candidates: 8,
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Product",
      location: "Chicago, IL",
      remote: false,
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      candidates: 15,
    },
  ]

  return (
    <DashboardShell userType="company">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Matching System</h1>
      </div>

      <Tabs defaultValue="matches" className="mt-6">
        <TabsList>
          <TabsTrigger value="matches">Talent Matches</TabsTrigger>
          <TabsTrigger value="positions">Job Positions</TabsTrigger>
          <TabsTrigger value="preferences">Matching Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="matches" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Matches</CardTitle>
              <CardDescription>Graduates that best match your company's requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search matches..."
                      className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
                <Select defaultValue="match">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Match Score</SelectItem>
                    <SelectItem value="recent">Recently Active</SelectItem>
                    <SelectItem value="projects">Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {matchedCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-start"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={candidate.image || "/placeholder.svg"}
                        alt={candidate.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{candidate.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{candidate.location}</span>
                          </div>
                          {candidate.remote && (
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Remote
                            </Badge>
                          )}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5" />
                            <span>{candidate.education}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Match Score</span>
                        <span className="text-sm font-medium text-green-600">{candidate.match}%</span>
                      </div>
                      <Progress value={candidate.match} className="h-2" />
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 sm:flex-col">
                      <Button className="flex-1">View Profile</Button>
                      <Button variant="outline" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Matches
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Match Insights</CardTitle>
                <CardDescription>Analysis of your current talent matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Match Quality</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">90%+ Match</span>
                        <span className="text-sm">5 candidates</span>
                      </div>
                      <Progress value={25} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">80-89% Match</span>
                        <span className="text-sm">12 candidates</span>
                      </div>
                      <Progress value={60} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">70-79% Match</span>
                        <span className="text-sm">18 candidates</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Top Skills in Matches</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">JavaScript</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">React</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Node.js</span>
                        <span className="text-sm">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Python</span>
                        <span className="text-sm">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent interactions with matched candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Michael Chen"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">Viewed profile</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Jessica Taylor"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">Jessica Taylor</h3>
                        <p className="text-sm text-muted-foreground">Sent message</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Sarah Williams"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">Sarah Williams</h3>
                        <p className="text-sm text-muted-foreground">Saved to favorites</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">3 days ago</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Positions</CardTitle>
              <CardDescription>Manage your open positions and view matched candidates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search positions..."
                      className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <Button>Add Position</Button>
              </div>

              <div className="space-y-4">
                {jobPositions.map((position) => (
                  <div key={position.id} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-medium">{position.title}</h3>
                        <Badge variant="outline" className="w-fit">
                          {position.candidates} Matches
                        </Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-3.5 w-3.5" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{position.location}</span>
                        </div>
                        {position.remote && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {position.skills.map((skill, index) => (
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
                        <Button variant="outline" size="sm">
                          Duplicate
                        </Button>
                      </div>
                      <Button size="sm">
                        View Matches
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Position Insights</CardTitle>
              <CardDescription>Analytics for your open positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-muted-foreground">Open Positions</div>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">35</div>
                  <div className="text-sm text-muted-foreground">Total Matches</div>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-muted-foreground">Average Match Quality</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-medium">Match Distribution by Position</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Frontend Developer</span>
                      <span className="text-sm">12 matches</span>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: "34%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backend Developer</span>
                      <span className="text-sm">8 matches</span>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: "23%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Full Stack Developer</span>
                      <span className="text-sm">15 matches</span>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full bg-blue-600" style={{ width: "43%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Matching Preferences</CardTitle>
              <CardDescription>Customize how we match candidates to your company</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Skill Importance</h3>
                  <p className="text-sm text-muted-foreground">
                    Adjust how much weight different skills have in the matching algorithm
                  </p>
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Technical Skills</span>
                        <span>80%</span>
                      </div>
                      <Slider defaultValue={[80]} max={100} step={1} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Soft Skills</span>
                        <span>60%</span>
                      </div>
                      <Slider defaultValue={[60]} max={100} step={1} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Project Experience</span>
                        <span>75%</span>
                      </div>
                      <Slider defaultValue={[75]} max={100} step={1} />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium">Location Preferences</h3>
                  <p className="text-sm text-muted-foreground">Set your preferences for candidate location</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote-ok" defaultChecked />
                      <label
                        htmlFor="remote-ok"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider remote candidates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="relocate" defaultChecked />
                      <label
                        htmlFor="relocate"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider candidates willing to relocate
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="local-priority" />
                      <label
                        htmlFor="local-priority"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prioritize local candidates
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium">Culture Fit</h3>
                  <p className="text-sm text-muted-foreground">
                    Adjust how much weight culture fit has in the matching algorithm
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="values-align" defaultChecked />
                      <label
                        htmlFor="values-align"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider values alignment
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="work-style" defaultChecked />
                      <label
                        htmlFor="work-style"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider work style compatibility
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="communication" defaultChecked />
                      <label
                        htmlFor="communication"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider communication style
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
