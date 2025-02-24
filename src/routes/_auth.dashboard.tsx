import { createFileRoute} from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/dashboard')({
  component: DashboardPage,
  // 🚨🚨🚨 Bizarre, l'auth n'est pas vérifier ici 
})
export function DashboardPage() {
  console.log('Rendering /_auth/dashboard')

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-4">
            <SidebarTrigger />
            <section className="grid gap-2 mt-4">
              <Outlet /> {/* Utilisez <Outlet /> pour rendre les enfants */}
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}