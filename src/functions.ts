let board: number[][];

export const createBoard = (cols: number, rows: number) => {
  let printValue: string = "";
  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
      if (board[i][j] === 0) {
        printValue += " M ";
      }

      if (board[i][j] === 1) {
        printValue += " V ";
      }
    }

    printValue += "\n";
  }

  return printValue;
};
