import React from "react";

export const Square = ({ id = "", color = "black", piece = null }) => {
  return (
    <div
      key={id}
      className={`h-20 w-20 flex justify-center items-center cursor-pointer ${color}`}
      draggable= {true}
    >
      {piece?.image ? (
        <img src={piece.image} alt={piece.id} />
      ) : (
        ""
      )}
    </div>
  );
};
