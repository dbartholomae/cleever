import * as React from "react";

import { Card as GameCard } from "../game/Card.js";
import { Card } from "./Card.jsx";

export const Default = () => (
  <Card card={new GameCard(["bebe", "otter bebe", "lisa", "benni"])} />
);
