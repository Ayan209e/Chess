import React from "react";
import { Row } from "../Row";

export const Board = ({ pieces = {}}) => (
  <div className="flex flex-col items-center">
    {Array.from({ length: 8 }, (_, rowIndex) => (
      <Row key={rowIndex} rowIndex={rowIndex} pieces={pieces} />
    ))}
  </div>
);
