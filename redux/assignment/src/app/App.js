import React from 'react';
import { IceCream } from 'react-kawaii';
import { useSelector } from 'react-redux';

import Colors from '../components/colors';
import Moods from '../components/moods';
import { selectActiveColor } from '../features/colorsSlice';
import './App.css';

function App() {
  const activeColor = useSelector(selectActiveColor);

  return (
    <div className="App">
      <div className="IceCream">
        <IceCream size={400} color={activeColor.id} />
      </div>
      <Colors />
      <Moods />
    </div>
  );
}

export default App;
