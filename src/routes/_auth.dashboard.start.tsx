import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'
export const Route = createFileRoute('/_auth/dashboard/start')({
    component: () => {
      const { isAuthenticated } = useAuth();
      if (!isAuthenticated) {
        return <LoginForm />; // Affichez un formulaire de connexion ici
      }
      return <div>Hello /_auth/dashboard/start!</div>;
    },
  });   