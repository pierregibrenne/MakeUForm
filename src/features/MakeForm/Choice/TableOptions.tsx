import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TableOptions = () => {
  const [matrix, setMatrix] = useState([
    [{ value: "Titre du tab", disabled: true, type: "titre"}, { value: "Colonne 1", disabled: false, type: "columns"}, { value: "Colonne 2", disabled: false, type: "columns" }],
    [{ value: "Ligne 1", disabled: false, type: "rows"}, { value: "", disabled: true, type: "cells" }, { value: "", disabled: true,  type: "cells"}],
    [{ value: "Ligne 2", disabled: false, type: "rows"}, { value: "", disabled: true, type: "cells"  }, { value: "", disabled: true,  type: "cells" }],
    [{ value: "Ligne 3", disabled: false, type: "rows" }, { value: "", disabled: true, type: "cells"  }, { value: "", disabled: true, type: "cells" }],
  ]);

  const handleCellChange = (rowIndex, colIndex, newValue) => {
    setMatrix((prevMatrix) => {
      const updatedMatrix = [...prevMatrix];
      updatedMatrix[rowIndex][colIndex] = { ...updatedMatrix[rowIndex][colIndex], value: newValue };
      return updatedMatrix;
    });
  };

  const addRow = () => {
    setMatrix((prevMatrix) => {
      const newRow = prevMatrix[0].map((cell, colIndex) =>
        colIndex === 0
          ? { value: `Ligne ${prevMatrix.length}`, disabled: false, type: "rows" }
          : { value: "", disabled: true, type: "cells" }
      );
      return [...prevMatrix, newRow];
    });
  };

  const addColumn = () => {
    setMatrix((prevMatrix) => {
      const newColumnHeader = { value: `Colonne ${prevMatrix[0].length}`, disabled: false, type: "columns" };
      return prevMatrix.map((row, rowIndex) =>
        rowIndex === 0
          ? [...row, newColumnHeader]
          : [...row, { value: "", disabled: true, type: "cells" }]
      );
    });
  };

  const deleteRow = (rowIndex) => {
    setMatrix((prevMatrix) => prevMatrix.filter((_, index) => index !== rowIndex));
  };

  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-gray-300 p-2 ${
                    cell.disabled ? "bg-gray-100 text-gray-500" : ""
                  }`}
                >
                  {rowIndex === 0 || colIndex === 0 ? (
                    <Input
                      value={cell.value}
                      disabled={cell.disabled}
                      placeholder={`Header ${rowIndex}-${colIndex}`}
                      onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    />
                  ) : (
                    <input
                      type="radio"
                      disabled={cell.disabled}
                      name={`row-${rowIndex}`}
                      className="mx-auto"
                    />
                  )}
                </td>
              ))}
              {rowIndex > 0 && (
                <td>
                  <Button variant="ghost" size="icon" onClick={() => deleteRow(rowIndex)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 mt-3">
        <Button onClick={addRow}>Ajouter une ligne</Button>
        <Button onClick={addColumn}>Ajouter une colonne</Button>
      </div>
    </div>
  );
};

export default TableOptions;
