export class Card {
  #words;
  #facingUp = 0;

  get up() {
    return this.#words[this.#facingUp];
  }

  get right() {
    return this.#words[(this.#facingUp + 1) % 4];
  }

  get down() {
    return this.#words[(this.#facingUp + 2) % 4];
  }

  get left() {
    return this.#words[(this.#facingUp + 3) % 4];
  }

  constructor(words) {
    this.#words = words;
  }

  rotateCounterclockwise() {
    this.#facingUp = (this.#facingUp + 1) % 4;
  }

  rotateClockwise() {
    this.#facingUp = (this.#facingUp - 1) % 4;
  }

  equals(card) {
    if (this.up === card.up &&
        this.right === card.right &&
        this.down == card.down && 
        this.left == card.left) {
          return true;
        }
        return false;
  }
}
