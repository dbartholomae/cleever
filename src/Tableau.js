export const TOP_LEFT = Symbol("top-left");
export const TOP_RIGHT = Symbol("top-right");
export const BOTTOM_LEFT = Symbol("bottom-left");
export const BOTTOM_RIGHT = Symbol("bottom-right");

export const LEFT = Symbol("left");
export const RIGHT = Symbol("right");
export const TOP = Symbol("top");
export const BOTTOM = Symbol("bottom");

export class Tableau {
  openPlacementCount = 4;
  #cards;
  #descriptions;

  constructor() {
    this.#cards = new Map();
    this.#descriptions = new Map();
  }

  placeCard(card, position) {
    this.openPlacementCount--;
    this.#cards.set(position, card);
  }

  getCard(position) {
    return this.#cards.get(position);
  }

  addDescription(description, position) {
    this.#descriptions.set(position, description);
  }

  getDescription(position) {
    return this.#descriptions.get(position);
  }
}
