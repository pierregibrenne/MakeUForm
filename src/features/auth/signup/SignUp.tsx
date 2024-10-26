import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SignUpProps {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  error: string | null
  data: any
  handleSubmit: () => void
}

export default function Component({
  email,
  setEmail,
  password,
  setPassword,
  error,
  data,
  handleSubmit,
}: SignUpProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Sign Up</CardTitle>
          <p className="text-center text-gray-600">
            Create an account to get started
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg font-semibold">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            {error && (
              <p className="text-sm font-medium text-red-500" role="alert">
                {error}
              </p>
            )}
            {data && (
              <p className="text-sm font-medium text-green-500" role="alert">
                Sign up successful!
              </p>
            )}
            <Button 
              type="submit" 
              className="w-full py-2 text-white bg-black rounded hover:bg-gray-800"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="w-full text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="#" className="font-medium text-black hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}