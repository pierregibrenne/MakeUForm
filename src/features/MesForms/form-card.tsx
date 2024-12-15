import { motion } from "framer-motion";
import { useState } from "react"
import { Calendar, MessageSquare } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FormDialog } from "./form-dialog"
import NumberTicker from "@/components/ui/number-ticker";

interface FormCardProps {
  form: {
    id: string
    title: string
    description: string
    questions: number
    createdAt: string
    responses: number
  }
  index: number; // Ajout d'un index pour gérer le décalage

}

export function FormCard({ form, index}: FormCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }} // Décalage basé sur l'index
    >
      <Card 
        className="hover:shadow-lg transition-shadow cursor-pointer bg-background text-foreground"
        onClick={() => setIsOpen(true)}
      >
        <CardHeader>
          <CardTitle>{form.title}</CardTitle>
          <CardDescription>{form.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(form.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-1 h-4 w-4" />
              <NumberTicker
        value={form.responses} // Utilise form.responses comme valeur
        duration={1000} // Animation sur 1 seconde
        format={(value) => `${value} réponses`} // Ajoute "réponses" après le nombre
        className="font-bold text-blue-600" // Ajoute des styles si nécessaire
      />            </div>
          </div>
        </CardContent>
      </Card>
      
      <FormDialog 
        form={form}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
   </motion.div> </>
  )
}

