import * as React from "react";
import styles from "./Card.module.css";

export const Card = ({ card }) => (
  <div className={styles.card}>
    <span className={`${styles.up} ${styles.word}`}>{card.up}</span>
    <span className={`${styles.right} ${styles.word}`}>{card.right}</span>
    <span className={`${styles.down} ${styles.word}`}>{card.down}</span>
    <span className={`${styles.left} ${styles.word}`}>{card.left}</span>
  </div>
);
