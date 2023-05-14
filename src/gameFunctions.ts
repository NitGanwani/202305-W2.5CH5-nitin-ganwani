export const createBoard = (rows: number, cols: number) => {
  const board = document.querySelector(".board-container");

  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.setAttribute("class", "dead");
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  board!.appendChild(table);
};

createBoard(10, 10);
