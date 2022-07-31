import { Card } from "./Card.js";

describe("Card", () => {
  const words = ["bulemie", "alphabet", "chlamydien", "dyskinesie"];

  it("starts with its first word facing up", () => {
    const card = new Card(words);
    expect(card.up).toBe(words[0]);
  });

  it("starts with its second word facing right", () => {
    const card = new Card(words);
    expect(card.right).toBe(words[1]);
  });

  it("has the third word facing right after being rotated counterclockwise once", () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    expect(card.right).toBe(words[2]);
  });

  it("has the fourth word facing down after being rotated counterclockwise once", () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    expect(card.down).toBe(words[3]);
  });

  it("has the third word facing left after being rotated clockwise once", () => {
    const card = new Card(words);
    card.rotateClockwise();
    expect(card.left).toBe(words[2]);
  });

  it("has the second word up after being rotated counterclockwise once", () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    expect(card.up).toBe(words[1]);
  });

  it("has the first word up after being rotated counterclockwise and clockwise once each", () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    card.rotateClockwise();
    expect(card.up).toBe(words[0]);
  });

  describe("#equals", () => {
    it("is equal to itself", () => {
      const card = new Card(words);
      expect(card.equals(card)).toBe(true);
    })
  });
});
