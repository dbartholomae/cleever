import * as React from "react";

import { Tableau as GameTableau } from "../game/Tableau.js";
import { Tableau } from "./Tableau.jsx";

export const Default = () => (
    <Tableau
        tableau={new GameTableau()}
    />
);
