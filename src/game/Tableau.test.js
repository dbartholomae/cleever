import { Tableau } from "./Tableau.js";
import { Card } from "./Card.js";
import {
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  LEFT,
  RIGHT,
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
} from "./TableauPositions.js";

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

  it("can verify if a tableau has missing cards", () => {
    const tableau = new Tableau();
    tableau.placeCard(new Card(), TOP_LEFT);
    expect(tableau.isFilled()).toBe(false);
  })

  it("can verify a tableau with four cards as correctly filled", () => {
    const tableau = new Tableau();
    tableau.placeCard(new Card(), TOP_LEFT);
    tableau.placeCard(new Card(), TOP_RIGHT);
    tableau.placeCard(new Card(), BOTTOM_LEFT);
    tableau.placeCard(new Card(), BOTTOM_RIGHT);
    expect(tableau.isFilled()).toBe(true);
  })
});
