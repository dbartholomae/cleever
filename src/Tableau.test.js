import {Tableau} from './Tableau.js';

describe('Tableau', () => {
  it('has 4 open card placements', () => {
    const tableau = new Tableau();
    expect(tableau.openPlacementCount).toBe(4);
  });
});
