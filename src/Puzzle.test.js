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

  it("rejects a tableau with one missing card as incorrect", () => {
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
    const trialTableau = new Tableau();
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
    const result = puzzle.verifyTableau(trialTableau);

    expect(result.isValid).toBe(false);
  });
});
