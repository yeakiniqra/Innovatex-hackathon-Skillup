import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, Clock, DollarSign, Filter, Search, Wallet, Building, Calendar, CheckCircle2 } from "lucide-react"

export default function EarnWhileYouLearn() {
  // Mock data for micro-tasks
  const microTasks = [
    {
      id: 1,
      title: "Develop a responsive navbar component",
      company: "TechCorp Inc.",
      payment: 45,
      difficulty: "Intermediate",
      timeEstimate: "3-5 hours",
      skills: ["React", "CSS", "Responsive Design"],
      deadline: "May 20, 2023",
    },
    {
      id: 2,
      title: "Create a data visualization dashboard",
      company: "DataViz Solutions",
      payment: 75,
      difficulty: "Advanced",
      timeEstimate: "8-10 hours",
      skills: ["D3.js", "JavaScript", "SVG"],
      deadline: "May 25, 2023",
    },
    {
      id: 3,
      title: "Implement form validation",
      company: "WebForm Systems",
      payment: 30,
      difficulty: "Beginner",
      timeEstimate: "2-3 hours",
      skills: ["JavaScript", "HTML", "Form Validation"],
      deadline: "May 18, 2023",
    },
    {
      id: 4,
      title: "Build an API endpoint for user authentication",
      company: "SecureAuth Inc.",
      payment: 60,
      difficulty: "Intermediate",
      timeEstimate: "5-7 hours",
      skills: ["Node.js", "Express", "JWT"],
      deadline: "May 30, 2023",
    },
  ]

  // Mock data for payment history
  const paymentHistory = [
    {
      id: 1,
      task: "Responsive navbar component",
      company: "TechCorp Inc.",
      amount: 45,
      date: "Apr 15, 2023",
      status: "Completed",
    },
    {
      id: 2,
      task: "User authentication API",
      company: "SecureAuth Inc.",
      amount: 60,
      date: "Apr 5, 2023",
      status: "Completed",
    },
    {
      id: 3,
      task: "Bug fixing in checkout flow",
      company: "E-Shop Solutions",
      amount: 35,
      date: "Mar 22, 2023",
      status: "Completed",
    },
  ]

  // Mock data for active tasks
  const activeTasks = [
    {
      id: 1,
      title: "Database schema design",
      company: "DataSystems Inc.",
      payment: 50,
      progress: 75,
      deadline: "May 15, 2023",
    },
    {
      id: 2,
      title: "Unit testing for authentication module",
      company: "TestFirst Co.",
      payment: 40,
      progress: 30,
      deadline: "May 22, 2023",
    },
  ]

  return (
    <DashboardShell userType="graduate">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">"Earn While You Learn" Center</h1>
      </div>

      <Tabs defaultValue="marketplace" className="mt-6">
        <TabsList>
          <TabsTrigger value="marketplace">Task Marketplace</TabsTrigger>
          <TabsTrigger value="active">Active Tasks</TabsTrigger>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
          <TabsTrigger value="wallet">Digital Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search tasks..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {microTasks.map((task) => (
              <Card key={task.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <Badge
                      variant={
                        task.difficulty === "Beginner"
                          ? "outline"
                          : task.difficulty === "Intermediate"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {task.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    {task.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-medium">${task.payment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{task.timeEstimate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span>Due: {task.deadline}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-2">
                      {task.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Apply for Task
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Active Tasks</CardTitle>
              <CardDescription>Tasks you are currently working on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeTasks.map((task) => (
                  <div key={task.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-muted-foreground">{task.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">${task.payment}</div>
                        <p className="text-sm text-muted-foreground">Due: {task.deadline}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        Update Progress
                      </Button>
                      <Button size="sm">Submit Work</Button>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Record of your earnings from completed tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">{payment.task}</h3>
                      <p className="text-sm text-muted-foreground">{payment.company}</p>
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <CheckCircle2 className="h-3 w-3" />
                        {payment.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">${payment.amount}</div>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-xl font-bold text-green-600">$140</p>
              </div>
              <Button variant="outline">Download Statement</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="wallet" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Digital Wallet</CardTitle>
                <CardDescription>Manage your earnings and withdrawals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Balance</p>
                      <p className="text-3xl font-bold text-blue-700">$140.00</p>
                    </div>
                    <Wallet className="h-10 w-10 text-blue-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button>Withdraw Funds</Button>
                    <Button variant="outline">Link Bank Account</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your withdrawal options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-700"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Bank Account</p>
                        <p className="text-sm text-muted-foreground">****6789</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent withdrawals and deposits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <DollarSign className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-sm text-muted-foreground">From TechCorp Inc.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$45.00</p>
                    <p className="text-sm text-muted-foreground">Apr 15, 2023</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <DollarSign className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-sm text-muted-foreground">From SecureAuth Inc.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$60.00</p>
                    <p className="text-sm text-muted-foreground">Apr 5, 2023</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-amber-100 p-2">
                      <ArrowUpRight className="h-4 w-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-medium">Withdrawal</p>
                      <p className="text-sm text-muted-foreground">To Bank Account ****6789</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-amber-600">-$100.00</p>
                    <p className="text-sm text-muted-foreground">Mar 30, 2023</p>
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
