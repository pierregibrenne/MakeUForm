import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'

export const Route = createFileRoute('/_auth/dashboard/analytics')({
  component: () =>  {const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <LoginForm />; // Affichez un formulaire de connexion ici
  }
  return <div>ici c'est la data</div>;
},
});   