import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {Plus} from 'lucide-react';
import FormHeader from './FormHeader/FormHeader';
import QuestionCard from './QuestionCard/QuestionCard';


function FormActions({ onAddQuestion, onSave, onPreview }) {
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

export default function FormBuilder() {
  const [questions, setQuestions] = useState([
    { id: 1, options: ['Option 1'], isRequired: false },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), options: ['Option 1'], isRequired: false }]);
  };

  const addOption = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] } : q
      )
    );
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const saveForm = () => console.log('Form saved', questions);
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
