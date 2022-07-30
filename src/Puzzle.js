import { BOTTOM_RIGHT } from "./TableauPositions.js";

export class Puzzle {
  verifyTableau(trialTableau) {
    if (trialTableau.getCard(BOTTOM_RIGHT) === undefined) {
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
