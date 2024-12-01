import { createFileRoute } from '@tanstack/react-router';
import { useAuth } from '../context/useAuth';
import { Navigate } from '@tanstack/react-router';
import FormBuilder from '@/features/MakeForm/FormBuilder';

export const Route = createFileRoute('/_auth/dashboard/start')({
  component: () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Rediriger vers la page de login
      return <Navigate to="/login" />;
    }

    return <div><FormBuilder /></div>;
  },
});
