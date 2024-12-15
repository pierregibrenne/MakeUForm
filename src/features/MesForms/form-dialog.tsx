"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Edit, Trash, BarChart } from 'lucide-react'

interface FormDialogProps {
  form: {
    id: string
    title: string
    description: string
    questions: number
    createdAt: string
    responses: number
  }
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FormDialog({ form, open, onOpenChange }: FormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle>{form.title}</DialogTitle>
          <DialogDescription>{form.description}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Créé le {new Date(form.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {form.responses} réponses
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" className="w-full mr-2">
            <Edit className="mr-2 h-4 w-4" />
            Modifier
          </Button>
          <Button variant="outline" className="w-full mx-2">
            <BarChart className="mr-2 h-4 w-4" />
            Statistiques
          </Button>
          <Button 
            variant="destructive" 
            className="w-full ml-2 bg-red-600 hover:bg-red-700 text-white"
          >
            <Trash className="mr-2 h-4 w-4" />
            Supprimer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

