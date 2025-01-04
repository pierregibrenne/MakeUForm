import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CircleCheck, CheckSquare, ImageIcon, MoreVertical, Copy, Trash2 } from "lucide-react";
import { NewBadge } from "@/components/ui/new-badge";

interface ChoiceSelectProps {
  questionType: string;
  onTypeChange: (value: string) => void;
  onDelete: () => void;
}

const ChoiceSelect: React.FC<ChoiceSelectProps> = ({ questionType, onTypeChange, onDelete }) => {
  return (
    <div className="flex items-center gap-3">
      <Select defaultValue={questionType} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[180px] bg-white/50 backdrop-blur-sm">
          <SelectValue placeholder="Type de question" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="multiple">
            <div className="flex items-center">
              <CircleCheck className="w-5 h-5 mr-2" />
              Choix multiples
            </div>
          </SelectItem>
          <SelectItem value="checkbox">
            <div className="flex items-center">
              <CheckSquare className="w-4 h-4 mr-2" />
              Cases à cocher
            </div>
          </SelectItem>
          <SelectItem value="tableaux">
            <div className="flex items-center">
              <NewBadge text="Tableaux" />
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Button variant="ghost" size="icon" className="rounded-full">
        <ImageIcon className="h-5 w-5" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Copy className="h-4 w-4 mr-2" />
            Dupliquer
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive" onClick={onDelete}>
            <Trash2 className="h-4 w-4 mr-2" />
            Supprimer
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChoiceSelect;
