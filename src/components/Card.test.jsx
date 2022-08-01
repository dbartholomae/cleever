/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";

import { Card as GameCard } from "../game/Card.js";
import { Card } from "./Card.jsx";

describe("Card", () => {
  const words = ["bebe", "otter bebe", "lisa", "benni"];

  it.each(words)("renders the word %s on the card", (word) => {
    render(<Card card={new GameCard(words)} />);
    expect(screen.getByText(word)).toBeInTheDocument();
  });
});
