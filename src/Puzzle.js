import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";

export class Puzzle {
  #solution;

  constructor(solution) {
    this.#solution = solution;
  }

  verifyTableau(trialTableau) {
    if (
      trialTableau.isFilled() &&
      trialTableau.getCard(TOP_LEFT).equals(this.#solution.getCard(TOP_LEFT)) &&
      trialTableau.getCard(TOP_RIGHT).equals(this.#solution.getCard(TOP_RIGHT)) &&
        trialTableau.getCard(BOTTOM_LEFT).equals(this.#solution.getCard(BOTTOM_LEFT)) &&
          trialTableau.getCard(BOTTOM_RIGHT).equals(this.#solution.getCard(BOTTOM_RIGHT))
    ) {
      return {
        incorrectCards: [],
        isValid: true,
      };
    }

    return {
      incorrectCards: [],
      isValid: false,
    };
  }
}
