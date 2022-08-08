import React from "react";
import styles from "./Tableau.module.css";

import { Card as GameCard } from "../game/Card.js";
import { Card } from "./Card.jsx";

export const Tableau = ({ tableau }) => (
    <div className={styles.tableau}>
        <div className={`${styles.card} ${styles.topleft}`}>
            <Card card={new GameCard(["Schokolade", "Drachentattoo", "Anhalter", "Goldesel"])}/>
        </div>
        <div className={`${styles.card} ${styles.bottomright}`}>
            <Card card={new GameCard(["Schokolade", "Drachentattoo", "Anhalter", "Goldesel"])} />
        </div>
    </div>
);