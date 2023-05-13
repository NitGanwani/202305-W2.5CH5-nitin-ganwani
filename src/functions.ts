export const createBoard = (board: number[][], cols: number, rows: number) => {
  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};

const displayBoard = (board: number[][]) => {
  let printValue: string = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        printValue += " 0 ";
      }

      if (board[i][j] === 1) {
        printValue += " 1 ";
      }
    }

    printValue += "\n";
  }

  return printValue;
};

console.log(displayBoard(createBoard([], 6, 6)));
