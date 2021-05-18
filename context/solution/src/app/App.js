import React, { useContext } from "react";

import { IceCreamWrapper, ColorList, MoodList } from "../components";
import { StateContext } from "../stateContext";

import "./App.css";

function App() {
  const { colors, moods } = useContext(StateContext);

  const activeColor = colors.find(color => color.isSelected === true).id;
  const activeMood = moods.find(mood => mood.isSelected === true).id;

  return (
    <div className="App">
      <IceCreamWrapper color={activeColor} mood={activeMood} />
      <ColorList />
      <MoodList />
    </div>
  );
}

export default App;
