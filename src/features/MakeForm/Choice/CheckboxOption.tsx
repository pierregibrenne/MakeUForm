import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface CheckboxOptionProps {
  options: string[];
  onOptionChange: (index: number, value: string) => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ options, onOptionChange }) => {
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
          <input
            type="checkbox"
            className="h-5 w-5 border-2 border-primary mt-3"
          />
          <Input
            className="border-none focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => onOptionChange(index, e.target.value)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CheckboxOption;
