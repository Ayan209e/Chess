export function getInitialPieces() {
  const colLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const getPosition = (colIndex, rowIndex) =>
    `${colLetters[colIndex]}${8 - rowIndex}`;

  return {
    black: {
      king: {
        position: getPosition(4, 0),
        image: "/Assets/pieces/black/king.png",
        id: "BK",
      },
      queen: {
        position: getPosition(3, 0),
        image: "/Assets/pieces/black/queen.png",
        id: "BQ",
      },
      rooks: [
        {
          position: getPosition(0, 0),
          image: "/Assets/pieces/black/rook.png",
          id: "BR",
        },
        {
          position: getPosition(7, 0),
          image: "/Assets/pieces/black/rook.png",
          id: "BR",
        },
      ],
      knights: [
        {
          position: getPosition(1, 0),
          image: "/Assets/pieces/black/knight.png",
          id: "BN",
        },
        {
          position: getPosition(6, 0),
          image: "/Assets/pieces/black/knight.png",
          id: "BN",
        },
      ],
      bishops: [
        {
          position: getPosition(2, 0),
          image: "/Assets/pieces/black/bishop.png",
          id: "BB",
        },
        {
          position: getPosition(5, 0),
          image: "/Assets/pieces/black/bishop.png",
          id: "BB",
        },
      ],
      pawns: Array.from({ length: 8 }, (_, i) => ({
        position: getPosition(i, 1),
        image: "/Assets/pieces/black/pawn.png",
        id: "BP",
      })),
    },
    white: {
      king: {
        position: getPosition(4, 7),
        image: "/Assets/pieces/white/king.png",
        id: "WK",
      },
      queen: {
        position: getPosition(3, 7),
        image: "/Assets/pieces/white/queen.png",
        id: "WQ",
      },
      rooks: [
        {
          position: getPosition(0, 7),
          image: "/Assets/pieces/white/rook.png",
          id: "WR",
        },
        {
          position: getPosition(7, 7),
          image: "/Assets/pieces/white/rook.png",
          id: "WR",
        },
      ],
      knights: [
        {
          position: getPosition(1, 7),
          image: "/Assets/pieces/white/knight.png",
          id: "WN",
        },
        {
          position: getPosition(6, 7),
          image: "/Assets/pieces/white/knight.png",
          id: "WN",
        },
      ],
      bishops: [
        {
          position: getPosition(2, 7),
          image: "/Assets/pieces/white/bishop.png",
          id: "WB",
        },
        {
          position: getPosition(5, 7),
          image: "/Assets/pieces/white/bishop.png",
          id: "WB",
        },
      ],
      pawns: Array.from({ length: 8 }, (_, i) => ({
        position: getPosition(i, 6),
        image: "/Assets/pieces/white/pawn.png",
        id: "WP",
      })),
    },
  };
}
