import React, { createContext, useState } from "react";

import { colorsDefault } from "./initialData";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [colors, setColors] = useState(colorsDefault);

  return (
    <StateContext.Provider value={{ colors, setColors }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
