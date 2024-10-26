import  { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'; // chargement du CSS
import { ThemeProvider } from "@/components/ThemeProvider"
import { AuthProvider } from './context/AuthContext'  // Import de AuthProvider et useAuth
import { useAuth } from './context/useAuth'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined!, // Ce sera défini après avoir enveloppé l'application dans AuthProvider
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  // Le contexte auth sera accessible ici
  const auth = useAuth(); 
  return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
      <App/>
    </StrictMode>
    </ThemeProvider>
  )
}