import * as React from "react";

export const Card = ({ card }) => (
  <div>
    <span>{card.up}</span>
    <span>{card.right}</span>
    <span>{card.down}</span>
    <span>{card.left}</span>
  </div>
);
