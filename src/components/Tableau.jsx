import React from "react";

import {
    TOP_LEFT
} from "./../game/TableauPositions.js";
import { Card } from "./Card.jsx";

export const Tableau = ({ tableau }) => (
    <div>
        <Card card={tableau.getCard(TOP_LEFT)} />
    </div>
);