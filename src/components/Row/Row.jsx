import React from "react";
import { Square } from "../Square";

export const Row = ({ rowIndex = 0, pieces = {} }) => (
  <div className="flex">
    {Array.from({ length: 8 }, (_, colIndex) => {
      const colLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const col = colLetters[colIndex] || "";
      const row = 8 - rowIndex
      const key = `${col}${row}`;

      const isWhite = (rowIndex + colIndex) % 2 === 0;
      const piece = Object.values(pieces).flatMap((colorPieces) =>
        Object.values(colorPieces).flatMap((typePieces) =>
          Array.isArray(typePieces) ? typePieces : [typePieces]
        )
      ).find((p) => p.position === key) || null;
      console.log(piece);
      return (
        <Square
          key={key}
          id={key}
          color={isWhite ? "white" : "black"}
          piece={piece}
        />
      );
    })}
  </div>
);
