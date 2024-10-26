import { createRootRoute, Link, Outlet, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useAuth } from '../context/useAuth'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: '/dashboard' })
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      {isAuthenticated ? (
        <div className="p-2">
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      ) : (
        <>
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Accueil
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
              À propos
            </Link>{' '}
            <Link to="/login" className="[&.active]:font-bold">
              Connexion
            </Link>{' '}
            <Link to="/signup" className="[&.active]:font-bold">
              Inscription
            </Link>
            <ModeToggle />
          </div>
          <hr />
          <Outlet />
          <TanStackRouterDevtools />
        </>
      )}
    </>
  )
}