import { Button } from "@/components/ui/button";
import { supabase } from "../../../../utils/supabase";
type SaveButtonProps = {
  formName: string; // Nom du formulaire
  questions: Array<{
    id: number;
    options: string[];
    isRequired: boolean;
    type?: string;
  }>; // Structure des questions
};

const SaveButton = ({ formName, questions }: SaveButtonProps) => {
  const saveForm = async () => {
    try {
      // Structure des données à envoyer
      const formStructure = {
        nom: formName,
        structure: questions, // Les questions en JSON
        date_creation: new Date(),
      };

      // Requête d'insertion dans la table "Forms"
      const { data, error } = await supabase.from("Forms").insert([formStructure]);

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
  };

  return (
    <Button className="rounded-full px-6" onClick={saveForm}>
      Enregistrer
    </Button>
  );
};

export default SaveButton;



// import { ConfettiButton } from "@/components/magicui/confetti";

// export function ConfettiButtonDemo() {
//   return (
//     <div className="relative">
//       <ConfettiButton>Confetti 🎉</ConfettiButton>
//     </div>
//   );
// }
