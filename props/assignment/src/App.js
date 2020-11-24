import React, { useState } from "react";
import { IceCream } from "react-kawaii";

import Colors from "./components/colors";
import { colorsDefault, moodsDefault } from "./initialData";
import Moods from "./components/moods/Moods";

import "./App.css";

function App() {
  const [colors, setColors] = useState(colorsDefault);

  const selectColor = (colorId) => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        isSelected: color.id === colorId
      };
    });

    setColors(newColors);
  };

  const selectedColor = colors.find(({ isSelected }) => isSelected === true).id;

  return (
    <div className="App">
      <div className="IceCreamWrapper">
        <IceCream size={400} color={selectedColor} />
      </div>
      <Colors items={colors} action={selectColor} />
      <Moods />
    </div>
  );
}

export default App;
