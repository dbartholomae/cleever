import {
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  LEFT,
  RIGHT,
  Tableau,
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
} from "./Tableau.js";
import { Card } from "./Card.js";

describe("Tableau", () => {
  it.each([TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT])(
    "has the card in the %s slot that was placed in that slot",
    (position) => {
      const card = new Card();
      const tableau = new Tableau();
      tableau.placeCard(card, position);
      expect(tableau.getCard(position)).toEqual(card);
    }
  );

  it.each([TOP, BOTTOM, LEFT, RIGHT])(
    "has the added description in the %s after adding it there",
    (position) => {
      const tableau = new Tableau();
      const description = "Schnuffelpu";
      tableau.addDescription(description, position);
      expect(tableau.getDescription(position)).toBe(description);
    }
  );
});
