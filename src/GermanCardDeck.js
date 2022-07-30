import { CardDeck } from "./CardDeck.js";
import wordlist from "./wordLists/german.json";

export class GermanCardDeck extends CardDeck {
  constructor() {
    super(wordlist);
  }
}
