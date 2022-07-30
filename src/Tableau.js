export const TOP_LEFT = Symbol('top-left');

export class Tableau {
  openPlacementCount = 4;
  topLeftCard;

  placeCard(card) {
    this.openPlacementCount--;
    this.topLeftCard = card;
  }
}
