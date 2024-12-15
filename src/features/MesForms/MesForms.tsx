import { Plus } from 'lucide-react'
import { FormCard } from "./form-card"
import { FormDialog } from "./form-dialog"
import { Button } from "@/components/ui/button"

// Types pour nos formulaires
interface Form {
  id: string
  title: string
  description: string
  questions: number
  createdAt: string
  responses: number
}

// Données exemple
const forms: Form[] = [
  {
    id: "1",
    title: "Sondage de satisfaction",
    description: "Questionnaire pour évaluer la satisfaction des clients",
    questions: 5,
    createdAt: "2024-12-15",
    responses: 24
  },
  {
    id: "2", 
    title: "Formulaire d'inscription",
    description: "Inscription aux événements",
    questions: 8,
    createdAt: "2024-12-14",
    responses: 12
  },
  // Ajoutez d'autres formulaires ici
]

export default function MesFormulaires() {
  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mes Formulaires</h1>
          <p className="text-muted-foreground">
            Gérez et consultez vos formulaires créés
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Formulaire
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <FormCard key={form.id} form={form} />
        ))}
      </div>
    </div>
  )
}

