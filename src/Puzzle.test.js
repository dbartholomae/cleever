import { Puzzle } from "./Puzzle.js";
import { Tableau } from "./Tableau.js";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";
import { GermanCardDeck } from "./GermanCardDeck.js";
import { StartingTableau } from "./StartingTableau.js";
import { Card } from "./Card.js";

describe("Puzzle", () => {
  it("verifies the solution tableau as correct", () => {
    const cardDeck = new GermanCardDeck();
    const solutionTableau = new StartingTableau(cardDeck);

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const result = puzzle.verifyTableau(solutionTableau);

    expect(result).toEqual({ incorrectCards: [], isValid: true });
  });

  it("rejects a tableau with one missing card as incorrect", () => {
    const cardDeck = new GermanCardDeck();
    const solutionTableau = new StartingTableau(cardDeck);

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const trialTableau = new Tableau();
    trialTableau.placeCard(solutionTableau.getCard(TOP_LEFT), TOP_LEFT);
    trialTableau.placeCard(solutionTableau.getCard(TOP_RIGHT), TOP_RIGHT);
    trialTableau.placeCard(solutionTableau.getCard(BOTTOM_LEFT), BOTTOM_LEFT);
    const result = puzzle.verifyTableau(trialTableau);

    expect(result.isValid).toBe(false);
  });

  it.each([TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT])(
    "rejects a tableau with the %s card incorrect as incorrect",
    (incorrectPosition) => {
      const cardDeck = new GermanCardDeck();
      const solutionTableau = new StartingTableau(cardDeck);

      const puzzle = new Puzzle(solutionTableau);

      // WHEN
      const trialTableau = new Tableau();

      [TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT].forEach((position) => {
        trialTableau.placeCard(
          position === incorrectPosition
            ? new Card("a", "b", "c", "d")
            : solutionTableau.getCard(position),
          position
        );
      });
      const result = puzzle.verifyTableau(trialTableau);

      expect(result.isValid).toBe(false);
    }
  );

  it("accepts a tableau with a different card that has the right words", () => {
    const cardDeck = new GermanCardDeck();
    const solutionTableau = new StartingTableau(cardDeck);

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const trialTableau = new Tableau();

    for (let position of [TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT]) {
      trialTableau.placeCard(
        solutionTableau.getCard(position),
        position
      );
    };

    const card = solutionTableau.getCard(TOP_LEFT);
    trialTableau.placeCard(new Card([card.up, card.right, card.down, card.left]), TOP_LEFT);

    const result = puzzle.verifyTableau(trialTableau);

    expect(result.isValid).toBe(true); 
  })
});
