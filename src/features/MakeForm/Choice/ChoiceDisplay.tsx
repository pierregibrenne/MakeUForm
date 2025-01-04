import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ChoiceDisplayProps {
  options: string[];
  questionType: string;
  onOptionChange: (index: number, value: string) => void;
  onAddOption: () => void;
}

const ChoiceDisplay: React.FC<ChoiceDisplayProps> = ({ options, questionType, onOptionChange, onAddOption }) => {
  return (
    <div className="space-y-3 pl-6">
      {options.map((option, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          {questionType === "multiple" ? (
            <div className="h-5 w-5 rounded-full border-2 border-primary mt-3" />
          ) : (
            <input type="checkbox" className="h-5 w-5 border-2 border-primary mt-3" />
          )}
          <Input
            className="border-none focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => onOptionChange(index, e.target.value)}
          />
        </motion.div>
      ))}
      <Button
        variant="ghost"
        className="text-primary hover:text-primary/80 transition-colors"
        onClick={onAddOption}
      >
        <Plus className="h-5 w-5 mr-2" />
        Ajouter une option
      </Button>
    </div>
  );
};

export default ChoiceDisplay;
