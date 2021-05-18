import React, { createContext, useState } from "react";

import { colorsDefault, moodsDefault } from "./initialData";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [colors, setColors] = useState(colorsDefault);
  const [moods, setMoods] = useState(moodsDefault);

  return (
    <StateContext.Provider 
      value={{ 
        colors,
        setColors,
        moods,
        setMoods
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
