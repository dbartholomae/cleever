export const TOP_LEFT = Symbol("top-left");
export const TOP_RIGHT = Symbol("top-right");
export const BOTTOM_LEFT = Symbol("bottom-left");
export const BOTTOM_RIGHT = Symbol("bottom-right");

export class Tableau {
  openPlacementCount = 4;
  #cards;

  constructor() {
    this.#cards = new Map();
  }

  placeCard(card, position) {
    this.openPlacementCount--;
    this.#cards.set(position, card);
  }

  getCard(position) {
    return this.#cards.get(position);
  }
}
