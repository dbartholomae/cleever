import { Card } from "./Card.js";
import { Puzzle } from "./Puzzle.js";

describe("Puzzle", () => {
  it("has 5 cards", () => {
    const cards = Array.from({ length: 5 }).map(() => new Card());
    const puzzle = new Puzzle(cards);
    expect(puzzle.getCards().length).toBe(5);
  });
});
