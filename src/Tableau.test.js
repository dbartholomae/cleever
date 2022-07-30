import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  Tableau,
  TOP_LEFT,
  TOP_RIGHT,
} from "./Tableau.js";
import { Card } from "./Card.js";

describe("Tableau", () => {
  it("has 4 open card placements", () => {
    const tableau = new Tableau();
    expect(tableau.openPlacementCount).toBe(4);
  });

  it("has 3 open card placements after placing a card", () => {
    const tableau = new Tableau();
    tableau.placeCard(new Card());
    expect(tableau.openPlacementCount).toBe(3);
  });

  it.each([TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT])(
    "has the card in the %s slot that was placed in that slot",
    (position) => {
      const card = new Card();
      const tableau = new Tableau();
      tableau.placeCard(card, position);
      expect(tableau.getCard(position)).toEqual(card);
    }
  );
});
