import React, { useContext } from "react";

import { StateContext } from "../../stateContext";
import Color from "./Color";
import styles from "./Colors.module.css";

export default function ColorList() {
  const { colors } = useContext(StateContext);

  return (
    <div className={styles.Colors}>
      {colors.map(color => (
        <Color color={color} />
      ))}
    </div>
  );
}
