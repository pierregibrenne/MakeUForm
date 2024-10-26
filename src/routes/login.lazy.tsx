import { createLazyFileRoute } from '@tanstack/react-router'
import  Login  from '../features/auth/login/Login'
import { useState } from 'react'
import  { supabase } from '../../utils/supabase' // Assurez-vous que le chemin est correct
import { useAuth } from '../context/useAuth'

export const Route = createLazyFileRoute('/login')({
  component: LoginComp,
});

function LoginComp() {
  const { login } = useAuth(); // Utiliser le contexte d'authentification
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Pour gérer l'état de soumission
  const navigate = Route.useNavigate(); // Pour rediriger après la connexion
  
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitting(true); // Indique que la soumission est en cours

    try {
      // Connexion avec Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message); // Affiche l'erreur si la connexion échoue
      } else {
        // Connexion réussie
        await login(email); // Appelle la fonction de connexion du contexte d'authentification

        // Redirige l'utilisateur vers le tableau de bord
        navigate({ to: '/dashboard' });
      }
    } catch (error) {
      setError((error as any).message); // Affiche une erreur si quelque chose se passe mal
    } finally {
      setIsSubmitting(false); // Réinitialise l'état de soumission
    }
  };

  return (
    
    <Login
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    error={error}
    isSubmitting={isSubmitting}
    handleSubmit={handleSubmit}
  />
  );
}