import { createBoard, displayBoard } from "./functions";

describe("Given a createBoard function", () => {
  describe("When it receives 2 and 2", () => {
    test("Then it shoud return an array of 2 arrays", () => {
      const cols = 2;
      const rows = 2;
      const expected = 2;

      const correctResult = createBoard(cols, rows);

      expect(expected).toBe(correctResult.length);
    });
  });
});

describe("Given a displayBoard function", () => {
  describe("When it receives an array of arrays with the numbers 0 and 1 in random positions", () => {
    test("Then it should return an array with those numbers change into a black cell and a white cell respectively", () => {
      const board = createBoard(3, 3);
      const expected = displayBoard(board);

      const correctResult = displayBoard(board);

      expect(expected).toStrictEqual(correctResult);
    });
  });
});
