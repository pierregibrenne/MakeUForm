import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'
import MakeForm from '@/features/MakeForm/FormBuilder';
export const Route = createFileRoute('/_auth/dashboard/start')({
    component: () => {
      const { isAuthenticated } = useAuth();
      if (!isAuthenticated) {
        return <LoginForm />; // Affichez un formulaire de connexion ici
      }
      return <div><MakeForm/></div>;
    },
  });   