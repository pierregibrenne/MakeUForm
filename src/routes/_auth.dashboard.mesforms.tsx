import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth';
import { Navigate } from '@tanstack/react-router';
import MesForm from '@/features/MesForms/MesForms';

export const Route = createFileRoute('/_auth/dashboard/mesforms')({
  component: () => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        // Rediriger vers la page de login
        return <Navigate to="/login" />;
      }
  
  
  
  return <div><MesForm/></div>;
},
});
