import React, { useState, useContext } from "react";

import { IceCreamWrapper, ColorList, Moods } from "../components";
import { StateContext } from "../stateContext";
import { moodsDefault } from "../initialData";

import "./App.css";

function App() {
  const { colors } = useContext(StateContext);
  const [moods, setMoods] = useState(moodsDefault);

  const selectMood = moodId => {
    const newMoods = moods.map(mood => ({
      ...mood,
      isSelected: mood.id === moodId
    }));

    setMoods(newMoods);
  };

  const activeColor = colors.find(color => color.isSelected === true).id;
  const activeMood = moods.find(mood => mood.isSelected === true).id;

  return (
    <div className="App">
      <IceCreamWrapper color={activeColor} mood={activeMood} />
      <ColorList />
      <Moods items={moods} action={selectMood} />
    </div>
  );
}

export default App;
