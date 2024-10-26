import { createLazyFileRoute } from '@tanstack/react-router'
import SignUp from '../features/auth/signup/SignUp' // Assurez-vous que le chemin est correct
import { useState} from 'react'
import  { supabase } from '../../utils/supabase' // Assurez-vous que le chemin est correct

export const Route = createLazyFileRoute('/signup')({
  component: SignUpComponent,
})

function SignUpComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)

 const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      setData(data.user)
    }
  }
    

  return (
    <div className="p-2">
      <SignUp 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        data={data}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}