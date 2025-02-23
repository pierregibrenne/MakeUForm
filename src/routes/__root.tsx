import { createRootRoute, Link, Outlet, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ModeToggle } from '@/components/ui/mode-toggle'
import { useAuth } from '../context/useAuth'
import { useEffect } from 'react'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated && window.location.pathname === '/') {
      navigate({ to: '/dashboard' });
    }
  }, [isAuthenticated, navigate]);
  
  const styles = {
    header: "fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 rounded-full px-8 py-3 flex items-center justify-between w-3/4",
    menu: "hidden md:flex items-center gap-4 text-gray-700",
    link: "hover:text-black transition-colors",
    button: "px-4 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition",
    mobileMenu: "md:hidden",
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="p-2">
          <Outlet /> {/* Assurez-vous que l'Outlet est ici pour rendre les enfants */}
          <TanStackRouterDevtools />
        </div>
      ) : (
        <>
        <header className={styles.header}>
        <Link to="/" className="text-2xl font-bold">SocialEase</Link>
        <ul className={styles.menu}>
        <li><Link to="/" className={styles.link}>Accueil</Link></li>
        <li><Link to="/about" className={styles.link}>À propos</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login" className={styles.link}>Connexion</Link></li>
            <li><Link to="/signup" className={styles.link}>Inscription</Link></li>
          </>
        ) : (
          <li><Button className={styles.button}>Dashboard</Button></li>
        )}
      </ul>
      </header>
          {/* <div className="p-2 flex gap-2">
            <h1>SocialEase</h1>
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
            {/* le mode toggle nightMode a voir plus tard */}
            {/* <ModeToggle /> */}
          {/* </div> */} 
          <hr />
          <Outlet />
          <TanStackRouterDevtools />
        </>
      )}
    </>
  )
}