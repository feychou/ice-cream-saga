import React, { useContext } from "react";

import { StateContext } from "../../stateContext";
import Mood from "./Mood";
import styles from "./Moods.module.css";

export default function Moods() {
  const { moods } = useContext(StateContext);

  return (
    <div className={styles.Moods}>
      {moods.map(mood => (
        <Mood mood={mood} />
      ))}
    </div>
  );
}