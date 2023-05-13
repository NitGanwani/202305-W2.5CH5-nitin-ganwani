import { createBoard } from "./functions";

describe("Given a createBoard function", () => {
  describe("When it receives [], 2 and 2", () => {
    test("Then it shoud return [[2 random numbers between 0 and 1], [2 random numbers between 0 and 1]]", () => {
      const board: number[][] = [];
      const cols = 2;
      const rows = 2;
      const expectedRandomNumber = Math.floor(Math.random() * 2);
      const expected = [
        [expectedRandomNumber, expectedRandomNumber],
        [expectedRandomNumber, expectedRandomNumber],
      ];

      const correctResult = createBoard(board, cols, rows);

      expect(expectedRandomNumber).toBeLessThan(2);
      expect(expected).toReturnWith(correctResult);
    });
  });
});
