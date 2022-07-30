import wordlist from "./wordLists/german.json";
import { CardDeck } from "./CardDeck.js";

describe("CardDeck", () => {
  it("creates a random card", () => {
    const cardDeck = new CardDeck(wordlist);
    const card = cardDeck.drawCard();
    expect(card.up).toBeDefined();
  });

  it("throws an error if the word list runs out", () => {
    const cardDeck = new CardDeck(["a", "b", "c"]);
    expect(() => cardDeck.drawCard()).toThrow();
  });
});
