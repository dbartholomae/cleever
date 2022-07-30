import { Card } from "./Card.js";
import { Puzzle } from "./Puzzle.js";
import { Tableau } from "./Tableau.js";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";

describe("Puzzle", () => {
  it("has 5 cards", () => {
    const cards = Array.from({ length: 5 }).map(() => new Card());
    const puzzle = new Puzzle(cards);
    expect(puzzle.getCards().length).toBe(5);
  });

  it("verifies the solution tableau as correct", () => {
    const solutionTableau = new Tableau();
    solutionTableau.placeCard(
      new Card(["cat", "dog", "horse", "mouse"]),
      TOP_LEFT
    );
    solutionTableau.placeCard(
      new Card(["cat", "dog", "horse", "mouse"]),
      TOP_RIGHT
    );
    solutionTableau.placeCard(
      new Card(["cat", "dog", "horse", "mouse"]),
      BOTTOM_LEFT
    );
    solutionTableau.placeCard(
      new Card(["cat", "dog", "horse", "mouse"]),
      BOTTOM_RIGHT
    );

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const trialTableau = solutionTableau;
    const result = puzzle.verifyTableau(trialTableau);

    expect(result).toEqual({ incorrectCards: [], isValid: true });
  });
});