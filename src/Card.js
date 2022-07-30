export class Card {
  #words;
  #facingUp;

  get up() {
    return this.#words[this.#facingUp];
  }

  constructor(words) {
    this.#facingUp = 0;
    this.#words = words;
  }

  rotateCounterclockwise() {
    if (this.#facingUp === 3) {
      this.#facingUp = 0;
      return
    }

    this.#facingUp++;
  }

  rotateClockwise() {
    if (this.#facingUp === 0) {
      this.#facingUp = 3;
      return;
    }
    this.#facingUp--;
  }
}
