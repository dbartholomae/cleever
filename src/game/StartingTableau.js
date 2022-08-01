import { Tableau } from "./Tableau.js";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";

export class StartingTableau extends Tableau {
  constructor(cardDeck) {
    super();
    this.placeCard(cardDeck.drawCard(), TOP_LEFT);
    this.placeCard(cardDeck.drawCard(), TOP_RIGHT);
    this.placeCard(cardDeck.drawCard(), BOTTOM_LEFT);
    this.placeCard(cardDeck.drawCard(), BOTTOM_RIGHT);
  }
}
