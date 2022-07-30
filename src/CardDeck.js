import { Card } from "./Card.js";

export class CardDeck {
  #wordList;

  constructor(wordList) {
    this.#wordList = [...wordList].sort(() => Math.random() - 0.5);
  }

  drawCard() {
    return new Card([
      this.#wordList.pop(),
      this.#wordList.pop(),
      this.#wordList.pop(),
      this.#wordList.pop(),
    ]);
  }
}
