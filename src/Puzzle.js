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
    const cardTopLeft = trialTableau.getCard(TOP_LEFT);

    if (
      cardTopLeft.up !== this.#solution.getCard(TOP_LEFT).up ||
      cardTopLeft.right !== this.#solution.getCard(TOP_LEFT).right ||
      cardTopLeft.down !== this.#solution.getCard(TOP_LEFT).down ||
      cardTopLeft.left !== this.#solution.getCard(TOP_LEFT).left ||
      trialTableau.getCard(TOP_RIGHT) !== this.#solution.getCard(TOP_RIGHT) ||
      trialTableau.getCard(BOTTOM_LEFT) !== this.#solution.getCard(BOTTOM_LEFT) ||
      trialTableau.getCard(BOTTOM_RIGHT) !== this.#solution.getCard(BOTTOM_RIGHT)
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
