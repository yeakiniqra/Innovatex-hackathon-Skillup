import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-blue-700">SkillUp</h1>
          <p className="text-lg text-gray-600">Bridge the gap between graduates and companies</p>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Path</CardTitle>
              <CardDescription>Select your user type to continue to the appropriate dashboard</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Link href="/graduate/dashboard" className="w-full">
                <Button className="w-full h-16 text-lg" variant="outline">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Fresh Graduate
                </Button>
              </Link>
              <Link href="/company/dashboard" className="w-full">
                <Button className="w-full h-16 text-lg" variant="default">
                  <Building2 className="mr-2 h-5 w-5" />
                  Company
                </Button>
              </Link>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
              This is a prototype with mock data for demonstration purposes.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
