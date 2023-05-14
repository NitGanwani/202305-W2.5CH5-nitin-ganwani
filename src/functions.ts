export const createBoard = (rows: number, cols: number) => {
  const board: number[][] = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};

export const displayBoard = (board: number[][]) => {
  let displayedBoard = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        displayedBoard += "⬜";
      }

      if (board[i][j] === 0) {
        displayedBoard += "⬛";
      }
    }

    displayedBoard += "\n";
  }

  return displayedBoard;
};

export const checkNeighbors = (board: number[][]) => {
  const newBoard: number[][] = [];

  for (let i = 0; i < board.length; i++) {
    const neighbors: number[] = [];

    for (let j = 0; j < board[i].length; j++) {
      let count = 0;

      if (board[i - 1] && board[i - 1][j - 1] === 1) {
        count++;
      }

      if (board[i - 1] && board[i - 1][j] === 1) {
        count++;
      }

      if (board[i - 1] && board[i - 1][j + 1] === 1) {
        count++;
      }

      if (board[i][j - 1] && board[i][j - 1] === 1) {
        count++;
      }

      if (board[i][j + 1] && board[i][j + 1] === 1) {
        count++;
      }

      if (board[i + 1] && board[i + 1][j - 1] === 1) {
        count++;
      }

      if (board[i + 1] && board[i + 1][j] === 1) {
        count++;
      }

      if (board[i + 1] && board[i + 1][j + 1] === 1) {
        count++;
      }

      neighbors.push(count);
    }

    newBoard.push(neighbors);
  }

  return newBoard;
};

export const getNewCells = (board: number[][]) => {
  const newCellsBoard = checkNeighbors(board);

  for (let i = 0; i < newCellsBoard.length; i++) {
    for (let j = 0; j < newCellsBoard[i].length; j++) {
      if (newCellsBoard[i][j] === 2) {
        continue;
      }

      if (newCellsBoard[i][j] === 3) {
        board[i][j] = 1;
      }

      if (newCellsBoard[i][j] < 2) {
        board[i][j] = 0;
      }

      if (newCellsBoard[i][j] > 3) {
        board[i][j] = 0;
      }
    }
  }

  return board;
};

const board: number[][] = [
  [0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

console.log(getNewCells(board));
