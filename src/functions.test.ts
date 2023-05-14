import {
  checkNeighbors,
  createBoard,
  displayBoard,
  getNewCells,
} from "./functions";

describe("Given a createBoard function", () => {
  describe("When it receives 2 and 2", () => {
    test("Then it should return an array of 2 rows and 2 columns", () => {
      const rows = 2;
      const cols = 2;

      const correctResult = createBoard(rows, cols);

      expect(correctResult.length).toBe(2);
      expect(correctResult[0].length).toBe(2);
    });
  });

  describe("When it receives 3 and NaN", () => {
    test("Then it should return [[], [], []]", () => {
      const rows = 3;
      const cols = NaN;
      const expected = [[], [], []];

      const correctResult = createBoard(rows, cols);

      expect(correctResult).toStrictEqual(expected);
    });
  });
});

describe("Given a displayBoard function", () => {
  describe("When it receives an array of arrays [[0, 0, 1], [1, 1, 0], [0, 1, 0]]", () => {
    test("Then it should return ⬛⬛⬜\n⬜⬜⬛\n⬛⬜⬛", () => {
      const board: number[][] = [
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const expected = `⬛⬛⬜\n⬜⬜⬛\n⬛⬜⬛\n`;

      const correctResult = displayBoard(board);

      expect(correctResult).toBe(expected);
    });
  });

  describe("When it receives [[], []]", () => {
    test("Then it should return two empty strings '' and '' ", () => {
      const board = [[], []];
      const expected = `\n\n`;

      const correctResult = displayBoard(board);

      expect(correctResult).toBe(expected);
    });
  });
});

describe("Given a checkNeighbors function", () => {
  describe("When it receives an array of arrays [[0, 0, 1], [1, 1, 0], [0, 1, 0]]", () => {
    test("Then it should return [[ 2, 3, 1 ], [ 2, 3, 3 ], [ 3, 2, 2 ]]", () => {
      const board: number[][] = [
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const expected = [
        [2, 3, 1],
        [2, 3, 3],
        [3, 2, 2],
      ];

      const correctResult = checkNeighbors(board);

      expect(correctResult).toStrictEqual(expected);
    });
  });

  describe("When it receives [[], [], []]", () => {
    test("Then it should return [[], [], []]", () => {
      const board = [[], [], []];
      const expected = [[], [], []];

      const correctResult = checkNeighbors(board);

      expect(correctResult).toStrictEqual(expected);
    });
  });
});

describe("Given a getNewCells function", () => {
  describe("When it receives an array of arrays [[0, 0, 1, 0, 1], [1, 1, 0, 1, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]]", () => {
    test("Then it should return [[ 0, 1, 1, 0, 1 ], [ 1, 1, 0, 0, 1 ], [ 1, 1, 0, 1, 1 ], [0, 0, 0, 0, 0]]", () => {
      const board: number[][] = [
        [0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ];

      const correctResult = getNewCells(board);

      expect(correctResult).toStrictEqual(expected);
    });
  });
});
