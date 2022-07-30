export const TOP_LEFT = Symbol("top-left");
export const TOP_RIGHT = Symbol("top-right");
export const BOTTOM_LEFT = Symbol("bottom-left");
export const BOTTOM_RIGHT = Symbol("bottom-right");

export class Tableau {
  openPlacementCount = 4;
  topLeftCard;
  topRightCard;
  bottomLeftCard;
  bottomRightCard;

  placeCard(card, position) {
    this.openPlacementCount--;
    switch (position) {
      case TOP_LEFT:
        this.topLeftCard = card;
        return;
      case TOP_RIGHT:
        this.topRightCard = card;
        return;
      case BOTTOM_LEFT:
        this.bottomLeftCard = card;
        return;
      case BOTTOM_RIGHT:
        this.bottomRightCard = card;
        return;
    }
  }

  getCard(position) {
    switch (position) {
      case TOP_LEFT:
        return this.topLeftCard;
      case TOP_RIGHT:
        return this.topRightCard;
      case BOTTOM_LEFT:
        return this.bottomLeftCard;
      case BOTTOM_RIGHT:
        return this.bottomRightCard;
    }
  }
}
