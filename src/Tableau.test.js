import { Tableau, TOP_LEFT, TOP_RIGHT } from "./Tableau.js";
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

  it("has the card in the top left slot that was placed in the top left slot", () => {
    const card = new Card();
    const tableau = new Tableau();
    tableau.placeCard(card, TOP_LEFT);
    expect(tableau.getCard(TOP_LEFT)).toEqual(card);
  });

  it("has the card in the top right slot that was placed in the top right slot", () => {
    const card = new Card();
    const tableau = new Tableau();
    tableau.placeCard(card, TOP_RIGHT);
    expect(tableau.getCard(TOP_RIGHT)).toEqual(card);
  });
});
