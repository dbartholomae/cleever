import { Puzzle } from "./Puzzle.js";
import { Tableau } from "./Tableau.js";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";
import { GermanCardDeck } from "./GermanCardDeck.js";

describe("Puzzle", () => {
  it("verifies the solution tableau as correct", () => {
    const cardDeck = new GermanCardDeck();
    const solutionTableau = new Tableau();
    solutionTableau.placeCard(cardDeck.drawCard(), TOP_LEFT);
    solutionTableau.placeCard(cardDeck.drawCard(), TOP_RIGHT);
    solutionTableau.placeCard(cardDeck.drawCard(), BOTTOM_LEFT);
    solutionTableau.placeCard(cardDeck.drawCard(), BOTTOM_RIGHT);

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const trialTableau = solutionTableau;
    const result = puzzle.verifyTableau(trialTableau);

    expect(result).toEqual({ incorrectCards: [], isValid: true });
  });

  it("rejects a tableau with one missing card as incorrect", () => {
    const cardDeck = new GermanCardDeck();
    const solutionTableau = new Tableau();
    solutionTableau.placeCard(cardDeck.drawCard(), TOP_LEFT);
    solutionTableau.placeCard(cardDeck.drawCard(), TOP_RIGHT);
    solutionTableau.placeCard(cardDeck.drawCard(), BOTTOM_LEFT);
    solutionTableau.placeCard(cardDeck.drawCard(), BOTTOM_RIGHT);

    const puzzle = new Puzzle(solutionTableau);

    // WHEN
    const trialTableau = new Tableau();
    trialTableau.placeCard(solutionTableau.getCard(TOP_LEFT), TOP_LEFT);
    trialTableau.placeCard(solutionTableau.getCard(TOP_RIGHT), TOP_RIGHT);
    trialTableau.placeCard(solutionTableau.getCard(BOTTOM_LEFT), BOTTOM_LEFT);
    const result = puzzle.verifyTableau(trialTableau);

    expect(result.isValid).toBe(false);
  });
});
