export const drawBoard = (rows: number, cols: number) => {
  const boardContainer = document.querySelector(".board-container");

  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.setAttribute("class", i + "_" + j);
      cell.classList.add("dead");
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  boardContainer!.appendChild(table);
};

drawBoard(10, 10);
