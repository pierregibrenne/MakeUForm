import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface CheckboxOptionProps {
  options: string[];
  onOptionChange: (index: number, value: string) => void;
  onAddOption: () => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ options, onOptionChange, onAddOption }) => (
  <div className="space-y-3 pl-6">
    {options.map((option, index) => (
      <div key={index} className="flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5 border-2 border-primary mt-3" />
        <Input
          className="border-none focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => onOptionChange(index, e.target.value)}
        />
      </div>
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

export default CheckboxOption;
