import { Card } from "./Card.js";

export class CardDeck {
  #wordList;

  constructor(wordList) {
    this.#wordList = [...wordList].sort(() => Math.random() - 0.5);
  }

  drawCard() {
    if (this.#wordList.length < 4) {
      throw new TypeError(
        `Not enough words in the word list: Need at least 4 more words, but got only ${
          this.#wordList
        }`
      );
    }

    return new Card([
      this.#wordList.pop(),
      this.#wordList.pop(),
      this.#wordList.pop(),
      this.#wordList.pop(),
    ]);
  }
}
