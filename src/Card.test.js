import {Card} from './Card.js';

describe('Card', () => {
  const words = [
    'bulemie',
    'alphabet',
    'chlamydien',
    'dyskinesie'];

  it('starts with its first word up', () => {
    const card = new Card(words);
    expect(card.up).toBe(words[0]);
  });

  it('has the second word up after being rotated counterclockwise once', () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    expect(card.up).toBe(words[1]);
  });

  it('has the first word up after being rotated counterclockwise and clockwise once each', () => {
    const card = new Card(words);
    card.rotateCounterclockwise();
    card.rotateClockwise();
    expect(card.up).toBe(words[0]);
  });
});
