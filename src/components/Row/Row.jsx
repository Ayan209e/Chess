import React from "react";
import { Square } from "../Square";

export const Row = ({ rowIndex = 0 }) => (
  <div className="flex">
    {Array.from({ length: 8 }, (_, colIndex) => {
      const isWhite = (rowIndex + colIndex) % 2 === 0;
      return (
        <Square
          rowIndex={8 - rowIndex}
          colIndex={colIndex}
          color={isWhite ? "white" : "black"}
        />
      );
    })}
  </div>
);
