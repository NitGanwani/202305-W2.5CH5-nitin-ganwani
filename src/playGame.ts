import { createBoard, displayBoard, getNewCells } from "./functions.js";

const playGame = () => {
  const board = createBoard(15, 30);

  setInterval(() => {
    console.clear();
    getNewCells(board);
    console.log(displayBoard(board));
  }, 200);
};

playGame();
