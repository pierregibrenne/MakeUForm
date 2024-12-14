import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import FormHeader from './FormHeader/FormHeader';
import QuestionCard from './QuestionCard/QuestionCard';
import { supabase } from "../../../utils/supabase";

type FormActionsProps = {
  onAddQuestion: () => void;
  onSave: () => void;
  onPreview: () => void;
};

function FormActions({ onAddQuestion, onSave, onPreview }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3">
      <Button variant="outline" className="rounded-full px-6" onClick={onPreview}>
        Aperçu
      </Button>
      <Button variant="outline" className="rounded-full px-6" onClick={onAddQuestion}>
        <Plus className="h-5 w-5 mr-2" />
        Ajouter une question
      </Button>
      <Button className="rounded-full px-6" onClick={onSave}>
        Enregistrer
      </Button>
    </div>
  );
}

async function createForm(formName: string, formDescription: string, questions: any[]) {
  try {
    // Ici, on prépare la structure en format JSON ou tableau selon tes besoins
    const formStructure = {
      description: formDescription,
      structure: questions, // La structure peut inclure tes questions
      date_creation: new Date(),
    };

    // On envoie chaque colonne correctement
    const { data, error } = await supabase
      .from("Forms")
      .insert([
        {
          nom: formName, // Le nom directement en colonne "nom"
          structure: formStructure, // Le reste de la structure
        },
      ]);

    if (error) {
      console.error("Erreur lors de l'enregistrement :", error.message);
      alert("Une erreur est survenue lors de l'enregistrement du formulaire.");
    } else {
      console.log("Formulaire enregistré avec succès :", data);
      alert("Formulaire enregistré avec succès !");
    }
  } catch (err) {
    console.error("Erreur inconnue :", err);
    alert("Une erreur est survenue.");
  }
}

export default function FormBuilder() {
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, options: ['Option 1'], isRequired: false },
    { id: 2, options: ['Option 2'], isRequired: false },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), options: ['Option 1'], isRequired: false }]);
  };

  const addOption = (id: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] } : q
      )
    );
  };

  const deleteQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const saveForm = () => {
    createForm(formName, formDescription, questions);
  };
  const previewForm = () => console.log('Previewing form', questions);

  return (
    <div className="min-h-screen w-full bg-[#F8F9FC] p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <FormHeader />
        {questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            onAddOption={addOption}
            onDelete={deleteQuestion}
          />
        ))}
        <FormActions onAddQuestion={addQuestion} onSave={saveForm} onPreview={previewForm} />
      </div>
    </div>
  );
}