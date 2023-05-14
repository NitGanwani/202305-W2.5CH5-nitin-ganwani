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

let cols: number;
let rows: number;

const checkNeighbors = (x: number, y: number) => {
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const col = (x + i + cols) % cols;
      const row = (y + j + rows) % rows;
      count += board[col][row];
    }
  }

  count -= board[x][y];
  return count;
};

createBoard(5, 5);
console.log(checkNeighbors(5, 5));
