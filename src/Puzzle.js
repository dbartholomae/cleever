export class Puzzle {
  #cards;

  constructor(cards) {
    this.#cards = cards;
  }

  getCards() {
    return this.#cards;
  }

  verifyTableau(trialTableau) {
    return {
      incorrectCards: [],
      isValid: true,
    };
  }
}
