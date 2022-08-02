/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";

import { TOP_LEFT } from "./../game/TableauPositions.js";
import { Card as GameCard } from "../game/Card.js";
import { Tableau as GameTableau} from "../game/Tableau.js";
import { Tableau } from "./Tableau.jsx";

describe("Tableau", () => {
    it("renders the four words of the card if the tableau has one card", () => {
        //arrange
        const card = new GameCard(["bebe", "otter bebe", "lisa", "benni"]); 
        const tableau = new GameTableau();
        tableau.placeCard(card, TOP_LEFT);
        //act
        render(<Tableau tableau={tableau} />);
        //assert
        expect(screen.getByText(card.up)).toBeInTheDocument();
        expect(screen.getByText(card.right)).toBeInTheDocument();
        expect(screen.getByText(card.down)).toBeInTheDocument();
        expect(screen.getByText(card.left)).toBeInTheDocument();
    });
});
