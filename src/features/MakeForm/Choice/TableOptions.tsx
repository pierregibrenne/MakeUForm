import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface TableOptionsProps {
  tableData: string[][];
  onTableChange: (rowIndex: number, colIndex: number, value: string) => void;
  onAddRow: () => void;
  onAddColumn: () => void;
  onDeleteRow: (rowIndex: number) => void;
}

const TableOptions: React.FC<TableOptionsProps> = ({
  tableData,
  onTableChange,
  onAddRow,
  onAddColumn,
  onDeleteRow,
}) => (
  <div>
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} className="border border-gray-300 p-2">
                <Input
                  value={cell}
                  placeholder={`Cell ${rowIndex + 1}-${colIndex + 1}`}
                  onChange={(e) => onTableChange(rowIndex, colIndex, e.target.value)}
                />
              </td>
            ))}
            <td>
              <Button variant="ghost" size="icon" onClick={() => onDeleteRow(rowIndex)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex gap-3 mt-3">
      <Button onClick={onAddRow}>Ajouter une ligne</Button>
      <Button onClick={onAddColumn}>Ajouter une colonne</Button>
    </div>
  </div>
);

export default TableOptions;
