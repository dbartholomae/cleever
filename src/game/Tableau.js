export class Tableau {
  #cards;
  #descriptions;

  constructor() {
    this.#cards = new Map();
    this.#descriptions = new Map();
  }

  placeCard(card, position) {
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

  isFilled() {
    return (this.#cards.size === 4)
  }

}
