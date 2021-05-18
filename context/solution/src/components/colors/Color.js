import React, { useContext } from "react";

import { StateContext } from "../../stateContext";
import styles from "./Colors.module.css";

export default function Color({ color }) {
  const { colors, setColors } = useContext(StateContext);

  const selectColor = colorId => {
    const newColors = colors.map(color => ({
      ...color,
      isSelected: color.id === colorId
    }));

    setColors(newColors);
  };

  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color.id}
        className={`${styles.ColorSquare} ${
          color.isSelected ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color.id }}
        onClick={() => selectColor(color.id)}
      />
    </span>
  );
}
