import { BOTTOM_LEFT, BOTTOM_RIGHT } from "./TableauPositions.js";

export class Puzzle {
  #solution;

  constructor(solution) {
    this.#solution = solution;
  }

  verifyTableau(trialTableau) {
    if (
      trialTableau.getCard(BOTTOM_RIGHT) !==
        this.#solution.getCard(BOTTOM_RIGHT) ||
      trialTableau.getCard(BOTTOM_LEFT) !== this.#solution.getCard(BOTTOM_LEFT)
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
