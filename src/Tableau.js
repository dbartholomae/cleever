export const TOP_LEFT = Symbol("top-left");
export const TOP_RIGHT = Symbol("top-right");

export class Tableau {
  openPlacementCount = 4;
  topLeftCard;
  topRightCard;

  placeCard(card, position) {
    this.openPlacementCount--;
    switch (position) {
      case TOP_LEFT:
        this.topLeftCard = card;
        return;
      case TOP_RIGHT:
        this.topRightCard = card;
        return;
    }
  }

  getCard(position) {
    switch (position) {
      case TOP_LEFT:
        return this.topLeftCard;
      case TOP_RIGHT:
        return this.topRightCard;
    }
  }
}
