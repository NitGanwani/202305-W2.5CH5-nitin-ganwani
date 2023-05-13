export const createBoard = (cols: number, rows: number) => {
  const board: number[][] = [];
  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};
