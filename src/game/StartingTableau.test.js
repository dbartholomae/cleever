import { StartingTableau } from "./StartingTableau.js";
import { GermanCardDeck } from "./GermanCardDeck.js";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";

describe("StartingTableau", () => {
  it("creates a starting tableau with a card in every slot", () => {
    const germanCardDeck = new GermanCardDeck();
    const startingTableau = new StartingTableau(germanCardDeck);
    expect(startingTableau.getCard(TOP_LEFT)).toBeDefined();
    expect(startingTableau.getCard(TOP_RIGHT)).toBeDefined();
    expect(startingTableau.getCard(BOTTOM_LEFT)).toBeDefined();
    expect(startingTableau.getCard(BOTTOM_RIGHT)).toBeDefined();
  });
});
