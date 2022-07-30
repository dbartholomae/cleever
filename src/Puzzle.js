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
      trialTableau.getCard(TOP_LEFT) !== this.#solution.getCard(TOP_LEFT) ||
      trialTableau.getCard(TOP_RIGHT) !== this.#solution.getCard(TOP_RIGHT) ||
      trialTableau.getCard(BOTTOM_LEFT) !==
        this.#solution.getCard(BOTTOM_LEFT) ||
      trialTableau.getCard(BOTTOM_RIGHT) !==
        this.#solution.getCard(BOTTOM_RIGHT)
    ) {
      return {
        isValid: false,
      };
    }

    return {
      incorrectCards: [],
      isValid: true,
    };
  }
}
