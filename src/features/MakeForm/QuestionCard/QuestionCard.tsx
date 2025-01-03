import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { NewBadge } from "@/components/ui/new-badge"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Copy,
  ImageIcon,
  MoreVertical,
  Plus,
  Trash2,
 CircleCheck,
  CheckSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import MultipleChoice from '../Choice/MultipleChoice';
import CheckboxOption from '../Choice/CheckboxOption';
import TableOptions from '../Choice/TableOptions';
interface QuestionCardProps {
    question: { id: number, options: string[], isRequired: boolean };
    onAddOption: (id: number) => void;
    onDelete: (id: number) => void;
    onOptionChange: (questionId: number, optionIndex: number, value: string) => void;
  }
const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAddOption, onDelete }) => {
    const [questionType, setQuestionType] = useState("multiple"); // Type de question (par défaut : choix multiples)
    const [options, setOptions] = useState(question.options); // Liste des options
    const [tableData, setTableData] = useState([[""]]); // Données du tableau

    const handleTypeChange = (type: string) => {
        setQuestionType(type);
    };

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, `Option ${options.length + 1}`]);
        onAddOption(question.id);
    };
    const handleTableChange = (rowIndex: number, colIndex: number, value: string) => {
        const updatedTableData = [...tableData];
        updatedTableData[rowIndex][colIndex] = value;
        setTableData(updatedTableData);
    };

    const handleAddRow = () => {
        setTableData([...tableData, [""]]);
    };

    const handleAddColumn = () => {
        setTableData(tableData.map((row) => [...row, ""]));
    };
    return (
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
>
    <Card className="shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="relative p-6 space-y-6">
            <BorderBeam />

            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <Input
                        className="text-xl font-semibold border-none px-0 focus-visible:ring-0 bg-transparent"
                        placeholder="Question sans titre"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Select
                        defaultValue={questionType}
                        onValueChange={handleTypeChange}
                    >
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
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                            >
                                <MoreVertical className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Copy className="h-4 w-4 mr-2" />
                                Dupliquer
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => onDelete(question.id)}
                            >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Supprimer
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {questionType === "tableaux" ? (
                <div>
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <tbody>
                            {tableData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="border border-gray-300 p-2"
                                        >
                                            <Input
                                                value={cell}
                                                placeholder={`Cell ${rowIndex + 1}-${colIndex + 1}`}
                                                onChange={(e) =>
                                                    handleTableChange(rowIndex, colIndex, e.target.value)
                                                }
                                            />
                                        </td>
                                    ))}
                                    <td>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                setTableData((prev) =>
                                                    prev.filter((_, i) => i !== rowIndex)
                                                )
                                            }
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex gap-3 mt-3">
                        <Button onClick={handleAddRow}>Ajouter une ligne</Button>
                        <Button onClick={handleAddColumn}>Ajouter une colonne</Button>
                    </div>
                </div>
            ) : (
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
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 border-2 border-primary mt-3"
                                />
                            )}
                            <Input
                                className="border-none focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
                                placeholder={`Option ${index + 1}`}
                                value={option}
                                onChange={(e) =>
                                    handleOptionChange(index, e.target.value)
                                }
                            />
                        </motion.div>
                    ))}
                    <Button
                        variant="ghost"
                        className="text-primary hover:text-primary/80 transition-colors"
                        onClick={handleAddOption}
                    >
                        <Plus className="h-5 w-5 mr-2" />
                        Ajouter une option
                    </Button>
                </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Copy className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Trash2 className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <Label htmlFor="required" className="text-sm font-medium">
                        Obligatoire
                    </Label>
                    <Switch id="required" checked={question.isRequired} />
                </div>
            </div>
        </CardContent>
    </Card>
</motion.div>

    );
};

export default QuestionCard;
