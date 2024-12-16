import React from "react";

export const Square = ({ color = "black", colIndex = 0, rowIndex = 0 }) => {
  const row = rowIndex;
  const colLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const col = colLetters[colIndex] || "";
  const key = `${col}${row}`;

  return (
    <div
      key={key}
      className={`h-20 w-20 flex justify-center items-center ${color}`}
    >
      {key}
    </div>
  );
};
