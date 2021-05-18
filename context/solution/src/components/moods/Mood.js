import React, { useContext } from "react";
import { Planet } from "react-kawaii";

import { StateContext } from "../../stateContext";
import styles from "./Moods.module.css";

export default function Mood({ mood }) {
  const { moods, setMoods } = useContext(StateContext);

  const selectMood = moodId => {
    const newMoods = moods.map(mood => ({
      ...mood,
      isSelected: mood.id === moodId
    }));

    setMoods(newMoods);
  };

  return (
    <span
      className={`${styles.MoodWrapper} ${
        mood.isSelected ? styles.MoodWrapperSelected : ""
      }`}
      onClick={() => selectMood(mood.id)}
    >
      <Planet
        className={styles.Mood}
        color="#fad201"
        mood={mood.id}
        size={70}
      />
    </span>
  );
}