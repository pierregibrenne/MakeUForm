import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { BorderBeam } from "@/components/ui/border-beam";
import TableOptions from "../Choice/TableOptions";
import ChoiceDisplay from "../Choice/ChoiceDisplay";
import ChoiceSelect from "../Choice/ChoiceSelect";

interface QuestionCardProps {
  question: { id: number; options: string[]; isRequired: boolean };
  onAddOption: (id: number) => void;
  onDelete: (id: number) => void;
  onOptionChange: (questionId: number, optionIndex: number, value: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAddOption, onDelete }) => {
  const [questionType, setQuestionType] = useState("multiple"); // Type de question (par défaut : choix multiples)
  const [options, setOptions] = useState(question.options); // Liste des options
  const [tableData, setTableData] = useState([[""]]); // Données du tableau

  const handleTypeChange = (type: string) => setQuestionType(type);

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

  const handleAddRow = () => setTableData([...tableData, [""]]);
  const handleAddColumn = () => setTableData(tableData.map((row) => [...row, ""]));

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <Card className="shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="relative p-6 space-y-6">
          <BorderBeam />

          <div className="flex items-start justify-between">
            <Input
              className="text-xl font-semibold border-none px-0 focus-visible:ring-0 bg-transparent"
              placeholder="Question sans titre"
            />
              <ChoiceSelect
              questionType={questionType}
              onTypeChange={handleTypeChange}
              onDelete={() => onDelete(question.id)}
            />
            </div>
          {questionType === "tableaux" ? (
            <TableOptions
              tableData={tableData}
              onTableChange={handleTableChange}
              onAddRow={handleAddRow}
              onAddColumn={handleAddColumn}
              onDeleteRow={(rowIndex) => setTableData((prev) => prev.filter((_, i) => i !== rowIndex))}
            />
          ) : (
            <ChoiceDisplay
              options={options}
              questionType={questionType}
              onOptionChange={handleOptionChange}
              onAddOption={handleAddOption}
            />
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
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
