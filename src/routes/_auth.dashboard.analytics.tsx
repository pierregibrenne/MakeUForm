import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../context/useAuth'
import  Login  from '@/features/auth/login/Login'
export const Route = createFileRoute('/_auth/dashboard/analytics')({
  component: () =>  {const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Login 
      email="" 
      setEmail={() => {}} 
      password="" 
      setPassword={() => {}} 
      error={null} 
      isSubmitting={false} 
      handleSubmit={() => {}} 
    />; 
  }
  return <div>ici c'est la data</div>;
},
});   