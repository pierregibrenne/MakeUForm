import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const Route = createFileRoute('/_auth/dashboard')({
  beforeLoad: ({ context }) => {
        // @ts-ignore
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: { redirect: '/dashboard' },
      })
    }
  },
  component: DashboardPage,
})

function DashboardPage() {
  const auth = useAuth()

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-4">
            <SidebarTrigger />
            <section className="grid gap-2 mt-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p>Hi {auth.user}!</p>
              <p>You are currently on the dashboard route.</p>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}