import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'
import FormBuilder from '@/features/MakeForm/FormBuilder';
import Login from '@/features/auth/login/Login';
export const Route = createFileRoute('/_auth/dashboard/start')({
    component: () => {
      const { isAuthenticated } = useAuth();
      if (!isAuthenticated) {
        return <Login />; // Affichez un formulaire de connexion ici
      }
      return <div><FormBuilder/></div>;
    },
  });   